import { useEffect, useState } from 'react'

const slides = [
  {
    headline: '🌟 Welcome, Little Stars!',
    sub: 'A magical place where tiny hands paint big dreams — every day is a new adventure!',
    emoji: '🎨',
  },
  {
    headline: '🎵 Sing, Play & Explore!',
    sub: 'Jump, laugh, and discover the world around you with your new best friends at ERA!',
    emoji: '🎈',
  },
  {
    headline: '🌈 Grow With Us Every Day!',
    sub: 'Stories, songs, colours, and cuddles — learning is most fun when it feels like play!',
    emoji: '🦋',
  },
]

const floaties = ['⭐', '🌙', '🌸', '🎀', '🍭', '🎈', '🌻', '🦄']

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
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section
      id="home"
      style={{ height: '100vh', maxHeight: '100vh' }}
      className="relative flex flex-col overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/school-bg.png"
          alt="ERA International School Campus"
          className="w-full h-full object-cover"
        />
        {/* Cheerful purple-to-pink gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-purple-800/75 to-pink-900/85" />
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 hero-dots opacity-20" />
      </div>

      {/* Decorative blurred blobs */}
      <div className="absolute top-16 right-8 w-48 h-48 md:w-64 md:h-64 bg-yellow-300/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-16 left-4 w-56 h-56 md:w-72 md:h-72 bg-pink-400/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Floating emoji decorations — desktop only to save space */}
      {floaties.map((emoji, i) => (
        <span
          key={i}
          className="absolute hidden lg:block text-2xl select-none pointer-events-none"
          style={{
            top: `${12 + (i * 11) % 72}%`,
            left: i % 2 === 0 ? `${3 + (i * 5) % 8}%` : `${87 + (i * 2) % 9}%`,
            opacity: 0.45,
            animationDelay: `${i * 0.4}s`,
          }}
        >
          {emoji}
        </span>
      ))}

      {/* Main content — vertically centered in full 100vh */}
      <div className="relative flex-1 flex flex-col justify-center items-center text-center z-10 px-4 pt-16 pb-16">

        {/* Admissions Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-3 md:mb-4 transition-all duration-500 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
        >
          <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
          <span className="text-white/90 text-xs md:text-sm font-semibold tracking-wider uppercase">
            🎒 Admissions Open 2025-26 · Jr KG Welcome!
          </span>
        </div>

        {/* School Logo */}
        <div
          className={`flex justify-center mb-2 md:mb-3 transition-all duration-700 ${animating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
        >
          <img
            src="/era-logo.png"
            alt="ERA International School Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Slide Emoji */}
        <div
          className={`text-4xl sm:text-5xl mb-1 md:mb-2 transition-all duration-500 ${animating ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
        >
          {slide.emoji}
        </div>

        {/* Main Headline */}
        <h1
          className={`font-heading font-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white mb-2 md:mb-3 leading-tight text-shadow transition-all duration-500 ${animating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}
        >
          {slide.headline}
        </h1>

        {/* Motto pills */}
        <div
          className={`flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3 transition-all duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}
        >
          {['😄 Laugh', '📚 Learn', '🏆 Lead'].map((word, i) => (
            <span key={word} className="flex items-center gap-2 md:gap-3">
              <span className="bg-yellow-300/20 border border-yellow-300/40 text-yellow-200 font-heading font-bold text-xs md:text-sm px-3 py-1 rounded-full tracking-widest uppercase">
                {word}
              </span>
              {i < 2 && <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full hidden sm:block" />}
            </span>
          ))}
        </div>

        {/* Subheading */}
        <p
          className={`text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-4 md:mb-6 leading-relaxed transition-all duration-700 ${animating ? 'opacity-0' : 'opacity-100'}`}
        >
          {slide.sub}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-700 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
        >
          <a
            href="#contact"
            className="btn-primary text-sm md:text-base py-3 px-7 md:py-4 md:px-10 shadow-lg"
          >
            🎒 Join Our Jr KG Family
          </a>
          <a
            href="#about"
            className="btn-secondary text-sm md:text-base py-3 px-7 md:py-4 md:px-10"
          >
            🌈 Explore School
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-6 h-2 bg-yellow-300' : 'w-2 h-2 bg-white/40'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Wave bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
