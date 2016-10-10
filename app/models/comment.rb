# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  body             :string           not null
#  commentable_id   :integer
#  commentable_type :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  author_id        :integer          not null
#

class Comment < ActiveRecord::Base
  validates :body, :author, presence: true

  belongs_to :commentable, polymorphic: true;
  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User
end
