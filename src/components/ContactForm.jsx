import { useState, useEffect } from "react";

function ContactForm() {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [message, setMessage] = useState(localStorage.getItem("message") || "");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");

  // Auto Save
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);
  }, [name, email, message]);

  // Debounced Email Validation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0 && !emailError) {
      setSuccess(true);

      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("message");

      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>

      {(name || email || message) && (
        <p className="saved-message">💾 You have unsent message data saved!</p>
      )}

      {success && (
        <div className="success-toast">✅ Message Sent Successfully</div>
      )}

      <div className="contact-container">
        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {emailError && <p className="error">{emailError}</p>}

          {errors.email && <p className="error">{errors.email}</p>}

          <textarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit">Send Message</button>
        </form>

        {/* LIVE PREVIEW */}
        <div className="preview">
          <h3>👀 Live Preview</h3>

          <p>
            <strong>Name:</strong> {name || "Your Name"}
          </p>

          <p>
            <strong>Email:</strong> {email || "your@email.com"}
          </p>

          <p>
            <strong>Message:</strong>{" "}
            {message || "Your message will appear here..."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
