class LocationsController < AppController

  get '/' do
    status 200
    erb :locations, locals: { locations: Location.all }
  end

end


