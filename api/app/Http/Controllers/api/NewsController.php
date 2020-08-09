<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
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
            $type_post = priceToPriority($price);
            $image = request('image');
            $location = request('location');

            $news_post = new NewsModel();
            $news_post->author = $author;
            $news_post->title = $title;
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
            $news_found->price = $price;
            $news_found->type_post = $type_post;
            $news_found->location = $location;
            $news_found->save();
            return resMes(__('api.news.update_ok'), 200);
        } catch (\Throwable $th) {
            return resMes($th->getMessage(), 500);
        }
    }
}
