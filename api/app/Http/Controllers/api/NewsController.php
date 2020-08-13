<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\InteractModel;
use App\Models\NewsModel;
use Illuminate\Support\Facades\Auth;

class NewsController extends Controller
{
    public function getAllNews()
    {
        $all_news = NewsModel::get_relation_with_news();
        $user_id =  Auth::user()->id;
        foreach ($all_news as &$news) {
            if ($news['author'] == $user_id) {
                $news['is_editable'] = true;
            } else {
                $news['is_editable'] = false;
            }
        }
        return resMes("", 200, $all_news);
    }

    public function getNewsByQuery()
    {

        $text_input = request()->query('textInput');
        $news_found = NewsModel::find_news($text_input);
        $user_id =  Auth::user()->id;
        foreach ($news_found as &$news) {
            if ($news['author'] == $user_id) {
                $news['is_editable'] = true;
            } else {
                $news['is_editable'] = false;
            }
        }
        return resMes("", 200, $news_found);
    }

    public function getNewsByPrice()
    {
        $price_from = request()->query('price_from');
        $price_to = request()->query('price_to');
        $news_found = NewsModel::find_news_by_price($price_from,$price_to);
        $user_id =  Auth::user()->id;
        foreach ($news_found as &$news) {
            if ($news['author'] == $user_id) {
                $news['is_editable'] = true;
            } else {
                $news['is_editable'] = false;
            }
        }
        return resMes("", 200, $news_found);
    }

    public function getNewsById()
    {
        try {
            $user_id =  Auth::user()->id;
            $id = request('newsId');
            $news_found = NewsModel::find($id);
            if ($news_found['author'] == $user_id) {
                return resMes("", 200, $news_found);
            } else {
                return resMes(__('api.news.getById_403'), 403);
            }
        } catch (\Throwable $th) {
            return resMes($th->getMessage(), 500);
        }
    }

    public function createNews()
    {
        try {
            $user_info = Auth::user();

            $author = $user_info->id;
            $title = request('title');
            $address = request('address');
            $content = request('content');
            $price = request('price');
            $land_info = request('land_info');
            $type_post = priceToPriority($price);
            $image = request('image');
            $location = request('location');


            $news_post = new NewsModel();
            $news_post->author = $author;
            $news_post->title = $title;
            $news_post->land_info = $land_info;
            $news_post->address = $address;
            $news_post->content = $content;
            $news_post->price = $price;
            $news_post->type_post = $type_post;
            $news_post->image = $image;
            $news_post->location = $location;
            $news_post->save();

            return resMes(__('api.news.create_ok'));
        } catch (\Throwable $th) {
            return resMes($th->getMessage(), 500);
        }
    }

    public function updateNews()
    {
        try {
            $news_id = request('id');
            $title = request('title');
            $address =request('address');
            $content = request('content');
            $land_info = request('land_info');
            $price = (int) request('price');
            $type_post = priceToPriority($price);
            $location = request('location');
            $user_auth_id = Auth::user()->id;
            $news_found = NewsModel::find($news_id);

            if (!$news_found) return resMes("Cannot find this news", 404);
            if ($news_found['author'] != $user_auth_id) return resMes(__('api.news.getById_403'), 403);
            $news_found->title = $title;
            $news_found->address = $address;
            $news_found->content = $content;
            $news_found->land_info = $land_info;
            $news_found->price = $price;
            $news_found->type_post = $type_post;
            $news_found->location = $location;
            $news_found->save();
            return resMes(__('api.news.update_ok'), 200);
        } catch (\Throwable $th) {
            return resMes($th->getMessage(), 500);
        }
    }

    public function deleteNews(){
        $user_auth_id = Auth::user()->id;
        $news_id = request('news_id');
        $found_news = NewsModel::findOrFail($news_id);
        if($found_news['author'] !== $user_auth_id) {
            return resMes("Unauthorized", 401);
        }
        $found_news->delete();
        return resMes("Delete news success");

    }

    public function likeThisNews()
    {
        $user_auth_id = Auth::user()->id;
        $news_id = request('news_id');
        $check_exist = InteractModel::check_if_exist_yet($user_auth_id,$news_id);
        if($check_exist){
            $check_toggle = InteractModel::toggle_status_if_exist($user_auth_id,$news_id);
            return $check_toggle ? resMes("Liked") : resMes("Unliked");
        }else{
            $interact = new InteractModel();
            $interact->author = $user_auth_id;
            $interact->news_id = $news_id;
            $interact->type_interact = InteractModel::TYPE_INTERACT_LIKE;
            $interact->status = InteractModel::STATUS_LIKE;
            $interact->save();
            return resMes("First time like this news");
        }
    }

    public function getLikedNewsLocation()
    {
        $user_auth_id = Auth::user()->id;
        $get_all_news_id = InteractModel::all_news_user_like($user_auth_id);
        $news_found = NewsModel::select('title','location','id')->whereIn('id',$get_all_news_id)->get()->toArray();
        return resMes("",200,$news_found);
    }
}
