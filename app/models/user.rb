# == Schema Information
#
# Table name: users
#
#  id                           :integer          not null, primary key
#  username                     :string           not null
#  password_digest              :string           not null
#  session_token                :string           not null
#  created_at                   :datetime
#  updated_at                   :datetime
#  profile_picture_file_name    :string
#  profile_picture_content_type :string
#  profile_picture_file_size    :integer
#  profile_picture_updated_at   :datetime
#

class User < ActiveRecord::Base
  attr_reader :password
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: {message: "can't be blank"}
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :profile_picture, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :profile_picture, content_type: /\Aimage\/.*\z/
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
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

end
