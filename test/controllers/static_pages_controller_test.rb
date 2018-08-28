require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get static_pages_index_url
    assert_response :success
  end

  test "should get terms" do
    get static_pages_terms_url
    assert_response :success
  end

  test "should get privacy" do
    get static_pages_privacy_url
    assert_response :success
  end

  test "should get smm" do
    get static_pages_smm_url
    assert_response :success
  end

  test "should get seo" do
    get static_pages_seo_url
    assert_response :success
  end

  test "should get ppc" do
    get static_pages_ppc_url
    assert_response :success
  end

  test "should get special" do
    get static_pages_special_url
    assert_response :success
  end

  test "should get dream" do
    get static_pages_dream_url
    assert_response :success
  end

  test "should get mmc" do
    get static_pages_mmc_url
    assert_response :success
  end

end
