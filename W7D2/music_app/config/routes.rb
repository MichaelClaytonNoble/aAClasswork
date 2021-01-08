Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  resources :users, only: [:new, :create, :show, :index] 
  resource :session, only: [:new, :create, :destroy]
  resources :bands do
    resources :albums, only: [:new, :create]
  end

  get '/bands/:band_id/bands_albums', to: 'albums#show_bands_albums', as: 'show_bands_albums'

  resources :albums, only: [:edit, :show, :update, :destroy]

  root controller: :users, action: :new

  Rails.application.routes.draw do
  # ... all our other routes
  match "*path", to: "users#new", via: :all
end
end
