exports.up = function (knex) {
  return knex.schema.createTable('landowner', landowner => {
    landowner.increments();

    landowner
      .string('username', 255)
      .notNullable()
      .unique();
    landowner
      .string('email', 255)
      .notNullable()
      .unique();
    landowner
      .string('password', 255)
      .notNullable();
    landowner
      .string('contact', 255)
      .notNullable()
 

  })

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('landowner');
};
