<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NewsModel extends Model
{
    protected $connection = 'mysql';
    protected $table = 'news_posts';

    protected $casts = [
        'type_post' => 'json',
        'image' => 'array',
        'location' => 'json',
        'land_info' => 'json'

    ];
    protected $fillable =[
        'title'
    ];


    public static function get_relation_with_news()
    {
        $query = self::select(
            'np.*',
            'u.avatar',
            'u.nickname',
            'u.phone'
        )->from('news_posts as np')->leftJoin('users as u', 'u.id', '=', 'np.author')->orderByDesc('np.updated_at')->get()->toArray();
        return $query;
    }

    public static function find_news($text_input)
    {
        $query = self::select(
            'np.*',
            'u.avatar',
            'u.nickname',
            'u.phone'
        )->from('news_posts as np')->leftJoin('users as u', 'u.id', '=', 'np.author')->
        where('title', 'like', $text_input."%")->
        orWhere('price', 'like', $text_input."%")->
        orWhere('content', 'like', $text_input."%")->
        orderByDesc('np.updated_at')->
        get()->toArray();
        return $query;
    }

    public static function find_news_by_price($price_from , $price_to){
        $query = self::select(
            'np.*',
            'u.avatar',
            'u.nickname',
            'u.phone'
        )->from('news_posts as np')->leftJoin('users as u', 'u.id', '=', 'np.author')->
        whereBetween ('price', [$price_from , $price_to])->
        orderByDesc('np.updated_at')->
        get()->toArray();
        return $query;
    }
}
