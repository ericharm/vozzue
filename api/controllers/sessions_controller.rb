require 'sinatra/cross_origin'

class SessionsController < AppController
  enable :sessions

  configure do
    enable :cross_origin
  end

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  post "/login" do
    data = JSON.parse(request.body.read)
    content_type :json

    if user = User.find_by(:email => data["email"])
      if user.authenticate(data["password"])
        body user.to_json
      else
        status 400
        body "Incorrect password"
      end
    else
      status 400
      body "User not found"
    end
  end

  get "/logout" do
  end

  options "/login" do
    response.headers["Allow"] = "GET, POST, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
    response.headers["Access-Control-Allow-Origin"] = "*"
    200
  end
end

