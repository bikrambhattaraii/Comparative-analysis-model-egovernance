<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CountryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
    'country_name'=>'required|string',
    'start_date'=>'required|string',
    'history'=>'required|string',
    'epassport'=>'required|string',
    'birthdeathcert'=>'required|string',
    'water_payment'=>'required|string',
    'electricity_payment'=>'required|string',
    'mobile_services'=>'required|string',
    'Blockchain_adoption'=>'required|string',
    'electronic_voting'=>'required|string',
        ];
    }
}
