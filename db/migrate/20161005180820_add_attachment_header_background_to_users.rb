class AddAttachmentHeaderBackgroundToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :header_background
    end
  end

  def self.down
    remove_attachment :users, :header_background
  end
end
