class IngredientsController < ApplicationController
	respond_to :json

	def index
		respond_with Ingredient.all, each_serializer: IngredientSerializer	
	end
end
