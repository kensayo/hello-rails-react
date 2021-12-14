Rails.application.routes.draw do
  namespace :v1, defaults: {format: 'json'} do
    get 'message', to: 'messages#index'
  end
  get '*page', to: 'statics#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'statics#index'
end
