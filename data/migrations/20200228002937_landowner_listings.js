
exports.up = function (knex) {
    return knex.schema.createTable('landowner_listings', landowner_listings => {



        landowner_listings
            .integer('landowner_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('landowner')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        landowner_listings
            .integer('listing_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('listing')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl.primary(['landowner_id', 'listing_id'])
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('landowner_listings');
};
