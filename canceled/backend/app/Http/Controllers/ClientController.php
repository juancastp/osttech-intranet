<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index()
    {
        return Client::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'surname' => 'required',
            'dni' => 'required|unique:clients',
            'phone' => 'required',
            'email' => 'nullable|email',
        ]);

        return Client::create($request->all());
    }

    public function show(Client $client)
    {
        return $client;
    }

    public function update(Request $request, Client $client)
    {
        $request->validate([
            'name' => 'required',
            'surname' => 'required',
            'dni' => 'required|unique:clients,dni,' . $client->id,
            'phone' => 'required',
            'email' => 'nullable|email',
        ]);

        $client->update($request->all());

        return $client;
    }

    public function destroy(Client $client)
    {
        $client->delete();

        return response()->noContent();
    }
}
