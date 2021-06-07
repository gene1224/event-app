<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'from',
        'to',
        'days',
    ];

    protected $casts = [
        'days' => 'array', // Will convarted to (Array)
    ];
}
