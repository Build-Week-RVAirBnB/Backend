
exports.up = function (knex) {
    return knex.schema.createTable('reservation', reservation => {


        reservation
            .string('date', 255)
            .notNullable()

        reservation
            .integer('rvowner_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('rvowner')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        reservation
            .integer('listing_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('listing')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl.primary(['rvowner_id', 'listing_id',date])
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('reservation');
};
