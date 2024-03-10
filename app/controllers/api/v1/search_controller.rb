class Api::V1::SearchController < ApplicationController
  def runners
    # If you're using Postgres, you can use ILIKE to make the search case-insensitive
    @runners = Runner.where("name LIKE ?", "%#{params[:q]}%")
    
    runners_with_image = @runners.map do |runner|
      if runner.image.attached?
        runner.as_json.merge(image_url: url_for(runner.image))
      else
        runner.as_json.merge(image_url: nil)
      end
    end
    
    render json: runners_with_image
  end
end
