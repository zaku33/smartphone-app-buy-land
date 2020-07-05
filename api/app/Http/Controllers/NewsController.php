<?php

namespace App\Http\Controllers;

use App\Models\NewsModel;

class NewsController extends Controller
{
    public function getAllNews()
    {
        $all_news = NewsModel::all();
        return response()->json([
            'news' => $all_news
        ]);
    }
}