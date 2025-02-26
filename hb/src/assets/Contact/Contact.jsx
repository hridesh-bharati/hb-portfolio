import { Link } from "react-router-dom";
import './Contact.css';

function Contact() {
  return (
    <div className="p-2 p-md-5 p-xl-3 ">
      <div className="contact-form-container bg-white p-4 rounded shadow-lg">
        <form className="contact-form" action="https://formspree.io/f/xyyqogrb" method="POST">
          <h1 className="contact-form-title text-center fw-bold text-secondary mb-4">Contact Form</h1>

          <div className="form-group mb-3">
            <label htmlFor="first-name" className="form-label">First Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control" name="First_Name" id="first-name" placeholder="First Name" required />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="last-name" className="form-label">Last Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control" name="Last_Name" id="last-name" placeholder="Last Name" required />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="contact" className="form-label">Mobile Number <span className="text-danger">*</span></label>
            <input type="tel" className="form-control" name="Contact" id="contact" placeholder="Enter Your Mobile" required />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" className="form-control mt-4" name="Email" id="email" placeholder="Enter Your Email" />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="subject" className="form-label">Subject <span className="text-danger">*</span></label>
            <input type="text" name="subject" id="subject" className="form-control" placeholder="Enter Your Subject" required />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
            <textarea name="Message" id="message" className="form-control" rows="7" placeholder="Type Your Message Here" required></textarea>
          </div>

          <div className="form-group text-center">
            <button type="submit" className="submit-btn btn btn-success w-100">
              <i className="bi bi-send-fill"></i> Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
