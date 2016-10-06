class AddDefaultsToUser < ActiveRecord::Migration
  def change
    change_column :users, :display_name, :string, default: ""
    change_column :users, :first_name, :string, default: ""
    change_column :users, :last_name, :string, default: ""
    change_column :users, :city, :string, default: ""
    change_column :users, :country, :string, default: ""
    change_column :users, :bio, :text, default: ""
  end
end
