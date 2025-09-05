import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Hello, I'm Lesly</h1>
      <p className="subtitle">
        <Typewriter
          words={[
            'Aspiring App Developer',
            'Path2TECH Student',
            'Lifelong Learner',
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </p>
      <Link to="/projects" className="cta">View My Projects</Link>
    </section>
  )
}
