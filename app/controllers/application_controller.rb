class ApplicationController < ActionController::API

  private

  def augment_with_image(runner)
    if runner.image.attached?
      runner.as_json.merge(image_url: url_for(runner.image))
    else 
      runner.as_json.merge(image_url: nil)
    end
  end

  protected

  def paginate_runners(runners, runners_per_page)
    paginated_runners = runners.page(params[:page]).per(runners_per_page)
    paginated_runners.map { |runner| augment_with_image(runner)}
  end
end
