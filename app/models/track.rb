# == Schema Information
#
# Table name: tracks
#
#  id                      :integer          not null, primary key
#  title                   :string           not null
#  description             :text             default("")
#  user_id                 :integer          not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  image_file_name         :string
#  image_content_type      :string
#  image_file_size         :integer
#  image_updated_at        :datetime
#  track_file_file_name    :string
#  track_file_content_type :string
#  track_file_file_size    :integer
#  track_file_updated_at   :datetime
#

class Track < ActiveRecord::Base
  validates :title, :user, presence: true
  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  has_attached_file :track_file
  validates_attachment_presence :track_file
  validates_attachment_content_type :track_file, content_type: /\Aaudio\/.*\z/


  paginates_per 6
  default_scope { order("created_at DESC") }

  belongs_to :user

  has_many :comments, as: :commentable
end
