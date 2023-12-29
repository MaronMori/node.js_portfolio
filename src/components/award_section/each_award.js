
export const Award = () => {
    return (
        <ul className="list-group list-group-light list-group-numbered ">
            <li key={"award1"} className="list-group-item d-flex justify-content-between align-items-start border-black">
                <div className="ms-2 me-auto ">
                    <div className="fw-bold">Responsible Web Design Certification</div>
                    - freecodecamp
                </div>
            </li>
            <li key={"award2"} className="list-group-item d-flex justify-content-between align-items-start border-black">
                <div className="ms-2 me-auto ">
                    <div className="fw-bold">Dean's honer</div>
                    - George Brown College. 1st and 2nd Semester
                </div>
            </li>
        </ul>
    )
};