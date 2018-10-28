Rails.application.routes.draw do
  get 'chat_messages/create'
  root to: 'chats#index'
  resources :chat_messages, only: :create
end
