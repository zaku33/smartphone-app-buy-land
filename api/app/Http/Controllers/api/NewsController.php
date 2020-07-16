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
        return resMes("", 200, $all_news);
    }

    public function getNewsByQuery()
    {
        $text_input = request()->query('textInput');
        $news_found = NewsModel::find_news($text_input);
        return resMes("", 200, $news_found);
    }

    public function createNews()
    {
        try {
            $user_info = Auth::user();

            $author = $user_info->id;
            $title = request('title');
            $content = request('content');
            $price = request('price');
            $type_post = priceToPriority($price);
            $image = request('image');
            $location = request('location');

            $news_post = new NewsModel();
            $news_post->author = $author;
            $news_post->title = $title;
            $news_post->content = $content;
            $news_post->price = $price;
            $news_post->type_post = $type_post;
            $news_post->image = $image;
            $news_post->location = $location;
            $news_post->save();

            return resMes("Create News success");
        } catch (\Throwable $th) {
            return resMes($th->getMessage(), 500);
        }
    }

    public function updateNews()
    {
    }
}
