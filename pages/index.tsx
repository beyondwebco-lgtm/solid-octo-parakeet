import { useEffect, useState } from 'react'

// Simple Header component
function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">VELOCITY</a>
          <div className="nav-links">
            <a href="#gallery" className="active">Collection</a>
            <a href="#about">Philosophy</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

// Hero section
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content fade-in delay-2">
        <h1>
          Precision <br />
          <em>&amp; Performance</em>
        </h1>
        <p className="hero-subtitle">
          Exploring the intersection of engineering and art.
        </p>
        <a href="#gallery" className="btn fade-in delay-3">Explore the Gallery</a>
      </div>
    </section>
  )
}

// Gallery section
function Gallery() {
  const items = [
    {
      title: 'The Classics',
      description: 'Timeless silhouettes and the roar of naturally aspirated engines.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      tag: 'Classic',
    },
    {
      title: 'Hypercars',
      description: 'Pushing the boundaries of physics and aerodynamics.',
      image: 'https://images.unsplash.com/photo-1544636331-078577679663?auto=format&fit=crop&q=80&w=800',
      tag: 'Hyper',
    },
    {
      title: 'Electric Future',
      description: 'Silent power meeting sustainable luxury.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5b570766236?auto=format&fit=crop&q=80&w=800',
      tag: 'Electric',
    },
  ]
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2>Curated Collection</h2>
        </div>
        <div className="grid">
          {items.map((i, k) => (
            <article key={k} className="card fade-in delay-1">
              <div className="card-image" style={{ backgroundImage: `url(${i.image})` }} />
              <div className="card-content">
                <h3>{i.title}</h3>
                <p>{i.description}</p>
                <span className="tag">{i.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// About section
function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2>The Philosophy</h2>
        </div>
        <div className="about-grid">
          <div className="about-item fade-in delay-2">
            <h4>Form</h4>
            <p>Where beauty meets function. Every curve serves a purpose, every line tells a story.</p>
          </div>
          <div className="about-item fade-in delay-3">
            <h4>Function</h4>
            <p>The raw pursuit of speed, efficiency, and the perfect gear shift.</p>
          </div>
          <div className="about-item fade-in delay-4">
            <h4>Feeling</h4>
            <p>The visceral connection between the asphalt and the driver.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer>
      <div className="container">
        <div>© 2026 VELOCITY. Curated for the enthusiast.</div>
        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Footer />
    </>
  )
}
