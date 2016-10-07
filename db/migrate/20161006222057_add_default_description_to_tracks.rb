class AddDefaultDescriptionToTracks < ActiveRecord::Migration
  def change
    change_column :tracks, :description, :text, default: ""
  end
end
