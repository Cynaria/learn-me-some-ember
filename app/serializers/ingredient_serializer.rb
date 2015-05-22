class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :measurement
end
