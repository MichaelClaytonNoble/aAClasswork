class DeleteTimeStampFromVisits < ActiveRecord::Migration[5.2]
  def change
    remove_column(:visits, :time)
  end
end
