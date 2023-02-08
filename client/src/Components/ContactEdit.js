import { useEffect, useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneUser, updateContact } from '../Redux/Actions'


const ContactEdit=()=>{

    const {id}=useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneUser(id))
    },[dispatch,id])

    const oneContact = useSelector(state=>state.oneContact)

    //itfas5t
    const [name,setName] = useState(oneContact.name)
    const [Age,setAge] = useState(oneContact.Age)
    const [email,setEmail] = useState(oneContact.email)

    useEffect(()=>{
        setName(oneContact.name)
        setAge(oneContact.Age)
        setEmail(oneContact.email)
    },[oneContact])

    const navigate = useNavigate()

    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateContact({name,Age,email},id,navigate))
    }

    
    return(
        <div>
            <br/>
            <Form className="Userdetails">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />       
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Age</Form.Label>
                <Form.Control value={Age} onChange={(e)=> setAge(e.target.value)} type="number" placeholder="Enter age" />       
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />       
                </Form.Group>

                <Button onClick={(e)=>handleEdit(e)}>Submit</Button>
            </Form>

            
            
        </div>       
    )
}

export default ContactEdit