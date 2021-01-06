Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  resources :users, only: [:new, :create, :show, :index] 
  resource :session, only: [:new, :create, :destroy]
  resources :bands

  # get '/:X', to: 'application#catch'
  # get '/:X/:X', to: 'application#catch'
  # get '/:X/:X/:X', to: 'application#catch'

  root controller: :users, action: :new

  Rails.application.routes.draw do
  # ... all our other routes
  match "*path", to: "users#new", via: :all
end
end
