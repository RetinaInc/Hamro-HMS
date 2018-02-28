
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('persons', table => {
        table.increments('id').primary().unsigned().notNullable();
        table.uuid('uuid').unique();
        table.string('first_name').notNullable();
        table.string('middle_name');
        table.string('last_name');
        table.string('gender', 6);
        table.date('bod');
        table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('persons');
};
