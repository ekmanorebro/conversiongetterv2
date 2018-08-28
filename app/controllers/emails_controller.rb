class EmailsController < ApplicationController
  before_action :logged_in?, only: [:new]

  def new
    @email = Email.new
  end

  def create
    @email = Email.new(params.require(:email).permit(:email))
    if @email.save
      session[:email_id] = @email.id
      redirect_to(mmc_path)
    else
      redirect_back(fallback_location: root_path)
      flash[:notice] = "Something went wrong. Try again."
    end
  end

  def logged_in?
    if session[:email_id]
      redirect_to(mmc_path)
    end
  end
end
