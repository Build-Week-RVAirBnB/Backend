const db = require('../../data/dbConfig.js')

// 'landowner' & 'listing'

module.exports = {
  add,
  addReserve,
  addlisting,

  find,
  findBy,
  findById,
  findOwnerListings,
  findTableBy,
  remove,
  update,
  updateById
}

function add (newinsert, tableprop) {

  const table = tableprop.toString()
  console.log('newlistingmodel:', newinsert)
  console.error()
  return db(table)
    .insert(newinsert, 'id')
    .then(([id]) => {
      console.log('listingid-afterAdd\'s-Findby', id)
      console.error()
      return findById(id)
    })
}
function addReserve (reserve, tableprop) {
  const table = tableprop.toString()
  return db(table)
    .insert(reserve, 'id')
    .then(([id]) => {
      return db(table).where('id', id)
    })
}

function addlisting (tableprop, newaddition, landowner_id) {
  const table = tableprop.toString()
  return db(table)
    .insert({ ...newaddition, landowner_id })
    .then(([id]) => {
      return db(table).where({ id })
    })
}

// function addTask (task, landowner_id) {
//   return db('tasks')
//     .insert({ ...task, landowner_id })
//     .then(([id]) => {
//       return db('tasks').where({ id })
//     })
// }

// array of all landowner
function find (prop) {
  const table = prop.toString()
  return db(table)
}

function findBy (prop, filter) {
  const table = prop.toString()
  return db(table).where('id', filter)
}

function findById (id) {
  console.log(id)
  return db('listing')
    .where('id', id)
    .first()
}

function findTableBy (prop, filter) {
  const table = prop.toString()
  return db(table).where('landower_id', filter)
}

function findOwnerListings (id) {
  return db('landowner')
    .join(
      'landowner_listings',
      'landowner.id',
      'landowner_listings.landowner_id'
    )
    .join('listing', 'listing.landowner_id', 'landowner_listings.landowner_id')
    .join('landowner', 'landowner_listings.landowner_id', '')
    .select(
      'listing.id',
      'landowner.username',
      'listing.price',
      'listing.location',
      'listing.amenities'
    )
    .where('listing.landowner_id', id)
    .orderBy('tasks.id', 'asc')
}
function findReservationsByRv (id) {
  return db('tasks ')
    .join('landowner', 'landowner.id', 'tasks.landowner_id')
    .select(
      'tasks.id',
      'landowner.landowner_name',
      'tasks.id',
      'tasks.notes',
      'tasks.description',
      'tasks.completed'
    )
    .where('tasks.landowner_id', id)
    .orderBy('tasks.id', 'asc')
}
function findReservationsByListing (id) {
  return db('tasks ')
    .join('landowner', 'landowner.id', 'tasks.landowner_id')
    .select(
      'tasks.id',
      'landowner.landowner_name',
      'tasks.id',
      'tasks.notes',
      'tasks.description',
      'tasks.completed'
    )
    .where('tasks.landowner_id', id)
    .orderBy('tasks.id', 'asc')
}
function findReservationsByOwner (id) {
  return db('listing')
    .join('landowner', 'landowner.id', 'listing.landowner_id')
    .select(
      'tasks.id',
      'landowner.landowner_name',
      'tasks.id',
      'tasks.notes',
      'tasks.description',
      'tasks.completed'
    )
    .where('tasks.landowner_id', id)
    .orderBy('tasks.id', 'asc')
}

function remove (prop, id) {
  const table = prop.toString()
  return db(table)
    .where('id', id)
    .del()
}

function update (id, changes, prop) {
  const table = prop.toString()
  return db(table)
    .where({ id })
    .update(changes, '*')
}

function updateById (changes, id, prop) {
  const table = prop.toString()
  console.log('id', id)
  const listID = Number(id)
  console.log('listID', listID)
  return findBy(table, id).then(r => r.update(changes))
  // .then(()=>findBy('listing',id))
}

// function update (id,changes) {
//   return
//      db('listing')
//       .where('id', id)
//       .update(changes)
//       .then(() => findBy('listing',id))
// }

// function update (id, changes, prop) {
// const table = prop.toString()
//   return
//      db(table)
//       .where("id", id)
//       .update(changes)
//       .then(() => findBy(table, id))
// }
