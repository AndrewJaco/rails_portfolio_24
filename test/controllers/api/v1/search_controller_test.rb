require "test_helper"

class Api::V1::SearchControllerTest < ActionDispatch::IntegrationTest
  test "should get runners" do
    get api_v1_search_runners_url
    assert_response :success
  end
end
