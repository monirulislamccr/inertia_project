<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index()
    {
        $info = ', I am a variable from controller';

        return Inertia::render('Test',[
            'info' => $info
        ]);
    }

    public function welcome()
    {
        return view('welcome');
    }
}
