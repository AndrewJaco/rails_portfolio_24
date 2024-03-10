Rails.application.routes.draw do
  # API routes should be in /api/v1/... and should be namespaced
  namespace :api do
    namespace :v1 do
      get 'search/runners'
      resources :runners
    end
  end
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
