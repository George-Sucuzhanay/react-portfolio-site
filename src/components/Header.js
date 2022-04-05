import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const Header = () => {
    return(
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>George Sucuzhanay</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/projects">
                        <Nav.Link>Project Portfolio</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/skills">
                        <Nav.Link>Skills</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;