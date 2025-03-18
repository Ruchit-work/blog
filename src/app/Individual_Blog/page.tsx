export default function Individual(){
    // const current = new Date().getFullYear()
    return <>
       <div className="container mt-5">
      <div className="card shadow-lg p-4 border-0">
        <h1 className="text-center text-primary">The Impact of AI in Computer Engineering</h1>
        <img
          src="img/ai_concept.jpg"
          alt="AI Concept"
          className="img-fluid rounded shadow my-3"
        />

        <p>
          Artificial Intelligence (AI) is revolutionizing the field of computer
          engineering, from automation and cybersecurity to data analysis and
          machine learning advancements.
        </p>

        <h2 className="text-success">What is AI?</h2>
        <p>
          AI is the simulation of human intelligence in machines, allowing them
          to perform tasks such as problem-solving, decision-making, and
          learning from data.
        </p>

        <h2 className="text-warning">Key AI Technologies</h2>
        <ul>
          <li><strong>Machine Learning (ML):</strong> Algorithms that learn and improve over time.</li>
          <li><strong>Natural Language Processing (NLP):</strong> Enables machines to understand human language.</li>
          <li><strong>Computer Vision:</strong> AI processes and interprets visual data.</li>
        </ul>

        <h2 className="text-danger">Applications of AI in Computer Engineering</h2>
        <ul>
          <li>Automated software development and debugging</li>
          <li>AI-driven cybersecurity for threat detection</li>
          <li>Data analytics for better decision-making</li>
          <li>Smart IoT devices and automation</li>
        </ul>

        <h2 className="text-info">Challenges & Future Trends</h2>
        <h3>Challenges</h3>
        <ul>
          <li>AI bias and ethical concerns</li>
          <li>Data privacy and security risks</li>
          <li>High computational requirements</li>
        </ul>

        <h3>Future Trends</h3>
        <ul>
          <li>Explainable AI for transparency</li>
          <li>Quantum computing and AI integration</li>
          <li>AI-powered personalized healthcare</li>
        </ul>

        <h2 className="text-primary text-center mt-4">Conclusion</h2>
        <p className="text-center">
          AI is transforming industries and redefining the future of technology.
          Its continuous evolution will enhance efficiency and automation in
          computer engineering.
        </p>

      </div>
    </div>
    
    </>
}