<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
<<<<<<< HEAD

    protected $fillable = [
        'client_id',
        'description',
        'url',
        'quantity',
        'price',
        'order_date',
        'status',
    ];
=======
>>>>>>> d9378c339999ca2e823e2a1d3d26bbf625171ecf
}
