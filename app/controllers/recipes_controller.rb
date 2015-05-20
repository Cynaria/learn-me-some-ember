class RecipesController < ApplicationController
	respond_to :json

	def index
		respond_with Recipe.all
	end

	def show
		respond_with Recipe.find(params[:id])
	end

  def create
    respond_with Recipe.create(recipe_params)
  end

  def update
    respond_with Recipe.update(params[:id], params[:recipe])
  end

  def destroy
    respond_with Recipe.destroy(params[:id])
  end

  private
  def recipe_params
    params.require(:recipe).permit(:name, :description)
  end
end
