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
    'epassport'=>'required|boolean',
    'birthdeathcert'=>'required|boolean',
    'water_payment'=>'required|boolean',
    'electricity_payment'=>'required|boolean',
    'mobile_services'=>'required|boolean',
    'Blockchain_adoption'=>'required|boolean',
    'electronic_voting'=>'required|boolean',
        ];
    }
}
