class RemoveIndexFromUsers < ActiveRecord::Migration
  def change
    remove_index :users, :name => 'index_users_on_display_name'
  end
end
