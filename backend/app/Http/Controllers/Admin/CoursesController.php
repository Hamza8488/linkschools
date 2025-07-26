<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Courses;

class CoursesController extends Controller
{
        public function onSelectFour()
    {
    	$result = Courses::limit(4)->get();
    	return $result;
    }

    public function onAllSelect()
    {
    	$result = Courses::all();
    	return $result;
    }

   public function CourseDetails($courseID)
{   
    $id = $courseID;
    $result = Courses::where('id', $id)->get();
    return $result;
    }
}
