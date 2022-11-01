Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :create, :show, :update, :destroy]
    resources :reviews, only: [:index, :create, :show, :destroy]
  end  
end
