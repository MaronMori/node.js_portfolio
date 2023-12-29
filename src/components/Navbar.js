
const NavigationBar = () => {
    return (
        <nav className="sticky-top navbar navbar-expand-lg   ms-auto rounded-bottom" style={{backgroundColor: "#9EC8B9"}}>
            <ul className="list-unstyled d-flex ms-auto pt-2">
                <li key={"home"} className="me-3"><a href={"#home"} className="text-decoration-none" >Home</a></li>
                <li key={"work"} className="me-3"><a href={"#work"} className="text-decoration-none" >My Work</a></li>
                <li key={"award"} className="me-3"><a href={"#award"} className="text-decoration-none">My Award</a></li>
                <li key={"contact"}  className="me-3"><a href={"#contact"} className="text-decoration-none" >Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;