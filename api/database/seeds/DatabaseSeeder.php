<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::connection()->table('news_posts')->insert([
            [
                'author' => 1,
                'title' => 'test',
                'content' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                'price' => 1200000,
                'type_post' => json_encode((object)[
                    'priority' => 1,
                    'type_msg' => 'HOT'
                ]),
                'image' => json_encode((object)[
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                    "https://th.bing.com/th/id/OIP.w2gHKPj1RKXqliNORu9l2QHaF7?pid=Api&rs=1",
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                    "https://th.bing.com/th/id/OIP.w2gHKPj1RKXqliNORu9l2QHaF7?pid=Api&rs=1",
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                    // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
                ]),
                'location' => json_encode((object)['name' => 'Home', 'lat' => 0.11, 'long' => 0.22]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'author' => 1,
                'title' => 'test',
                'content' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                'price' => 500000,
                'type_post' => json_encode((object)[
                    'priority' => 1,
                    'type_msg' => 'HOT'
                ]),
                'image' => json_encode((object)[
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                    "https://th.bing.com/th/id/OIP.w2gHKPj1RKXqliNORu9l2QHaF7?pid=Api&rs=1",
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                    "https://th.bing.com/th/id/OIP.w2gHKPj1RKXqliNORu9l2QHaF7?pid=Api&rs=1",
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                    // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
                ]),
                'location' => json_encode((object)['name' => 'Home', 'lat' => 0.11, 'long' => 0.22]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'author' => 1,
                'title' => 'test',
                'content' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                'price' => 1000000,
                'type_post' => json_encode((object)[
                    'priority' => 1,
                    'type_msg' => 'HOT'
                ]),
                'image' => json_encode((object)[
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                    "https://th.bing.com/th/id/OIP.w2gHKPj1RKXqliNORu9l2QHaF7?pid=Api&rs=1",
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                    "https://th.bing.com/th/id/OIP.w2gHKPj1RKXqliNORu9l2QHaF7?pid=Api&rs=1",
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                    // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
                ]),
                'location' => json_encode((object)['name' => 'Home', 'lat' => 0.11, 'long' => 0.22]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'author' => 1,
                'title' => 'test',
                'content' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                'price' => 400000,
                'type_post' => json_encode((object)[
                    'priority' => 1,
                    'type_msg' => 'HOT'
                ]),
                'image' => json_encode((object)[
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                    "https://th.bing.com/th/id/OIP.w2gHKPj1RKXqliNORu9l2QHaF7?pid=Api&rs=1",
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                    "https://th.bing.com/th/id/OIP.w2gHKPj1RKXqliNORu9l2QHaF7?pid=Api&rs=1",
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                    // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
                ]),
                'location' => json_encode((object)['name' => 'Home', 'lat' => 0.11, 'long' => 0.22]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
        ]);
        DB::connection()->table('users')->insert([
            'username' => 'asd',
            'password' => bcrypt('asdasd'),
            'nickname' => 'Nguyễn Hoàng Vương',
            'phone' => '098185373',
            'email' => 'nguyenhoangvuong44@gmail.com',
            'avatar' => 'https://th.bing.com/th/id/OIP.w2gHKPj1RKXqliNORu9l2QHaF7?pid=Api&rs=1',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::connection()->table('avatars')->insert([
            'author' => 1,
            'path' => 'kanade.jpg'
        ]);
    }
}
