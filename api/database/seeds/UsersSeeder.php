<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $users = [
            ['name' => 'Adrian B.','email'=>'ba@example.com','password'=> Hash::make('parola')]
        ];

        foreach($users as &$user)
        {
            User::create($user);
        }

        Model::reguard();
    }
}
