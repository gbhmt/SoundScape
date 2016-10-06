class AddAttachmentImageToTracks < ActiveRecord::Migration
  def self.up
    change_table :tracks do |t|
      t.attachment :image
      t.attachment :track_file
    end
  end

  def self.down
    remove_attachment :tracks, :image
    remove_attachment :tracks, :track_file
  end
end
