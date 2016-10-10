# == Schema Information
#
# Table name: users
#
#  id                             :integer          not null, primary key
#  email                          :string           not null
#  password_digest                :string           not null
#  session_token                  :string           not null
#  created_at                     :datetime
#  updated_at                     :datetime
#  profile_picture_file_name      :string
#  profile_picture_content_type   :string
#  profile_picture_file_size      :integer
#  profile_picture_updated_at     :datetime
#  display_name                   :string           default("")
#  first_name                     :string           default("")
#  last_name                      :string           default("")
#  city                           :string           default("")
#  country                        :string           default("")
#  header_background_file_name    :string
#  header_background_content_type :string
#  header_background_file_size    :integer
#  header_background_updated_at   :datetime
#  bio                            :text             default("")
#

class User < ActiveRecord::Base
  attr_reader :password
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: {message: "can't be blank"}
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_attached_file :profile_picture, default_url: "default-profile-picture.png"
  validates_attachment_content_type :profile_picture, content_type: /\Aimage\/.*\z/
  has_attached_file :header_background
  validates_attachment_content_type :header_background, content_type: /\Aimage\/.*\z/

  has_many :tracks
  has_many :comments, as: :commentable
  has_many :authored_comments,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :Comment


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def set_defaults
    self.display_name = ""
    self.first_name = ""
    self.last_name = ""
    self.city = ""
    self.country = ""
    self.bio = ""
  end
end
