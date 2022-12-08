class Api::UsersController < ApplicationController

    def index 
        @users = User.all
        if @users 
            render :index
        end
    end

    def create
        @user = User.new(user_params)

        if @user.save && log_in!(@user)
            render "api/users/show"
        else
            render json: @user.errors, status: 422
        end
    end

    def show 
        @user = User.find_by(id: params[:id])
        if @user
            render "api/users/show"
        else
            render json: @user.errors
        end 
    end

     
    def update
        @user = User.find_by(id: params[:id])
        if @user && @user.update(photo: params[:photo])
            render "api/users/show"
        else
            render json: @user.errors
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end
