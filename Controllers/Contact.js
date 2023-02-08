const contact = require ("../Models/Contact")

exports.addcontact=async(req,res)=>{
    try {
        const found = await contact.findOne({email: req.body.email})
        if (found) {
            return res.status(400).send('Contact already exist')
        }
        const newUser= new contact (req.body)
        await newUser.save()
        res.status(200).send({Msg : 'Conatct added', newUser})
    } catch (error) {
        res.status(500).send('Could not add contact') 
    }
}

exports.readcontact = async(req,res)=>{
    try {
        const contacts = await contact.find()
        res.status(200).send({Msg: "List of Contact",contacts})
    } catch (error) {
        res.status(500).send('Could not get contacts')
    }
}


exports.deleteContact = async(req,res)=>{
    try {
        const {id} = req.params
        await contact.findByIdAndDelete(id)
        res.status(200).send({Msg : 'Contact deleted'})
    } catch (error) {
        res.status(500).send('Could not delete contact')
    }
}

exports.UpdateContact = async(req,res)=>{
    try {
        const {id} = req.params
        await contact.findByIdAndUpdate(id, {$set : req.body})
        res.status(200).send({Msg : 'Contact updated'})        
    } catch (error) {
        res.status(500).send('Could not update contact')
    }
}

exports.readUser = async(req,res)=>{
    try {
        const {id}=req.params
        const onecontact = await contact.findById(id)
        res.status(200).send({Msg : 'the Contact is', onecontact})
    } catch (error) {
        res.status(500).send('Could not get contact')
    }
}