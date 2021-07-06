<?php

namespace Database\Factories;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
        'title' => $this->faker->word,
        'description' => $this->faker->paragraph,
        'image' => $this->faker->imageUrl,
        'price' => $this->faker->randomFloat(2, 10, 3000),
        ];
    }
}
