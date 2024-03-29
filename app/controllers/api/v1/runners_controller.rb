class Api::V1::RunnersController < ApplicationController
  before_action :set_runner, only: %i[ show update destroy ]

  # GET /runners
  def index
    runners_per_page = 10
    @runners = Runner.order(created_at: :desc)
    runners_with_images = paginate_runners(@runners, runners_per_page)
    total_runners_count = Runner.count
    
    render json: {
      runners: runners_with_images,
      total_count: total_runners_count,
      per_page: runners_per_page
    }
  end

  # GET /runners/1
  def show
    if @runner.image.attached?
      render json: @runner.as_json.merge(image_url: url_for(@runner.image))
    else
      render json: @runner.as_json.merge(image_url: nil)
    end
  end

  # POST /runners
  def create
    @runner = Runner.new(runner_params)

    if @runner.save
      render json: @runner, status: :created, location: api_v1_runner_url(@runner)
    else
      render json: @runner.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /runners/1
  def update
    if @runner.update(runner_params)
      render json: @runner
    else
      render json: @runner.errors, status: :unprocessable_entity
    end
  end

  # DELETE /runners/1
  def destroy
    @runner.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_runner
      @runner = Runner.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def runner_params
      params.require(:runner).permit(:name, :age, :image)
    end
end