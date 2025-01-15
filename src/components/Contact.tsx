import linkedin from '../assets/linkedin.png';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const serviceId=import.meta.env.VITE_APP_SERVICE_ID;
  const templateId=import.meta.env.VITE_APP_TEMPLATE_ID;
  const publicKey=import.meta.env.VITE_APP_PUBLIC_KEY;

  const sendEmail = async(e: React.FormEvent) => {
    e.preventDefault();
  

  const data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: name,
      from_email: email,
      to_name: 'Mauricio',
      message: message,
    }
  };

  try {
    const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
    console.log(res.data);
    alert('Message sent successfully');
    setName('');
    setEmail('');
    setMessage('');
  } catch (error) {
    console.error(error);
  }
}


  return (
    <section id="contact" className="z-50 bg-gray-800 relative py-10 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">Get in Touch</h2>
            <p className="mb-4 text-white/85">
              Please contact me to collaborate on new projects. I am always available.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mauricio-patino-99125a115/"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={linkedin} alt="" className="h-6 w-6" />
              </a>
            </div>
            <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px]" />
          </div>

          <form className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10" onSubmit={sendEmail}>
            <h1 className="text-gray-900 text-4xl font-bold mb-7">Contact Me</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
             
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter Your Message"
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              ></textarea>
            </div>

            <button className="bg-red-500 text-white px-3 py-2 rounded-lg" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;