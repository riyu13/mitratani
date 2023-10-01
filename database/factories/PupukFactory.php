<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pupuk>
 */
class PupukFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nama' => $this->faker->name(),
            'deskripsi' => $this->faker->text(),
            'harga' => $this->faker->numberBetween(10000, 1000000),
            'stok' => $this->faker->numberBetween(1, 100),
            'satuan' => $this->faker->randomElement(['kilogram', 'tablet', 'pcs', 'sachet', 'botol']),
            'user' => $this->faker->name(),
            'created_at' => now(),
            'updated_at' => now(),

        ];
    }
}
