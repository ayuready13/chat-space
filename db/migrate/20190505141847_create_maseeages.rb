class CreateMaseeages < ActiveRecord::Migration[5.0]
  def change
    create_table :maseeages do |t|
      t.string      :name
      t.text        :text
      t.timestamps null: true
    end
  end
end
