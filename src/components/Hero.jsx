import { useEffect, useState } from 'react'

const slides = [
  {
    headline: 'Laugh • Learn • Lead',
    sub: 'Nurturing tomorrow\'s leaders with world-class education and values-driven excellence.',
  },
  {
    headline: 'Excellence in Education',
    sub: 'A holistic learning environment where curiosity thrives and every child reaches their full potential.',
  },
  {
    headline: 'Building Future Leaders',
    sub: 'Empowering students with knowledge, character, and skills for a changing world.',
  },
]

const stats = [
  { value: '2000+', label: 'Students Enrolled' },
  { value: '150+', label: 'Expert Teachers' },
  { value: '25+', label: 'Years of Excellence' },
  { value: '98%', label: 'Success Rate' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % slides.length)
        setAnimating(false)
      }, 400)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/school-bg.png"
          alt="ERA International School Campus"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-era-dark/80 via-era-blue/70 to-era-dark/90"></div>
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 hero-dots opacity-20"></div>
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-era-yellow/15 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-5 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-32 text-center z-10">
        {/* Admissions Badge */}
        <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 transition-all duration-500 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <span className="w-2 h-2 bg-era-yellow rounded-full animate-pulse"></span>
          <span className="text-white/90 text-sm font-medium tracking-wider uppercase">Admissions Open 2025-26</span>
        </div>

        {/* School Logo */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ${animating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
          <img
            src="/era-logo.png"
            alt="ERA International School Logo"
            className="w-36 h-36 md:w-44 md:h-44 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Motto */}
        <div className={`flex items-center justify-center gap-4 mb-6 transition-all duration-500 ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {['Laugh', 'Learn', 'Lead'].map((word, i) => (
            <span key={word} className="flex items-center gap-4">
              <span className="text-era-yellow font-heading font-bold text-xl md:text-2xl tracking-widest uppercase">{word}</span>
              {i < 2 && <span className="w-2 h-2 bg-era-yellow rounded-full"></span>}
            </span>
          ))}
        </div>

        {/* Main Headline */}
        <h1 className={`font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight text-shadow transition-all duration-500 ${animating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
          ERA <span className="text-era-yellow">International</span><br />School
        </h1>

        {/* Subheading */}
        <p className={`text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 ${animating ? 'opacity-0' : 'opacity-100'}`}>
          {slide.sub}
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <a href="#contact" className="btn-primary text-base py-4 px-10 shadow-era-yellow/30 shadow-lg">
            Apply for Admission
          </a>
          <a href="#about" className="btn-secondary text-base py-4 px-10">
            Explore School
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-5 text-center group hover:bg-white/20 transition-all duration-300">
              <p className="font-heading font-black text-3xl md:text-4xl text-era-yellow mb-1 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
              <p className="text-white/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-2 bg-era-yellow' : 'w-2 h-2 bg-white/40'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Wave bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
