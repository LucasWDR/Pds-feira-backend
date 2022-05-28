import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Alojamentos extends BaseSchema {
  protected tableName = 'alojamentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 50).notNullable()    
      table.text('descricao').notNullable()
      table.string('cep', 30).notNullable()
      table.string('uf', 2).notNullable()
      table.string('street_name', 40).notNullable()
      table.string('neighbourhood_name', 40).notNullable()
      table.string('city_name', 30).notNullable()
      table.string('complement', 80)
      table
      .integer('id_vendedor')
      .unsigned()
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      table.timestamps()
  
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
