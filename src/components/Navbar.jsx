import { NavLink, Link } from 'react-router-dom'
import useTheme from '../hooks/useTheme'

export default function Navbar() {
  const { theme, toggle } = useTheme()
  return (
    <nav className="navbar">
      <Link to="/" className="logo"></Link>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}
