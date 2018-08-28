class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.string :subject
      t.string :service
      t.string :budget
      t.text :body

      t.timestamps
    end
  end
end
