import React, { useEffect } from 'react';

const Form = () => {
  useEffect(() => {
    // Dynamically load the Visme form script
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      style={{
        width: '600px', 
        height: '400px', 
        margin: '0 auto',  // Centers the form horizontally
        overflow: 'auto',  // Ensures no content is hidden
        position: 'relative', // Ensures the form is not absolutely positioned over other content
        zIndex: 1  // Ensure this content has a lower stack than other elements
      }}
    >
      <div
        className="visme_d"
        data-title="Contact Us Form"
        data-url="g7d01wy6-contact-us-form?fullPage=true"
        data-domain="forms"
        data-full-page="true"
        data-min-height="100vh"
        data-form-id="114568"
        style={{ width: '100%', height: '100%' }}
      ></div>
    </div>
  );
};

export default Form;
