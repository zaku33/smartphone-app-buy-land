<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NewsModel extends Model
{
    protected $connection = 'mysql';
    protected $table = 'news_posts';
}
