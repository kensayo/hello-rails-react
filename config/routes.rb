Rails.application.routes.draw do
  namespace :v1, defaults: {format: 'json'} do
    get 'message', to: 'messages#index'
  end
end
