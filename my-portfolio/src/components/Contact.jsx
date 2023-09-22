import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>
        You can reach me at my email address: <a href="mailto:youremail@example.com">youremail@example.com</a>.
      </p>
      <div className="social-media">
        {/* Add links to your social media profiles */}
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
        {/* Add more social media links here */}
      </div>
    </section>
  );
}

export default Contact;
