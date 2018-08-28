class StaticPagesController < ApplicationController

  before_action :logged_in?, only: [:mmc]
  before_action :sent?, only: [:contact]
  
  def index
    @contact = Contact.new
  end

  def terms
    @contact = Contact.new
  end

  def privacy
    @contact = Contact.new
  end

  def smm
    @contact = Contact.new
  end

  def seo
    @contact = Contact.new
  end

  def ppc
    @contact = Contact.new
  end

  def special
    @contact = Contact.new
  end

  def dream
    @contact = Contact.new
  end

  def contact
  end

  def mmc
  end

  def create
    @contact = Contact.new(params.require(:contact).permit(:name, :budget, :website, :service, :email, :subject, :body))
    if @contact.save
      session[:send_status] = "sent"
      redirect_to(contact_path)
    else
      flash[:notice] = "You didn't fill in all fields correctly. Please try again."
      redirect_back(fallback_location: root_path)
    end
  end

  def destroy
  end


  private

  def logged_in?
    unless session[:email_id]
      flash[:notice] = "You must register your email first."
      redirect_to(mm_path)
    end
  end

  def sent?
    unless session[:send_status] == "sent"
      flash[:notice] = "You must contact us first."
      redirect_to(root_path)
    end
  end

end
