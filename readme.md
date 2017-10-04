# Setup

`git clone`

`cd chooble/`

`bundle install`

configure database credentials in config/database.yml

`rake db:setup`

`rake db:migrate`

`rake db:seed`

# Run tests

`rspec spec/`

# Run local server

`webpack` to bundle javascript

`rackup` to run WEBrick server at port 9292

`rerun rackup --signal INT` to run WEBrick server at port 9292 and watch for changes

## Roadmap

*Interactive console* `tux`

*Create a migration* `rake db:create_migration NAME=create_locations_table`

*Routes* In config.ru, map the base url for a set of endpoints to a controller, and specify the individual routes in that controller.

