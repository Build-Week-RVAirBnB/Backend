
exports.up = function (knex) {
    return knex.schema.createTable('listing', listing => {
        listing.increments();

        listing
            .string('amenities', 255)
           
        listing
            .string('location',255)
           
            
        listing
            .string('address', 255)
       
        listing
            .string('description', 255)
            .notNullable()
        listing
            .string('photoURL', 255)

        listing
            .string('price', 255)

            listing
            .integer('landowner_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('landowner')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        });

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('listing');
};
