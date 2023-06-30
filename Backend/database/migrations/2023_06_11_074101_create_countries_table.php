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
            $table->string('epassport')->default(false);
            $table->string('birthdeathcert')->default(false);
            $table->string('water_payment')->default(false);
            $table->string('electricity_payment')->default(false);
            $table->string('mobile_services')->default(false);
            $table->string('Blockchain_adoption')->default(false);
            $table->string('electronic_voting')->default(false);
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
