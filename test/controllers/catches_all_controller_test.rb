require 'test_helper'

class CatchesAllControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get catches_all_show_url
    assert_response :success
  end

end
