import { useMemo, useState } from 'react'
import { PROJECTS, CATEGORIES } from '../data/projects'

export default function Projects() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    let items = PROJECTS
    if (category !== 'All') items = items.filter(p => p.category === category)
    if (query.trim()) {
      const q = query.toLowerCase()
      items = items.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.join(' ').toLowerCase().includes(q)
      )
    }
    return items
  }, [query, category])

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search projects (e.g., React, API)..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-label="Search projects"
        />
        <div className="category-list">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={cat === category ? 'chip active' : 'chip'}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {filtered.map(p => (
          <article key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </article>
        ))}
        {filtered.length === 0 && <p className="muted">No projects found.</p>}
      </div>
    </section>
  )
}
