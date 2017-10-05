# vozzue

This is a template for building a full stack app with a Ruby API running on Sinatra and a Vue/Material UI frontend.


## First things first

`git clone`

`cd chooble/`


## API

`cd api/`

`bundle install`

configure database credentials in config/database.yml

`rake db:setup`

`rake db:migrate`

`rake db:seed`

`rerun rackup --signal INT` to run WEBrick server at port 9292 and watch for changes

### _Tests_

`rspec spec/`

### _Roadmap_

**Interactive console** `tux`

**Create a migration** `rake db:create_migration NAME=create_locations_table`

**Routes** In config.ru, map the base url for a set of endpoints to a controller, and specify the individual routes in that controller.


## Client

`cd client/`

`npm install`

`npm start` to run http-server at port 7676

### _Tests_

not sure what this command looks like yet

### _Roadmap_

**Global Vue instance** src/app.js

**Shared state** src/store.js

**Components** in src/components/

