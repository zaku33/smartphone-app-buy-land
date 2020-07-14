<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class UserModel extends User
{
    protected $connection = 'mysql';
    protected $table = 'users';
}
