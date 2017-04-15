Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "questions#index"
  resources :questions

  resources :disciplines, only: [:index, :new, :create] do
    resources :great_themes, only: :index
  end

  resources :great_themes, only: [:index, :new, :create] do
    resources :knowledge_objects, only: :index
  end

  resources :knowledge_objects, only: [:index, :new, :create] do
    resources :abilities, only: :index
  end

  resources :abilities, only: [:index, :new, :create]

  resources :competences, only: :index
end
