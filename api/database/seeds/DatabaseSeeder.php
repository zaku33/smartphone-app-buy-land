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
        $price_pool = [
            1000000,
            5000000,
            9000000,
            20000000
        ];
        foreach ($price_pool as $pool) {
            if ($pool < 5000000) $priority_icon = "heart";
            elseif ($pool >= 5000000 && $pool <= 10000000) $priority_icon = "eye";
            elseif ($pool > 10000000) $priority_icon = "exclamation";

            DB::connection()->table('news_posts')->insert([
                'author' => 1,
                'title' => 'test',
                'content' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                'price' => $pool,
                'land_info' => json_encode([
                   'square' => 200,
                   'floor'  => 4
                ]),
                'type_post' => json_encode((object)[
                    "priority_icon" => $priority_icon
                ]),
                'image' => json_encode([
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                    "https://th.bing.com/th/id/OIP.w2gHKPj1RKXqliNORu9l2QHaF7?pid=Api&rs=1",
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                    "https://th.bing.com/th/id/OIP.w2gHKPj1RKXqliNORu9l2QHaF7?pid=Api&rs=1",
                    "https://images3.alphacoders.com/982/thumb-1920-982034.jpg"
                ]),
                'address' => 'Home',
                'location' => json_encode((object)[
                    'latitude' => 0,
                    'longitude' => 0,
                    'latitudeDelta' => 0.001,
                    'longitudeDelta' => 0.001
                ]),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
        }

        DB::connection()->table('users')->insert([
            'username' => 'aaa',
            'password' => bcrypt('123123'),
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
