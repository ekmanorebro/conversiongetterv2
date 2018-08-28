class AdminsController < ApplicationController

  before_action :admin?

  def index
    @contacts = Contact.all
    @emails = Email.all
  end


  def admin?
    unless current_admin
      redirect_to(new_admin_session_path)
    end
  end

end
