class IngredientsController < ApplicationController
	respond_to :json

	def index
		respond_with Ingredient.all, each_serializer: IngredientSerializer	
	end

	def create
		ingredient = Ingredient.create(name:   			ingredient_params[:name],
																	 amount: 			ingredient_params[:amount],
																	 measurement: ingredient_params[:measurement] )

		Recipe.find(ingredient_params[:recipe_id]).ingredients << ingredient

		respond_with ingredient
	end

	private
	def ingredient_params
    params.require(:ingredient).permit(:id, :name, :amount, :measurement, :recipe_id)
	end
end
