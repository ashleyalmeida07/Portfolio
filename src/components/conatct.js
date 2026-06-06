import { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function Conatct() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "54fa7a20-1f17-451b-8576-b799bbd0472c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
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
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <p className="info-text">Mumbai, India</p>
            </div>
            <div className="information">
              <div className="contact-icon">
                <i className="fas fa-paper-plane"></i>
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
              name="first_name"
              required
              className="contact-input"
              placeholder="First Name"
            />
            <input
              type="text"
              name="last_name"
              required
              className="contact-input"
              placeholder="Last Name"
            />
          </div>
          <div className="row">
            <input type="tel" name="phone" required className="contact-input" placeholder="Phone" maxLength={10} pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" />
            <input type="email" name="email" required className="contact-input" placeholder="Email" />
          </div>
          <div className="row">
            <textarea
              name="message"
              className="contact-input textarea"
              placeholder="Message"
              required
              defaultValue={""}
            />
          </div>

          <div>
            <div style={{ marginBottom: "1rem" }}>
              <HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
              />
            </div>
            <input
              type="submit"
              value={result === "Sending...." ? "Sending..." : "Send"}
              disabled={result === "Sending...."}
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
                cursor: result === "Sending...." ? 'not-allowed' : 'pointer',
                textAlign: 'center',
                opacity: result === "Sending...." ? 0.7 : 1,
              }}
            />
          </div>

          {result && result !== "Sending...." && (
            <p style={{
              marginTop: '1rem',
              fontWeight: 500,
              color: result.includes("successfully") ? '#28a745' : '#dc3545'
            }}>
              {result}
            </p>
          )}
        </form>

      </div>
    </div>
  </section>
  );
}
