function FullStackDeveloper() {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Full Stack Developer</h1>
        <p className="text-lg mb-2"><strong>Company:</strong> Microsoft</p>
        <p className="text-lg mb-2"><strong>Location:</strong> Remote</p>
        <p className="text-lg mb-2"><strong>Type:</strong> Full-Time</p>
        <p className="text-lg mb-2"><strong>Experience:</strong> 1-3 Years</p>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-2">Responsibilities:</h2>
          <ul className="list-disc list-inside">
            <li>Build frontend & backend</li>
            <li>Design and implement APIs</li>
            <li>Ensure application security</li>
          </ul>
        </div>
        <a
          href="https://careers.microsoft.com/fullstack"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Apply Now
        </a>
      </div>
    );
  }
  
  export default FullStackDeveloper;
  