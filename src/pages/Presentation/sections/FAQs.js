import React, { useState } from 'react';
import styles from '../styles.module.css';
function FAQs() {


  const faqs = [
    {
      question: 'How can HarInfo help my business?',
      answer: 'HarInfo offers a comprehensive suite of solutions designed to tackle any obstacle head-on, ensuring your business not only perseveres but flourishes exponentially. We provide consulting, outsourcing, application development, and Web3, Blockchain, and AI solutions tailored to your specific needs.',
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including advertising, automotive, contact centers, construction, education, engineering, entertainment, finance, government, legal, insurance, logistics, manufacturing, healthcare, printing, professional services, real estate, retail, software, and video & films.',
    },
    {
      question: 'What makes HarInfo different from other consulting firms?',
      answer: 'HarInfo is more than a one-stop-shop for business solutions. We become your comprehensive, all-inclusive partner, crafting customized strategies that transform your challenges into stepping stones towards success. Our human touch and dedicated full-stack support team set us apart from the competition.',
    },
    {
      question: 'How do I get started with HarInfo?',
      answer: 'Getting started with HarInfo is easy. Contact us through our general, sales, or career queries email addresses, and one of our representatives will be in touch to discuss your specific needs and how we can help you achieve your business goals.',
    },
    {
      question: 'Do you offer global services?',
      answer: 'Yes, HarInfo operates worldwide, providing services to clients across various regions. Regardless of your nationality or the country in which your business operates, HarInfo welcomes you. We are ready to partner with you to transform your venture into a thriving enterprise.',
    },
  ];
// State to track open/closed FAQs
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '15px', fontSize: '20px' }}>Frequently Asked Questions</h2>
      <div>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            style={{ 
              marginBottom: '10px', 
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              overflow: 'hidden',
              fontSize: '15px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <div
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: 'pointer',
                padding: '10px',
                background: '#f9f9f9',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {faq.question}
              <span style={{ fontSize: '15px' }}>{openFAQ === index ? '-' : '+'}</span>
            </div>
            {openFAQ === index && (
              <div style={{ padding: '15px', background: '#fff', borderTop: '1px solid #ccc', fontSize: '12px' }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;