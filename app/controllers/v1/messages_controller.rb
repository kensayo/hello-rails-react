module V1
  class MessagesController < ApplicationController
    def index
      message = Message.order(Arel.sql('RANDOM()')).first.message
      render json: { message: message }.to_json
    end
  end
end
