
exports.up = function (knex) {
    return knex.schema.createTable('rvowner_favlistings', rvowner_favlistings => {



        rvowner_favlistings
            .integer('rvowner_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('rvowner')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        rvowner_favlistings
            .integer('listing_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('listing')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl.primary(['rvowner_id', 'listing_id'])
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('rvowner_favlistings');
};
