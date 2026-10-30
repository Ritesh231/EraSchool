const galleryItems = [
  { emoji: '🎨', label: 'Art Day', tag: 'Art & Craft', color: 'from-pink-400 to-fuchsia-500', desc: 'Little artists at their best!' },
  { emoji: '🎵', label: 'Music Class', tag: 'Music', color: 'from-purple-400 to-violet-500', desc: 'Singing & rhythm fun' },
  { emoji: '🌳', label: 'Garden Play', tag: 'Outdoor', color: 'from-green-400 to-teal-500', desc: 'Exploring nature together' },
  { emoji: '📖', label: 'Story Time', tag: 'Stories', color: 'from-amber-400 to-orange-400', desc: 'Adventures in every book' },
  { emoji: '🎭', label: 'Drama Play', tag: 'Pretend Play', color: 'from-blue-400 to-cyan-500', desc: 'Dress-up & role play fun' },
  { emoji: '🎂', label: 'Birthday Bash', tag: 'Celebrations', color: 'from-rose-400 to-pink-500', desc: 'We celebrate every star!' },
  { emoji: '🏃', label: 'Sports Fiesta', tag: 'Outdoor', color: 'from-red-400 to-rose-500', desc: 'Fun races & team games' },
  { emoji: '🌈', label: 'Colour Day', tag: 'Celebrations', color: 'from-yellow-400 to-amber-500', desc: 'Rainbow of colours & joy' },
  { emoji: '🧁', label: 'Baking Fun', tag: 'Activities', color: 'from-emerald-400 to-green-600', desc: 'Little chefs in action' },
]

const tags = ['All', 'Art & Craft', 'Music', 'Outdoor', 'Stories', 'Pretend Play', 'Celebrations', 'Activities']

import { useState } from 'react'

export default function Gallery() {
  const [activeTag, setActiveTag] = useState('All')
  const filtered = activeTag === 'All' ? galleryItems : galleryItems.filter(g => g.tag === activeTag)

  return (
    <section id="gallery" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-era-yellow/20 text-era-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Our Happy Days</span>
          <h2 className="section-title">Life at ERA Jr KG 🎉</h2>
          <p className="section-subtitle">A peek into our world of laughter, art, music, and big adventures at ERA Junior KG!</p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTag === tag
                  ? 'bg-era-blue text-white shadow-lg shadow-blue-300 scale-105'
                  : 'bg-white text-gray-600 hover:bg-era-light border border-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className={`group relative rounded-2xl overflow-hidden shadow-md card-hover cursor-pointer ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Background */}
              <div className={`aspect-video bg-gradient-to-br ${item.color} flex flex-col items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 hero-dots opacity-20"></div>
                <div className="text-8xl mb-4 group-hover:scale-125 transition-transform duration-500 relative z-10">{item.emoji}</div>
                <div className="relative z-10 text-center">
                  <p className="text-white font-heading font-bold text-xl">{item.label}</p>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">See More 🌟</span>
                </div>
              </div>

              {/* Tag badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <button className="btn-primary">🎈 See All Our Happy Moments</button>
        </div>
      </div>
    </section>
  )
}
