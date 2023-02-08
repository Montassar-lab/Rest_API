import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Listnav =()=>{

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">CP_API</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/Contactlist'>Contact list</Nav.Link>
                            <Nav.Link as={Link} to='/ContactAdd'>Add contact</Nav.Link>
                              
                        </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default Listnav