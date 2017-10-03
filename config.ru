require 'sinatra/base'

Dir.glob('./{models,controllers}/*.rb').each { |file| require file }

ENV['RACK_ENV'] ||= 'development'
Bundler.require :default, ENV['RACK_ENV'].to_sym

#          #
#  ROUTES  #
#          #

map('/') { run LoginController }
map('/locations') { run LocationsController }

