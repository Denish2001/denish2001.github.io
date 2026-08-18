// Contact.jsx
import React, { useState } from 'react';
import { MdCall, MdEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // reset
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  const methods = [
    { icon: MdCall, label: 'Phone', value: '+254 705 369 048', href: 'tel:+254705369048' },
    { icon: BsWhatsapp, label: 'WhatsApp', value: '+254 705 369 048', href: 'https://wa.me/+254705369048' },
    { icon: MdEmail, label: 'Email', value: 'awajodenish@gmail.com', href: 'mailto:awajodenish@gmail.com' },
  ];

  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <span className="section-subtitle">Get in touch</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-description">I’m always open to collaboration.</p>
          <div className="contact__methods">
            {methods.map((m) => (
              <a key={m.label} href={m.href} className="contact__method" target="_blank" rel="noreferrer">
                <m.icon size={20} />
                <div>
                  <strong>{m.label}</strong>
                  <span>{m.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="contact__form-wrapper">
          <h3>Send a message</h3>
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__field">
              <input type="text" name="name" value={form.name} onChange={handleChange} required />
              <label>Name</label>
            </div>
            <div className="contact__field">
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
              <label>Phone</label>
            </div>
            <div className="contact__field">
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
              <label>Email</label>
            </div>
            <div className="contact__field">
              <textarea name="message" rows={4} value={form.message} onChange={handleChange} required />
              <label>Message</label>
            </div>
            <button type="submit" className="contact__submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;