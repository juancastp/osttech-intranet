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
        $validatedData = $request->validate([
            'user_id' => 'required|integer',
            'start_time' => 'required|date_format:Y-m-d\TH:i:sP',
            'location' => 'nullable|string',
        ]);

        $timeEntry = TimeEntry::create($validatedData);

        return response()->json($timeEntry, 201);
    }

    public function update(Request $request, TimeEntry $timeEntry)
    {
        $validatedData = $request->validate([
            'end_time' => 'required|date_format:Y-m-d\TH:i:sP',
        ]);

        $timeEntry->update($validatedData);

        return response()->json($timeEntry);
    }

    public function show(TimeEntry $timeEntry)
    {
        return response()->json($timeEntry);
    }

    public function destroy(TimeEntry $timeEntry)
    {
        $timeEntry->delete();

        return response()->noContent();
    }
}
