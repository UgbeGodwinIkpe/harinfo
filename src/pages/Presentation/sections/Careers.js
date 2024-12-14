import React from 'react';
import './Careers.css';

const Careers = () => {
  const jobListings = [
    {
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-Time',
      description: 'Build and optimize user interfaces with React.js and ensure a seamless user experience.',
      link: '#',
    },
    {
      title: 'Backend Developer',
      location: 'San Francisco, CA',
      type: 'Full-Time',
      description: 'Design and implement scalable backend solutions using Node.js and databases.',
      link: '#',
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote',
      type: 'Part-Time',
      description: 'Create intuitive and beautiful user experiences through design and prototyping.',
      link: '#',
    },
    // job listing

      // <div className="job-listings">
      //   {jobListings.map((job, index) => (
      //     <div className="job-card" key={index}>
      //       <h3>{job.title}</h3>
      //       <p className="job-location">{job.location} | {job.type}</p>
      //       <p className="job-description">{job.description}</p>
      //       <a href={job.link} className="apply-btn">Apply Now</a>
      //     </div>
      //   ))}
      // </div>
  ];

  return (
    <section className="careers-section">
      <div className="careers-header">
        <h2>Careers [Join Our Team]</h2>
        <p>Would you like to join a dynamic and evolving workplace? We are more than eager to have you onboard.</p>
        <p>Get in touch with us through <a href="mailto:career@harinfo.com">career@harinfo.com</a></p>
        <p>We await your message!</p>
      </div>
    </section>
  );
};

export default Careers;
