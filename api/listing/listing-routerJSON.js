// //MVP
// user stories
// 1. Users can register/create an account as either an **RV Owner** or a **Landowner** (web, mobile)
// 2. **Landowners** and **RV Owners** can login to the the app. (web, mobile)
// 3. **Landowners** can create, update and delete listings of their available land. At a minimum, a listing must include the land's location, description, price per day, and a photo. (web, mobile)
// 4. **RV Owners** can query/filter available listings by location (at a minimum) and reserve a spot for their RV for a desired date(s) (web, mobile)
const db = require("../../data/dbConfig.js")
const list=require('./listing-model.js')

const router = require('express').Router();
// accessing the mock initial development database aka
// the temporary public array for use by frontend dev team while the actual secure api is launched
let Listings = require('../jsondata/mock.js').listings;

// npm run server
///rv owners need to view listings 
///rv owners need to create view update and deleted single reservations for the listings by date availability
///rv owners need to  view  and deleted all reservations for the listings by date availability
///rv owners need to  view  and deleted all reservations for the listings by date availability
///rv owners need to create view update and deleted single fav reservations single reservations for the listings by date availability
/// listings =>get all  
/// reservations =>get all and crud by id 
/// fav listings =>get all and add delete by id 

//hardcoded get all listings

router.get('/', async (req, res) => {
list.find()
.then((listings)=>{
        listings.length==undefined?
        res.status(404).json({message:"the listings could not be found"})
        :
        listings.length==0?res.status(200).json({message:"No listings. "})
        :
        res.status(200).json({ listings })
    })
    .catch((error)=>{
        res.status(500).json({error:`there was an error on the server while attempting to retrieve the listings.--+${error}`});console.error(error);
    })

})

//hardcoded listing by req.params.id
router.get('/:id', async (req, res) => {
list.findBy('listing',req.params.id)
    .then(singleListing => {  
         singleListing.length==0||undefined
    ?
     res.status(404).json({message:"the listing could not be found"})
    :
     res.status(200).json({ singleListing })
    })
.catch(error=>{
     res.status(500).json({message:error}) ;console.error(error)})
})

//hardcoded add new listing by req.body
router.post('/', async (req, res) => {
    const newlisting = list.add(req.body)
    .then(listingUp => {
        res.status(201)
           .json({ "newlisting added": listingUp })
})
    .catch(error => {
        res.status(500)
            .json({ error: "that didnt work my friend" }); console.error(error)})


//hardcoded update listing by req.params.id using req.body
router.put('/:id', (req, res) => {
  list.update(req.params.id, req.body)
    .then((updatedListing) => {   updatedListing.length==0||undefined?
   res
   .status(404)
   .json({message:"the listing could not be found"})
   :
      res.status(200).json({ message: 'Listing updated successfully',updatedListing });
    })
    .catch(error => {
      console.log('PUT /api/user/:id Error', error);
      res.status(500).json({ error: 'We ran into an error updating the listing' });
    });
});
 
//hardcoded delete listing by req.params.id
router.delete('/:id', (req, res) => {
  list.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The listing has been nuked' });
      } else {
        res.status(404).json({ message: 'The listing could not be found' });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error removing the listing',
      });
    });
});

module.exports = router;
