class ChangeDataTypeForAmount < ActiveRecord::Migration
  def change 
  	change_table :ingredients do |t|
	  	t.change :amount, :float
	  end
  end
end
