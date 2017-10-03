require 'active_record'

class User < ActiveRecord::Base
  has_secure_password
  validates :email, uniqueness: true
  validates_format_of :email, with: /@/

end

