import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 40).notNullable()
      table.string('email').unique().notNullable()
      table.string('avatar', 240).notNullable()
      table.string('razao_social', 30).notNullable()
      table.bigInteger('telephone_number').notNullable()
      table.string('cpf', 30).unique().notNullable()
      table.string('rg', 30).unique().notNullable()
      table.string('cnpj', 30).unique().notNullable()
      table.string('cep', 30).notNullable()
      table.string('uf', 2).notNullable()
      table.date('birth_date').notNullable()
      table.string('street_name', 40).notNullable()
      table.string('neighbourhood_name', 40).notNullable()
      table.string('city_name', 30).notNullable()
      table.string('complement', 80)
      table.integer('house_number', 30).notNullable()
      table
        .integer('user_type_id')
        .unsigned()
        .references('user_types.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.timestamps()

 
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
