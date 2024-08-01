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
            'user_id' => 'required|integer',
            'start_time' => 'required|date_format:Y-m-d\TH:i:s',
            'location' => 'nullable|string',
        ]);

        $timeEntry = TimeEntry::create($request->all());
        return response()->json($timeEntry, 201);
    }

    public function show(TimeEntry $timeEntry)
    {
        return $timeEntry;
    }

    public function update(Request $request, TimeEntry $timeEntry)
    {
        $request->validate([
            'end_time' => 'required|date_format:Y-m-d\TH:i:s',
        ]);

        $timeEntry->update($request->all());
        return response()->json($timeEntry, 200);
    }

    public function destroy(TimeEntry $timeEntry)
    {
        $timeEntry->delete();
        return response()->noContent();
    }
}
