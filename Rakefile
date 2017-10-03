require "sinatra/activerecord/rake"
Dir.glob('./{models}/*.rb').each { |file| require file }

ENV['RACK_ENV'] ||= 'development'
Bundler.require :default, ENV['RACK_ENV'].to_sym

