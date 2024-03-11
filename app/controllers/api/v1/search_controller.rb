class Api::V1::SearchController < ApplicationController
  def runners
    # If you're using Postgres, you can use ILIKE to make the search case-insensitive
    runners_per_page = 10
    @runners = Runner.where("name LIKE ?", "%#{params[:q]}%")
    runners_with_images = paginate_runners(@runners, runners_per_page)
    total_runners_count = @runners.count
    
    render json: {
      runners: runners_with_images,
      total_count: total_runners_count,
      per_page: runners_per_page
    }
  end
end
