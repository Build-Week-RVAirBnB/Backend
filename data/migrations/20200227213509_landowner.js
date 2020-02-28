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
      .string('address', 255)
      .notNullable()
    landowner
      .string('listings', 255)
      .notNullable()
      .unique();

  })

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('landowner');
};
