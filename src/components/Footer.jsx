export default function Footer() {
  return (
    <footer className="footer">
      <p>Connect with me:</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/leslyminaya" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:lesly.minaya19@outlook.com">Email</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Lesly Minaya. All rights reserved.</p>
    </footer>
  )
}
