<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Event::first() ?? [];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate(
            [
                'name' => ['required'],
                'to' => ['required'],
                'from' => ['required'],
                'days' => ['required', 'array', 'min:1'],
            ]
        );

        $event = Event::updateOrCreate(
            ['id' => $request->id],
            $data
        );

        return $event;
    }

}
