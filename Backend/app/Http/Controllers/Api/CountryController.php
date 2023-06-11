<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Http\Requests\CountryRequest;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $all_country_data = Country::all();
        return response()->json([
            'success' => true,
            'message' => 'All Country Data',
            'data' => $all_country_data,
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CountryRequest $request)
    {
        $validate_data = $request->validated();
        $country = Country::create($validate_data);
        return response()->json([
            'success' => true,
            'message' => 'Country Data Stored',
            'data' => $country,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Country $country)
    {
        return response()->json([
            'success' => true,
            'message' => 'Country Data',
            'data' => $country,
        ]);
    }
   

    /**
     * Update the specified resource in storage.
     */
    public function update(CountryRequest $request, Country $country)
    {
        $validate_data = $request->validated();
        $country->update($validate_data);
        return response()->json([
            'success' => true,
            'message' => 'Country Data Updated',
            'data' => $country,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Country $country)
    {
        $country->delete();
        return response()->json([
            'success' => true,
            'message' => 'Country Data Deleted',
            'data' => $country,
        ]);
    }
}
