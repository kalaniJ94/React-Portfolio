import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Nav({ currentPage, handlePageChange}){

    return(
    <Container>
        <Row id='nav-row'>

        
        <Col>
            <li className="nav-item">
                <a href="#About"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
            </li>
            </Col>
            <Col>
            <li className="nav-item">
                <a href="#Contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact Me
                </a>
            </li>
            </Col>
            <Col>
            <li className="nav-item">
                <a href="#Projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                    My Projects
                </a>
            </li>
            </Col>
            <Col>
            <li className="nav-item">
                <a href="#Resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume 

                </a>
            </li>
            </Col>
        
                    
                    </Row>
                    </Container>
        );
    }
    export default Nav;


