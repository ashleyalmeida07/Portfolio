import React, { useState } from 'react'

export default function Conatct() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact" id="contact">
    <div className="container">
      <div className="contact-box">
        <div className="contact-info">
          <h3 className="title">Get in touch</h3>
          <p className="text">
            "Feel free to get in touch for project collaborations, internships, or
            to discuss exciting ideas. I'm always open to connecting and
            learning!"{" "}
          </p>
          <div className="information-wrap">
            <div className="information">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt" ></i>
              </div>
              <p className="info-text">Mumbai, India</p>
            </div>
            <div className="information">
              <div className="contact-icon">
                <i className="fas fa-paper-plane" ></i>
              </div>
              <p className="info-text">ashleyalmeida182006@gmail.com</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <h3 className="title">Contact me</h3>
          <div className="row">
            <input
              type="text"
              name="first_name" required
              className="contact-input"
              placeholder="First Name"
            />
            <input
              type="text"
              name="last_name" required
              className="contact-input"
              placeholder="Last Name"
            />
          </div>
          <div className="row">
            <input type="text" name="phone" required className="contact-input" placeholder="Phone" />
            <input type="email" name="email" required className="contact-input" placeholder="Email" />
          </div>
          <div className="row">
            <textarea
              name="message"
              className="contact-input textarea"
              placeholder="Message"
              defaultValue={""}
            />
          </div>

  <div>
  <input 
    type="submit" 
    value="Send" 
    style={{
      all: 'unset',
      display: 'inline-block',
      padding: '0.85rem 2rem',
      backgroundColor: 'var(--main-color)',
      color: 'var(--light-one)',
      borderRadius: '2rem',
      fontSize: '1.05rem',
      textTransform: 'uppercase',
      fontWeight: 500,
      transition: '0.3s',
      cursor: 'pointer',
      textAlign: 'center',
    }}
  />
</div>
{result && <p style={{ marginTop: '1rem', color: 'var(--main-color)', fontWeight: 500 }}>{result}</p>}

        </form>
        
      </div>
    </div>
  </section>
  
  )
}
