import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div >
        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="300">
          <div className="row gy-4">

            <div className="col-md-6">
              <input type="text" name="name" className="form-control" placeholder="Your Name" required=""></input>
            </div>

            <div className="col-md-6 ">
              <input type="email" className="form-control" name="email" placeholder="Your Email" required=""></input>
            </div>

            <div className="col-md-12">
              <input type="text" className="form-control" name="subject" placeholder="Subject" required=""></input>
            </div>

            <div className="col-md-12">
              <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
            </div>

            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>

              <button type="submit">Send Message</button>
            </div>

          </div>
        </form>
    </div>
  )
}

export default Contact