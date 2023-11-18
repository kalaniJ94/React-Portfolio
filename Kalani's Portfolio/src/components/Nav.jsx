function Nav({ currentPage, handlePageChange}){

    return(
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#About"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a href="#Contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact Me
                </a>
            </li>
            <li className="nav-item">
                <a href="#Projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                    My Projects
                </a>
            </li>
            <li className="nav-item">
                <a href="#Resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume 

                </a>
            </li>
        </ul>
        );
    }
    export default Nav;


