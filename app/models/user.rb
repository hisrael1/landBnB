class User < ApplicationRecord
    validates :email, :first_name, :last_name, :session_token, :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token

    attr_reader :password

    has_many :listings,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :Listing

    has_many :reviews,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :Review

    has_many :bookings,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :Booking

    has_one_attached :photo, dependent: :destroy

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            return user
        else
            nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
    
    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
end
