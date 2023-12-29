
export const Work_card = () => {
    return (
        <div className="row justify-content-around">
            <div className="col-auto mb-4">
                <div className="card">
                    <img className="card-img-top"  alt="Card image cap" src="/works/Screenshot_2023-10-30_at_6.10.33PM.png"/>
                    <div className="card-body" >
                        <h5 className="card-title">Pizza Ordering Website</h5>
                        <p className="card-text">This application is a pizza ordering site, created in Python using the Django framework in the Linkedin Learning course.</p>
                        <div className="text-center">
                            <a href="https://github.com/MaronMori/nandiasgarden-project/tree/main" className="btn btn-primary btn-outline-success" target="_blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-auto mb-4">
                <div className="card" >
                    <img className="card-img-top"  alt="Card image cap" src="/works/Screenshot_2023-10-30_at_6.04.01PM.png"/>
                    <div className="card-body" >
                        <h5 className="card-title">To Do List Web Application</h5>
                        <p className="card-text">This application is a simple To Do List web
                            application by Python with Django.</p>
                        <div className="text-center">
                            <a href="https://github.com/MaronMori/todolist/tree/main"  className="btn btn-primary btn-outline-success" target="_blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-auto mb-4">
                <div className="card">
                    <img className="card-img-top"  alt="Card image cap" src="/works/Screenshot_2023-10-29_at_3.12.07PM.png"/>
                    <div className="card-body">
                        <h5 className="card-title">Web Scraping Application on Japanese Website</h5>
                        <p className="card-text">This application corrects specific information from Japanese real state website such as rent, address, age of house. These information are written in css file.</p>
                        <div className="text-center">
                            <a href="https://github.com/MaronMori/scrapingproperty"  className="btn btn-primary btn-outline-success" target="_blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
