require 'active_record'

class Location < ActiveRecord::Base
  validates :name, uniqueness: true
end

