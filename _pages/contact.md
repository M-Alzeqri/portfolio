---
layout: single
permalink: /contact/
title: "Contact"
sitemap: true
---

# Contact Me

Feel free to reach out through any of the platforms below or use the contact form to send me a message. I'll respond as soon as I can.

## Get in Touch


- **LinkedIn:** [Mohammed Al-zeqri](https://www.linkedin.com/in/mohammed-al-zeqri/)
- **GitHub:** [M-Alzeqri](https://github.com/M-Alzeqri)

---

## Contact Form

<form
  action="https://formspree.io/f/xpwwlrnn"
  method="POST"
  style="max-width: 500px; margin: 0 auto; display: flex; flex-direction: column; gap: 15px; font-family: Arial, sans-serif;"
>
  <!-- Email Field -->
  <label for="email" style="font-size: 1rem; font-weight: bold;">
    Your Email:
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter your email address"
      required
      style="width: 100%; padding: 10px; margin-top: 5px; border: 1px solid #ccc; border-radius: 5px; font-size: 1rem;"
    />
  </label>

  <!-- Message Field -->
  <label for="message" style="font-size: 1rem; font-weight: bold;">
    Your Message:
    <textarea
      id="message"
      name="message"
      placeholder="Write your message here..."
      required
      style="width: 100%; padding: 10px; margin-top: 5px; border: 1px solid #ccc; border-radius: 5px; font-size: 1rem; height: 150px;"
    ></textarea>
  </label>

  <!-- Honeypot Field to Prevent Spam -->
  <input type="text" name="honeypot" style="display:none" />

  <!-- Submit Button -->
  <button
    type="submit"
    style="background-color: #007BFF; color: white; padding: 10px 15px; font-size: 1rem; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.3s;"
    onmouseover="this.style.backgroundColor='#0056b3'"
    onmouseout="this.style.backgroundColor='#007BFF'"
  >
    Send
  </button>
</form>

<script>
  // Confirmation Message
  document.querySelector('form').onsubmit = function () {
    alert('Thank you for reaching out! I will get back to you soon.');
  };
</script>
