Rails.application.routes.draw do
  
  # API routes should be in /api/v1/... and should be namespaced
  namespace :api do
    namespace :v1 do
      get 'search/runners'
      resources :runners
      
    end
  end

  # Devise routes should be in /api/v1/... and should be namespaced
  namespace :api do
    namespace :v1 do
      devise_for :users, path: '', path_names: {
        sign_in: 'login',
        sign_out: 'logout',
        registration: 'signup'
      },
        controllers: {
        sessions: 'api/v1/users/sessions',
        registrations: 'api/v1/users/registrations'
      }
    end
  end
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
