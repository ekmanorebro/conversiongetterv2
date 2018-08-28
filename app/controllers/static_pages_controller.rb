class StaticPagesController < ApplicationController

  before_action :logged_in?, only: [:mmc]
  
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
  end

  def mmc
  end

  def create
    @contact = Contact.new(params.require(:contact).permit(:name, :budget, :website, :service, :email, :subject, :body))
    if @contact.save
      flash[:success] = "Thank you. We'll get back to you asap!"
      redirect_to(root_path)
    else
      flash[:notice] = "You didn't fill in all fields correctly. Please try again."
      redirect_back(fallback_location: root_path)
    end
  end

  private

  def logged_in?
    unless session[:email_id]
      flash[:notice] = "You must register your email first."
      redirect_to(mm_path)
    end
  end

end
