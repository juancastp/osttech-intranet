<?php

namespace App\Http\Controllers;

use App\Models\TimeEntry;
use Illuminate\Http\Request;

class TimeEntryController extends Controller
{
    public function index()
    {
        return TimeEntry::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'start_time' => 'required|date_format:Y-m-d H:i:s',
            'end_time' => 'nullable|date_format:Y-m-d H:i:s|after:start_time',
            'location' => 'nullable|string',
        ]);

        return TimeEntry::create($request->all());
    }

    public function show(TimeEntry $timeEntry)
    {
        return $timeEntry;
    }

    public function update(Request $request, TimeEntry $timeEntry)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'start_time' => 'required|date_format:Y-m-d H:i:s',
            'end_time' => 'nullable|date_format:Y-m-d H:i:s|after:start_time',
            'location' => 'nullable|string',
        ]);

        $timeEntry->update($request->all());

        return $timeEntry;
    }

    public function destroy(TimeEntry $timeEntry)
    {
        $timeEntry->delete();

        return response()->noContent();
    }
}
