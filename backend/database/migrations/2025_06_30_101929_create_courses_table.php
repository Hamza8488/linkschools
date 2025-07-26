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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('long_title');
            $table->string('short_title');
            $table->text('long_description');
            $table->string('short_description');
            $table->string('total_duration');
            $table->string('total_lecture');
            $table->string('total_student');
            $table->text('skill_all');
            $table->string('video_url');
            $table->string('small_img');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
