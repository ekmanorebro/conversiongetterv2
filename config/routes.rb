Rails.application.routes.draw do
  
  devise_for :admins, path: '', path_names: { sign_in: 'login', sign_out: 'logout' }

  get 'admin', to: 'admins#index'

  root(to: 'static_pages#index')
  get '/terms', to: 'static_pages#terms'
  get '/privacy', to: 'static_pages#privacy'
  get '/social-media-marketing', to: 'static_pages#smm', as: 'smm'
  get '/search-engine-optimization', to: 'static_pages#seo', as: 'seo'
  get '/advertising', to: 'static_pages#ppc', as: 'advertising'
  get '/special', to: 'static_pages#special', as: 'special'
  get '/dream-scenario', to: 'static_pages#dream', as: 'dream'
  get '/modern-marketing/course', to: 'static_pages#mmc', as: 'mmc'


  post '/', to: 'static_pages#create', as: "create_contact"


  get '/modern-marketing', to: 'emails#new', as: 'mm'
  post '/modern-marketing', to: 'emails#create', as: 'create_email'
end
