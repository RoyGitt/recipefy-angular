import { Component } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css',
})
export class IngredientListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Banana', 20),
  ];
}
