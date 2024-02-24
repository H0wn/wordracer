import { Container , Navbar, Nav} from 'react-bootstrap';
import logo from '../imgs/logo.svg'
import './NavbarComp.scss';
import { Link } from 'react-router-dom';


export const NavbarComp = () => {
    return(
        <Navbar className="nav bd-body-secondary bg-dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img 
                        src={logo} 
                        alt="img-logo" 
                        width="30"
                        height="30"
                        className='navbar__icon d-inline-block align-top'
                    />
                </Navbar.Brand>
                <Nav className="me">
                    <Nav.Link className="nav__link" href="/">Home</Nav.Link>
                    <Nav.Link className="nav__link" href="/race">Race</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}