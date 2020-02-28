
exports.up = function (knex) {
    return knex.schema.createTable('rvowner', rvowner => {
        rvowner.increments();

        rvowner
            .string('username', 255)
            .notNullable().unique();
        rvowner
            .string('email')
            .notNullable()
            .unique()
        rvowner
            .string('password', 255)
            .notNullable();
        rvowner
            .string('address', 255)
            .notNullable()
        rvowner
            .string('reservations', 255)

        rvowner
            .string('favlocations', 255)

        rvowner
            .boolean('islandowner')
            .defaultTo(false)


    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('rvowner');
};
