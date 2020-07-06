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
            'author' => 1,
            'title' => 'test',
            'content' => 'Hello World',
            'price' => 1200000,
            'type_post' => json_encode((object)[
                'priority' => 1,
                'type_msg' => 'HOT'
            ]),
            'image' => json_encode((object)[
                "https://images3.alphacoders.com/982/thumb-1920-982034.jpg",
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
            ]),
            'location' => json_encode((object)['name' => 'Home','lat' => 0.11,'long' => 0.22]),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::connection()->table('profiles')->insert([
            'username' => 'zaku33',
            'password' => Hash::make('0121245'),
            'nickname' => 'Nguyễn Hoàng Vương',
            'phone' => '098185373',
            'email' => 'nguyenhoangvuong44@gmail.com',
            'avatar' => 'kanade.png',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
