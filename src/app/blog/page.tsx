import Link from "next/link"
export default function Blog() {
  // const current = new Date().getFullYear()
  return <>
    <div className="container-fluid mt-4">
      <h1 className="text-center">Blog Categories</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Artificial Intelligence</h5>
              <p className="card-text">Explore the impact of AI in computer engineering and real-world applications.</p>
              <Link href="#ai-section" className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Networking</h5>
              <p className="card-text">Learn about 5G, IoT, cybersecurity, and the latest in network technology.</p>
              <Link href="#networking" className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Embedded Systems</h5>
              <p className="card-text">Understand how embedded systems power modern smart devices and IoT.</p>
              <Link href="#embedded" className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Cybersecurity</h5>
              <p className="card-text">Stay updated on the latest security threats, encryption, and ethical hacking.</p>
              <Link href="#cybersecurity" className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div id="ai-section" className="container-fluid mt-5">
  <div className="card shadow-lg border-0 p-4">
    <h1 className="text-center text-primary fw-bold">Artificial Intelligence in Computer Engineering</h1>

    <div className="text-center">
      <img 
        src="img/ai_concept.jpg" 
        alt="AI Concept" 
        className="img-fluid rounded shadow-lg my-4"
        style={{ maxWidth: "80%" }}
      />
    </div>

    <p className="lead text-secondary">
      Artificial Intelligence (AI) is a branch of computer science that enables machines to mimic human intelligence. AI plays a key role in automation, decision-making, and problem-solving across various industries.
    </p>

    {/* Types of AI */}
    <h2 className="text-success mt-4 fw-bold"> Types of AI</h2>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"><strong> Narrow AI:</strong> AI designed for specific tasks (e.g., chatbots, recommendation systems).</li>
      <li className="list-group-item"><strong> General AI:</strong> AI capable of performing any intellectual task a human can do.</li>
      <li className="list-group-item"><strong> Super AI:</strong> A theoretical AI surpassing human intelligence.</li>
    </ul>

    {/* Key AI Technologies */}
    <h2 className="text-warning mt-4 fw-bold"> Key AI Technologies</h2>
    <div className="bg-light p-3 rounded shadow-sm">
      <h3 className="text-danger">Machine Learning (ML)</h3>
      <p>ML enables computers to learn from data and improve performance over time.</p>

      <h3 className="text-danger"> Natural Language Processing (NLP)</h3>
      <p>NLP helps machines understand and generate human language.</p>

      <h3 className="text-danger">Computer Vision</h3>
      <p>AI processes and interprets visual data.</p>
    </div>

    {/* Applications of AI */}
    <h2 className="text-info mt-4 fw-bold"> Applications of AI</h2>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> Automation in software development</li>
      <li className="list-group-item"> AI-powered cybersecurity systems</li>
      <li className="list-group-item">Data analysis for better decision-making</li>
      <li className="list-group-item"> Smart IoT devices with AI integration</li>
      <li className="list-group-item"> AI-driven code optimization</li>
    </ul>

    {/* Challenges & Future Trends */}
    <h2 className="text-danger mt-4 fw-bold"> Challenges and Future of AI</h2>
    
    <h3 className="fw-bold"> Challenges</h3>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> Ethical concerns and AI bias</li>
      <li className="list-group-item"> Data privacy issues</li>
      <li className="list-group-item"> High computational resource requirements</li>
    </ul>

    <h3 className="fw-bold mt-3">Future Trends</h3>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> Explainable AI (XAI) for transparency</li>
      <li className="list-group-item"> Integration of AI with quantum computing</li>
      <li className="list-group-item"> AI-driven personalized healthcare</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-primary text-center mt-5 fw-bold"> Conclusion</h2>
    <p className="text-center lead text-secondary">
      AI is transforming industries and shaping the future of technology. As AI continues to evolve, it will enhance automation, decision-making, and overall efficiency in computer engineering.
    </p>
  </div>
</div>




    <div id="networking" className="container-fluid mt-5">
  <div className="card shadow-lg border-0 p-4">
    <h1 className="text-center text-primary fw-bold"> Networking in Computer Engineering</h1>
    <div className="text-center">
      <img 
        src="img/network.jpg" 
        alt="Networking Concept" 
        className="img-fluid rounded shadow-lg my-4"
        style={{ maxWidth: "80%" }}
      />
    </div>

    <p className="lead text-secondary">
      Networking is a crucial field in computer engineering that enables communication between devices and systems. It involves the design, implementation, and management of networks to ensure seamless data transfer.
    </p>

    {/* Types of Networks */}
    <h2 className="text-success mt-4 fw-bold"> Types of Networks</h2>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"><strong> Local Area Network (LAN):</strong> Connects devices in a small area like homes and offices.</li>
      <li className="list-group-item"><strong> Wide Area Network (WAN):</strong> Covers large areas, such as the internet.</li>
      <li className="list-group-item"><strong> Wireless Networks:</strong> Uses radio signals for communication (e.g., Wi-Fi, Bluetooth).</li>
    </ul>

    {/* Networking Technologies */}
    <h2 className="text-warning mt-4 fw-bold"> Key Networking Technologies</h2>
    <div className="bg-light p-3 rounded shadow-sm">
      <h3 className="text-danger"> IP Addressing</h3>
      <p>IP addresses uniquely identify devices in a network.</p>

      <h3 className="text-danger"> Network Protocols</h3>
      <p>Protocols define communication rules between networked devices:</p>
      <ul>
        <li><strong> TCP/IP:</strong> Foundation of internet communication.</li>
        <li><strong> HTTP/HTTPS:</strong> Used for secure web browsing.</li>
        <li><strong> FTP:</strong> Protocol for file transfers.</li>
      </ul>

      <h3 className="text-danger"> Network Security</h3>
      <p>Ensures data integrity and protection against cyber threats.</p>
    </div>

    {/* Applications of Networking */}
    <h2 className="text-info mt-4 fw-bold"> Applications of Networking</h2>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> Internet communication and cloud computing</li>
      <li className="list-group-item"> Remote access and teleconferencing</li>
      <li className="list-group-item"> Data sharing and storage solutions</li>
      <li className="list-group-item"> Security monitoring and firewall protection</li>
      <li className="list-group-item"> Smart home and IoT connectivity</li>
    </ul>

    {/* Challenges and Future Trends */}
    <h2 className="text-danger mt-4 fw-bold"> Challenges and Future of Networking</h2>
    <h3 className="fw-bold"> Challenges</h3>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> Cybersecurity threats and data breaches</li>
      <li className="list-group-item"> Network congestion and bandwidth limitations</li>
      <li className="list-group-item"> Scalability issues with increasing devices</li>
    </ul>

    <h3 className="fw-bold mt-3"> Future Trends</h3>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">5G and next-generation wireless networks</li>
      <li className="list-group-item"> AI-driven network automation</li>
      <li className="list-group-item"> Quantum networking for enhanced security</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-primary text-center mt-5 fw-bold"> Conclusion</h2>
    <p className="text-center lead text-secondary">
      Networking is the backbone of modern communication, enabling efficient and secure data exchange. With advancements in technology, networking will continue to evolve, shaping the future of connectivity.
    </p>
  </div>
</div>



<div id="embedded" className="container-fluid mt-5">
  <div className="card shadow-lg border-0 p-4">
    <h1 className="text-center text-primary fw-bold"> Embedded Systems in Computer Engineering</h1>

    <div className="text-center">
      <img 
        src="img/Embedded.jpg" 
        alt="Embedded Systems" 
        className="img-fluid rounded shadow-lg my-4"
        style={{ maxWidth: "80%" }}
      />
    </div>

    <p className="lead text-secondary">
      Embedded systems are specialized computing devices designed to perform dedicated functions within a larger system. They play a vital role in consumer electronics, industrial automation, and real-time processing.
    </p>

    {/* Types of Embedded Systems */}
    <h2 className="text-success mt-4 fw-bold"> Types of Embedded Systems</h2>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"><strong> Real-Time Embedded Systems:</strong> Require precise timing, such as automotive control units.</li>
      <li className="list-group-item"><strong> Standalone Embedded Systems:</strong> Function independently, such as calculators.</li>
      <li className="list-group-item"><strong> Networked Embedded Systems:</strong> Devices connected via networks, like smart home appliances.</li>
    </ul>

    {/* Key Technologies */}
    <h2 className="text-warning mt-4 fw-bold"> Key Technologies in Embedded Systems</h2>
    <div className="bg-light p-3 rounded shadow-sm">
      <h3 className="text-danger"> Microcontrollers and Microprocessors</h3>
      <p>Embedded systems rely on microcontrollers and microprocessors for processing tasks.</p>

      <h3 className="text-danger"> Embedded Operating Systems</h3>
      <p>Some embedded systems use lightweight operating systems like FreeRTOS or embedded Linux.</p>

      <h3 className="text-danger"> Sensors and Actuators</h3>
      <p>Embedded systems interact with the physical world using sensors and actuators.</p>
    </div>

    {/* Applications */}
    <h2 className="text-info mt-4 fw-bold"> Applications of Embedded Systems</h2>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> Automotive control systems (ECUs, ABS, airbags)</li>
      <li className="list-group-item"> Industrial automation and robotics</li>
      <li className="list-group-item">Consumer electronics (smartphones, smart TVs, wearables)</li>
      <li className="list-group-item"> Medical devices (pacemakers, diagnostic equipment)</li>
      <li className="list-group-item"> IoT applications and smart devices</li>
    </ul>

    {/* Challenges & Future Trends */}
    <h2 className="text-danger mt-4 fw-bold"> Challenges and Future of Embedded Systems</h2>
    
    <h3 className="fw-bold"> Challenges</h3>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> Power consumption and battery life constraints</li>
      <li className="list-group-item"> Real-time processing and system reliability</li>
      <li className="list-group-item"> Security risks in IoT and embedded systems</li>
    </ul>
    <h3 className="fw-bold mt-3"> Future Trends</h3>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> Edge computing and AI-powered embedded systems</li>
      <li className="list-group-item"> 5G integration for real-time data processing</li>
      <li className="list-group-item"> Improved cybersecurity for embedded devices</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-primary text-center mt-5 fw-bold"> Conclusion</h2>
    <p className="text-center lead text-secondary">
      Embedded systems continue to revolutionize industries with advancements in automation, real-time processing, and IoT applications. The future of embedded technology is shaping a smarter and more connected world.
    </p>
  </div>
</div>



    <div id="cybersecurity" className="container-fluid mt-5">
  <div className="card shadow-lg border-0 p-4">
    <h1 className="text-center text-primary fw-bold">Cybersecurity in Computer Engineering</h1>
    <div className="text-center">
      <img 
        src="img/Cybersecurity.jpg" 
        alt="Cybersecurity" 
        className="img-fluid rounded shadow-lg my-4"
        style={{ maxWidth: "80%" }}
      />
    </div>

    <p className="lead text-secondary">
      Cybersecurity is a critical aspect of computer engineering, ensuring the protection of digital assets, networks, and data from unauthorized access and cyber threats.
    </p>

    {/* Key Cybersecurity Concepts */}
    <h2 className="text-success mt-4 fw-bold"> Key Cybersecurity Concepts</h2>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"><strong> Encryption:</strong> Protecting data by converting it into unreadable formats.</li>
      <li className="list-group-item"><strong> Authentication:</strong> Verifying the identity of users and devices.</li>
      <li className="list-group-item"><strong> Firewalls:</strong> Monitoring and filtering network traffic for security.</li>
      <li className="list-group-item"><strong> Penetration Testing:</strong> Identifying system vulnerabilities through simulated attacks.</li>
    </ul>

    {/* Cyber Threats */}
    <h2 className="text-warning mt-4 fw-bold"> Common Cyber Threats</h2>
    <div className="bg-light p-3 rounded shadow-sm">
      <h3 className="text-danger">Phishing Attacks</h3>
      <p>Cybercriminals use deceptive emails or messages to trick users into revealing sensitive information.</p>

      <h3 className="text-danger"> Malware</h3>
      <p>Malicious software such as viruses, ransomware, and spyware disrupt systems and steal data.</p>

      <h3 className="text-danger"> SQL Injection</h3>
      <p>Attackers inject malicious SQL queries to manipulate databases.</p>
    </div>

    {/* Best Practices */}
    <h2 className="text-info mt-4 fw-bold"> Cybersecurity Best Practices</h2>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> Use strong and unique passwords for different accounts.</li>
      <li className="list-group-item"> Enable multi-factor authentication (MFA) for added security.</li>
      <li className="list-group-item"> Regularly update software and apply security patches.</li>
      <li className="list-group-item"> Encrypt sensitive data to prevent unauthorized access.</li>
      <li className="list-group-item"> Perform regular security audits and penetration testing.</li>
    </ul>

    {/* Future Trends */}
    <h2 className="text-danger mt-4 fw-bold"> Future Trends in Cybersecurity</h2>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"> Artificial Intelligence for threat detection and response.</li>
      <li className="list-group-item"> Quantum cryptography for ultra-secure encryption.</li>
      <li className="list-group-item"> Zero Trust Architecture for enhanced security policies.</li>
      <li className="list-group-item"> Blockchain technology for secure transactions and identity management.</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-primary text-center mt-5 fw-bold"> Conclusion</h2>
    <p className="text-center lead text-secondary">
      Cybersecurity is an ever-evolving field crucial for protecting digital systems and data. As cyber threats continue to grow, advancements in security technologies and best practices will shape a safer digital future.
    </p>
  </div>
</div>

  </>
}