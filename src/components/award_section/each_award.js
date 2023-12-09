import "bootstrap/dist/css/bootstrap.css"

export const Award = () => {
    return (
        <ul className="list-group list-group-light list-group-numbered ">
            <li className="list-group-item d-flex justify-content-between align-items-start border-black" style={{backgroundColor:"#5C8374",color:"#092635" }}>
                <div className="ms-2 me-auto ">
                    <div className="fw-bold">Responsible Web Design Certification</div>
                    - freecodecamp
                </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start border-black" style={{backgroundColor:"#5C8374",color:"#092635" }}>
                <div className="ms-2 me-auto ">
                    <div className="fw-bold">Dean's honer</div>
                    - George Brown College. 1st and 2nd Semester
                </div>
            </li>
        </ul>
    )
};