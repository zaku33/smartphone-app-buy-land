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
        $dummyData =[
            [
                'price' => 1000000,
                'content' => "Nhà này bán",
                'title' => "Bán đất"
            ],
            [
                'price' => 5000000,
                'content' => "Nhà này bán",
                'title' => "Bán đất"
            ],
            [
                'price' => 9000000,
                'content' => "Nhà này bán",
                'title' => "Bán đất"
            ],
            [
                'price' => 20000000,
                'content' => "Nhà này bán",
                'title' => "Bán đất"
            ]
        ];
        foreach ($dummyData as $data) {
            if ($data['price'] < 5000000) $priority_icon = "heart";
            elseif ($data['price'] >= 5000000 && $data['price'] <= 10000000) $priority_icon = "eye";
            elseif ($data['price'] > 10000000) $priority_icon = "exclamation";

            DB::connection()->table('news_posts')->insert([
                'author' => 1,
                'title' => $data['title'],
                'content' => $data['content'],
                'price' => $data['price'],
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
                    'longitude' => 0
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
