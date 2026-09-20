export default function Contact() {
  return (
    <main className="contact-page">
      <h1>Contact Me</h1>

      <p>
        I would love to connect with you. Feel free to reach out
        for opportunities, collaborations or any queries.
      </p>

      <div className="contact-info">
        <p>
          <strong>Email:</strong> vanshi7807@gmail.com
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/vanshika-ai-ml" target="_blank">
            GitHub Profile
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/vanshika-32aa6b3b9" target="_blank">
            LinkedIn Profile
          </a>
        </p>
      </div>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}