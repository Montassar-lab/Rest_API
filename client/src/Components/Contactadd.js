import { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {contactAdd} from '../Redux/Actions'

const Contactadd =()=>{

    const [name,setName] = useState('')
    const [Age,setAge] = useState(0)
    const [email,setEmail] = useState('')

    const dispatch = useDispatch()
    const navigate=useNavigate()

    const handleadd =(a)=>{
      a.preventDefault()
      dispatch(contactAdd({name,Age,email},navigate))
    }

    return(
        
        <Form className="Userdetails">
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={(e)=> setName(e.target.value)} type="email" placeholder="Enter name"/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Age</Form.Label>
              <Form.Control onChange={(e)=> setAge(e.target.value)} type="email" placeholder="Enter age"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="name@example.com"/>
            </Form.Group>

            <Button variant="success" onClick={(e)=>handleadd(e)}>Submit</Button>
        </Form>
    )
}

export default Contactadd