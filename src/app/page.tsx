import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./blog/page";

export default function Home() {

  
  return (
    <>
<div>
  <div className="container-fluid mt-4">
    {/* Hero Section */}
    <div className="home_container" >
                <div>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3 mobile_view_title" style={{maxWidth:"900px"}}>
                        <div className="row justify-content-center text-center py-5">
        <div className="col-md-12" style={{ color: "white" }}>
          <h1 className="display-4">Welcome to Computer Engineering Hub</h1>
          <p className="lead">Your source for the latest trends, tutorials, and insights in computer engineering.</p>
        </div>
      </div>
                            {/* <Link href="#contact"> <span className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</span></Link> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-5">
        <h2 className="text-left text-success">What is Computer Engineering?</h2>
        <p>
          Computer engineering is a broad field that sits in between the hardware of electrical engineering and the software of computer science. 
          When computer engineers design hardware, they focus on what the hardware is trying to accomplish as opposed to the nitty-gritty details of how to lay out the transistors. 
          They design the processors for systems of all sizes, whether they look like computers or not. The processors go into desktop computers, smartphones, tablet computers, supercomputers, 
          kitchen appliances, automobiles, space vehicles, and more. Specialized processors like GPUs (graphics processing units) or hardware to accelerate AI algorithms are also designed by computer engineers.
        </p>
      </div>
       {/* Difference Between Computer Engineering and Computer Science */}
       <div className=" mt-5">
        <h2 className="text-left text-success">What's the Difference Between Computer Engineering and Computer Science?</h2>
        <p>
          Computer engineering bridges the divide between hardware and software. While computer scientists tend to focus on the theory of computer systems, including software and programming, 
          computer engineers understand computer systems in their entirety.
        </p>
        <p>
          Unlike most computer scientists, computer engineers are comfortable working with both hardware and software. They focus on how hardware and software interact with one another and have the ability to 
          test design trade-offs between the two. Computer engineers often work on electronic aspects of the system and can design, build, and program complete computer systems from scratch.
        </p>
      </div>
        {/* What Do Computer Engineers Do? */}
        <div className=" mt-5">
        <h2 className="text-left text-success">What Do Computer Engineers Do?</h2>
        <p>
          Many computer engineers work less with computer hardware and spend more time writing code. Rather than the fancy graphical applications that end users interact with directly, 
          computer engineers tend to focus on the "invisible" code that talks with the hardware within a system.
        </p>
        <p>
          When a smartphone wants to know its location, it asks the GPS chip. A computer engineer writes the code to interface with the GPS chip to gather that data and present it to the application. 
          This kind of invisible interface can be found in home computers, where a user installs a driver written by a computer engineer to support a printer or other connected device. It can also be found in 
          things that don't look like computers at all—like kitchen appliances and cars. In fact, a modern car has anywhere from 10,000,000 to 100,000,000 lines of code running in it.
        </p>
        <p>
          Many computer engineers work in embedded systems, designing the hardware and software for these computing systems that don't look like computers. This spectrum of knowledge between hardware and software 
          allows the computer engineer to work at both extremes, as well. Some computer engineers will spend their time designing and populating printed circuit boards (PCBs) or other hands-on hardware design. 
          Some will leverage their knowledge of programming to write the applications that consumers use directly on smartphones, desktop computers, and supercomputers. Many computer engineers will slide along 
          this spectrum throughout their careers. Some may do things from the whole spectrum on any given day at work.
        </p>
      </div>
    {/* Trending Topics */}
    <div className="mt-5">
      <h2 className="text-center text-success">Trending Topics</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5>Artificial Intelligence</h5>
            <p>How AI is transforming computer engineering.</p>
            <p className="text-muted">Discover AI's impact on automation, data science, and decision-making.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5>Embedded Systems</h5>
            <p>Discover the latest advancements in embedded technology.</p>
            <p className="text-muted">From IoT to smart devices, learn how embedded systems are shaping the future.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5>Networking</h5>
            <p>The future of connectivity and 5G technology.</p>
            <p className="text-muted">Explore innovations in high-speed networking, security, and wireless tech.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      <Blog></Blog>
      <Script src="/demo.js"></Script>
    </>
  );
}