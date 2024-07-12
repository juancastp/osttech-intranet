<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        return Order::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'client_id' => 'required|exists:clients,id',
            'description' => 'required',
            'url' => 'required|url',
            'quantity' => 'required|integer',
            'price' => 'required|numeric',
            'order_date' => 'required|date',
            'status' => 'required',
        ]);

        return Order::create($request->all());
    }

    public function show(Order $order)
    {
        return $order;
    }

    public function update(Request $request, Order $order)
    {
        $request->validate([
            'client_id' => 'required|exists:clients,id',
            'description' => 'required',
            'url' => 'required|url',
            'quantity' => 'required|integer',
            'price' => 'required|numeric',
            'order_date' => 'required|date',
            'status' => 'required',
        ]);

        $order->update($request->all());

        return $order;
    }

    public function destroy(Order $order)
    {
        $order->delete();

        return response()->noContent();
    }
}
