<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;
    protected $fillable = [
        'country_name',
        'start_date',
        'history',
        'epassport',
        'birthdeathcert',
        'water_payment',
        'electricity_payment',
        'mobile_services',
        'Blockchain_adoption',
        'electronic_voting',

    ];
}
