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
            $table->enum('epassport',['true','false']);
            $table->enum('birthdeathcert',['true','false']);
            $table->enum('water_payment',['true','false']);
            $table->enum('electricity_payment',['true','false']);
            $table->enum('mobile_services',['true','false']);
            $table->enum('Blockchain_adoption',['true','false']);
            $table->enum('electronic_voting',['true','false']);
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
