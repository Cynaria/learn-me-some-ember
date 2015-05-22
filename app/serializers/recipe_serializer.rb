class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :ingredients, embed: :ids
end
