source 'https://rubygems.org' do

  gem 'sinatra', '2.0.0.rc2'

  # database
  gem 'mysql2'
  gem 'activerecord'
  gem 'sinatra-activerecord'

  # middleware
  gem 'rake'
  gem 'json'
  gem 'sinatra_warden'

  # deploy
  gem 'unicorn'
  gem 'capistrano'

  # security
  gem 'bcrypt'


  group :test, :development do
    gem 'rerun'
    gem 'rspec'
    gem 'pry'
    gem 'tux'
  end

  group :test do
    gem 'sqlite3'
    gem 'rack-test'
    gem 'faker'
  end
end

