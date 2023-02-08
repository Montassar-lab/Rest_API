const express = require ('express')
const { addcontact, readcontact, deleteContact, UpdateContact, readUser } = require('../Controllers/Contact')



const contactRouter = express.Router()

contactRouter.post('/addContact', addcontact)
contactRouter.get('/readContact', readcontact)
contactRouter.delete('/deleteContact/:id', deleteContact)
contactRouter.put('/updateContact/:id',UpdateContact)
contactRouter.get('/readUser/:id', readUser)


module.exports = contactRouter