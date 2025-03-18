
import Link from "next/link"
export default function About()
{
    return (
        <div className="container mt-5">
          <div className="card shadow-lg p-4 border-0">
            <h1 className="text-center text-primary">About Us</h1>
            <p className="text-center text-muted">Learn more about our mission and team behind this blog.</p>
            
            <div className="row mt-4">
              <div className="col-md-6">
                <h2 className="text-success">Our Mission</h2>
                <p>
                  Welcome to our <strong>Computer Engineering Blog</strong>, where we explore the latest trends in AI, Networking,
                  Embedded Systems, and Cybersecurity. Our goal is to provide high-quality, informative content for students,
                  professionals, and tech enthusiasts.
                </p>
                <p>
                  Whether you're looking for coding tutorials, industry insights, or research updates, we are dedicated to bringing
                  you the best resources in computer engineering.
                </p>
              </div>
              <div className="col-md-6">
                <img src="img/blog-3.jpg" alt="Team" className="img-fluid rounded shadow" />
              </div>
            </div>
            
            <h2 className="text-center mt-5 text-warning">Meet Our Team</h2>
            <div className="row mt-3">
              <div className="col-md-4 text-center">
                {/* <img src="/author1.jpg" alt="Author 1" className="img-fluid rounded-circle mb-3" width="150" /> */}
                <h4>John Doe</h4>
                <p>AI & Machine Learning Expert</p>
              </div>
              <div className="col-md-4 text-center">
                {/* <img src="/author2.jpg" alt="Author 2" className="img-fluid rounded-circle mb-3" width="150" /> */}
                <h4>Jane Smith</h4>
                <p>Networking & Cybersecurity Specialist</p>
              </div>
              <div className="col-md-4 text-center">
                {/* <img src="/author3.jpg" alt="Author 3" className="img-fluid rounded-circle mb-3" width="150" /> */}
                <h4>Emily Brown</h4>
                <p>Embedded Systems Developer</p>
              </div>
            </div>
          </div>
        </div>
      );
}