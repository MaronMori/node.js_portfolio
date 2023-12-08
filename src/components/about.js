export default function Bio_section () {
    return (
            <div className="row my-4">
                <div className="col-md-6">
                    <h1>Ryoga mori</h1>
                    <p>Hello! My name is Ryoga! I am from Japan. I enjoy making web applications with Python, React, Node.Js. My goal is to become Software Engineer!</p>
                    <ul>
                        <li><b>Birthday:</b> May, 6th, 1999</li>
                        <li><b>Current Position:</b> International CS Student at George Brown College in Toronto</li>
                        <li><b>Living:</b> Toronto</li>
                        <li><b>Nationality:</b> Japan</li>
                    </ul>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <img className="img-fluid" style={{ maxWidth: '400px' }} src="/mypic/E19530FE-44EA-49D8-B974-EB5F5A2D2DC1.JPG" alt="Ryoga Mori"/>
                </div>
            </div>
    )
}