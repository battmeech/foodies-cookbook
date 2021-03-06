import joi from 'joi';
import { Ingredient } from '../models/ingredient';
import { Instruction } from '../models/instruction';
import { Recipe } from '../models/recipe';

const ingredientsRules = joi.object<Ingredient>({
    name: joi.string().required().min(1).max(25),
    quantity: joi.number().required(),
    quantityType: joi
        .string()
        .only()
        .allow(
            'g',
            'kg',
            'American cup',
            'British cup',
            'lb',
            'ounce',
            'tsp',
            'tbsp'
        ),
});

const instructionRules = joi.object<Instruction>({
    instruction: joi.string().required(),
    number: joi.number().integer(),
});

export const recipeValidationRules = joi.object<Recipe>({
    name: joi.string().min(2).max(50).required(),
    serves: joi.number().integer().greater(0).required(),
    difficulty: joi.any().only().allow('EASY', 'MEDIUM', 'HARD').required(),
    cookingTime: joi.number().integer().greater(0).required(),
    prepTime: joi.number().integer().greater(0).required(),
    description: joi.string().required(),
    ingredients: joi.array().items(ingredientsRules),
    method: joi.array().items(instructionRules),
});
