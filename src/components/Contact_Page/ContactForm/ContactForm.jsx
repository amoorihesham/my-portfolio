"use client";
import "./style.css";
function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-form">
      <div className="row align-items-center g-3">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="form-control mb-3"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="form-control mb-3"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="form-control mb-3"
              required
            />
            <textarea
              placeholder="Your Message"
              name="msg"
              className="form-control"
              required
            ></textarea>
            <button type="submit" className="btn btn-success mt-3">
              Send Message
            </button>
          </form>
        </div>
        <div className="col-md-6 order-sm">
          <div className="quote">
            <p className="qp">
              Empower your thoughts to take flight – drop a message in the wings
              of our contact form. Your words matter, and so do you. Let&#39;s
              connect and make a difference together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
