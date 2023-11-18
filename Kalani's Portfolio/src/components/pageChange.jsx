import {useState} from 'react';
import Nav from './Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export default function pageNavigate(){
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About'){
            return <About/>;
        } if (currentPage === 'Contact'){
            return <Contact/>;
        } if (currentPage === 'Projects'){
            return <Projects/>;
        } if (currentPage === 'Resume'){
            return <Resume/>;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <main className="mx-3">{renderPage()}</main>
            
        </div>
    );
}