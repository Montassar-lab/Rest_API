import { Button, Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { deletecontact } from "../Redux/Actions"
import { Link } from "react-router-dom"


const ContactCard =({el})=>{
    const dispatch=useDispatch()
    return(
        <div>
            <Card style={{ width: '18rem' }} >

                <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />


    
                <Card.Body>

                    <Card.Title>{el.name}</Card.Title>
                    <Card.Title>{el.Age}</Card.Title>
                    <Card.Text> {el.email} </Card.Text>

                    <div className="contactcardbutton">
                        <Button onClick={()=>dispatch(deletecontact(el._id))}>Delete</Button>
                        <Button as={Link} to={`/Contactedit/${el._id}`}>Edit</Button>
                    </div>

                </Card.Body>
            </Card>

        </div>
    )
}

export default ContactCard