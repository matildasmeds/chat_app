class ChatMessagesController < ApplicationController
  def create
    opts = { time: Time.zone.now, message: params[:message] }
    ActionCable.server.broadcast(:chat_channel, opts)
    head :ok
  end
end
