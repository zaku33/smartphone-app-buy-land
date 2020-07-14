<?php

namespace App\Http\Controllers;

use App\Models\NewsModel;

class NewsController extends GeneralController
{
    public function getAllNews()
    {
        $all_news = NewsModel::get_relation_with_news();
        return response()->json([
            'news' => $all_news
        ]);
    }

    public function getNewsByQuery()
    {
        $text_input = request()->query('textInput');
        $news_found = NewsModel::find_news($text_input);
        return response()->json([
            'news' => $news_found
        ]);
    }

    public function createNews()
    {
        $title = request('title');
        $content = request('content');
        $price = request('price');
        $author = request('author');
        $image[] = request('image');
    }

    public function updateNews($id)
    {
        
    }
}