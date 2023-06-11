<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->string('country_name');
            $table->string('start_date');
            $table->string('history');
            $table->enum('epassport',['yes','no']);
            $table->enum('birthdeathcert',['yes','no']);
            $table->enum('water_payment',['yes','no']);
            $table->enum('electricity_payment',['yes','no']);
            $table->enum('mobile_services',['yes','no']);
            $table->enum('Blockchain_adoption',['yes','no']);
            $table->enum('electronic_voting',['yes','no']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('countries');
    }
};
