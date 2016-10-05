class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :display_name, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :city, :string
    add_column :users, :country, :string
    add_index :users, :display_name, unique: true
    rename_column :users, :username, :email
  end
end
