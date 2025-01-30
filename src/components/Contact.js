import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap'; // Import React-Bootstrap components
import Footer from './Footer';

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // });
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // ... (Your fetch logic to GetForm or your serverless function remains the same)
  // };
  const [name, setName] = useState('');
  const  [email, setEmail] = useState('');
  // const  [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    // setSubject('');
    setMessage('');

  }


  return (
  <div>
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center">Get in Touch</Card.Title>
          <Form onSubmit={handleSubmit} action="https://getform.io/f/bkkkormb" method="POST">
            <Form.Group className="mb-3">
              <Form.Control 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Control 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                required 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
              />
            </Form.Group> */}
            <Form.Group className="mb-3">
              <Form.Control 
                as="textarea" 
                name="message" 
                rows={5} 
                placeholder="Message" 
                required 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
              />
            </Form.Group>
            <div className="text-center">
              {/* {loading && <div className="loading">Loading</div>}
              {error && <div className="error-message">{error}</div>}
              {success && <div className="sent-message">{success}</div>} */}
              <Button variant="primary" type="submit">Send Message</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    <Footer/>
    </div>
  );
};

export default Contact;
