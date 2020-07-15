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
        try {
            $user_info = Auth::user();

            $author = $user_info->id;
            $title = request('title');
            $content = request('content');
            $price = request('price');
            $type_post = priceToPriority($price);
            $image = request()->file('my_img');
            // $this->uploadGalery();
            $location = request('location');

            // print_r(request()->all());

            $news_post = new NewsModel();
            $news_post->author = $author;
            $news_post->title = $title;
            $news_post->content = $content;
            $news_post->price = $price;
            $news_post->type_post = $type_post;
            $news_post->image = $image;
            $news_post->location = $location;
            $news_post->save();

            return resMes(200, "Create News success");
        } catch (\Throwable $th) {
            return resMes(500, $th->getMessage());
        }
    }

    public function updateNews()
    {
    }


    private function uploadGalery()
    {
        $this->validate(request(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,bmp,gif,svg|max:2048',
        ]);
        if (request()->hasFile('image')) {
            $image = request()->file('image');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/storage/galeryImages/');
            $image->move($destinationPath, $name);
            $this->save();
            return back()->with('success', 'Image Upload successfully');
        }
    }
}
