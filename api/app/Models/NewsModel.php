<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NewsModel extends Model
{
    protected $connection = 'mysql';
    protected $table = 'news_posts';

    protected $casts = [
        'type_post' => 'json',
        'image' => 'json',
        'location' => 'json',

    ];


    public static function get_relation_with_news()
    {
        $query = self::select(
            'np.*',
            'p.avatar',
            'p.nickname',
            'p.phone'
        )->from('news_posts as np')->leftJoin('profiles as p', 'p.id', '=', 'np.author')->get()->toArray();
        return $query;
    }

    public static function find_news($text_input)
    {
        $query = self::select(
            'np.*',
            'p.avatar',
            'p.nickname',
            'p.phone'
        )->from('news_posts as np')->leftJoin('profiles as p', 'p.id', '=', 'np.author')->
        where('title', 'like', $text_input."%")->
        orWhere('price', 'like', $text_input."%")->
        orWhere('content', 'like', $text_input."%")->
        get()->toArray();
        return $query;
    }
}
