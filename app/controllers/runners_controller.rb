class RunnersController < ApplicationController
  before_action :set_runner, only: %i[ show update destroy ]

  # GET /runners
  def index
    @runners = Runner.order(created_at: :desc)

    render json: @runners
  end

  # GET /runners/1
  def show
    render json: @runner
  end

  # POST /runners
  def create
    @runner = Runner.new(runner_params)

    if @runner.save
      render json: @runner, status: :created, location: @runner
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
      params.require(:runner).permit(:name, :age)
    end
end
