import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserTypes extends BaseSchema {
  protected tableName = 'user_types'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 40).unique().notNullable()
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
