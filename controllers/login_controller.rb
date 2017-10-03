class LoginController < AppController

  post "/login" do
    data = JSON.parse(request.body.read)
    content_type :json

    if user = User.find_by(:email => data["email"])
      if user.authenticate(data["password"])
        session[:user_id] = user.id
        body "Logged in as #{user.email}"
      else
        body "Incorrect password"
      end
    else
      status 400
      body "User not found"
    end
  end

  get '/' do
    status 200
    erb :index
  end

end

