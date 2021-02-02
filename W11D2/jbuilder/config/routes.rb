Rails.application.routes.draw do
  namespace :api, defaults:{ format: :json } do
    resources :guests, only: [:show] do
      resources :guests, only: [:index]
    end
    resources :gifts, only:[:index, :show]
    resources :parties, only: [:index, :show]
  end
  # Your routes here!

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
