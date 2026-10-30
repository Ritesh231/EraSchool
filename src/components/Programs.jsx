import { useState } from 'react'

const programs = [
  {
    level: 'Nursery',
    emoji: '🌸',
    grades: 'Nursery (Pre-KG)',
    age: 'Ages 2.5 – 3.5',
    color: 'from-pink-400 to-rose-500',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    description: 'A gentle, loving first step into school life! We welcome our tiniest learners with songs, colours, and warm cuddles as they discover the joy of being together.',
    features: ['Sensory Play', 'Nursery Rhymes', 'Finger Painting', 'Free Play', 'Circle Time', 'Storytelling'],
  },
  {
    level: 'Junior KG',
    emoji: '🌟',
    grades: 'Junior KG',
    age: 'Ages 3.5 – 4.5',
    color: 'from-yellow-400 to-orange-400',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    description: 'Our star programme! Jr KG is packed with fun — alphabet adventures, number games, art explosions, music, dance, and the best friends they will make for life!',
    features: ['Alphabet Fun', 'Number Play', 'Art & Craft', 'Music & Dance', 'Outdoor Games', 'Show & Tell'],
  },
  {
    level: 'Senior KG',
    emoji: '🚀',
    grades: 'Senior KG',
    age: 'Ages 4.5 – 5.5',
    color: 'from-blue-400 to-indigo-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    description: 'Getting ready to be big school kids! Sr KG builds reading, writing, and counting skills through exciting activities, projects, and creative storytelling adventures.',
    features: ['Early Reading', 'Writing Skills', 'Counting Fun', 'Science Exploration', 'Drama & Role Play', 'Nature Walks'],
  },
  {
    level: 'Class 1 & 2',
    emoji: '🎓',
    grades: 'Class I – II',
    age: 'Ages 6 – 7',
    color: 'from-green-400 to-teal-500',
    bg: 'bg-green-50',
    border: 'border-green-200',
    description: 'The exciting leap to primary school! Class 1 & 2 continue our hands-on, activity-based approach building strong foundations in English, Maths, and Environmental Studies.',
    features: ['Reading & Writing', 'Maths Concepts', 'EVS Activities', 'Arts & Crafts', 'Physical Education', 'Group Projects'],
  },
]

export default function Programs() {
  const [active, setActive] = useState(1)
  const prog = programs[active]

  return (
    <section id="programs" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-era-blue/10 text-era-blue font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Our Programmes</span>
          <h2 className="section-title">Learning That Feels Like <span className="text-era-blue">Play! 🎈</span></h2>
          <p className="section-subtitle">From tiny Nursery tots to Class 2 superstars — every step is filled with joy and discovery.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {programs.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                active === i
                  ? 'bg-era-blue text-white shadow-lg shadow-blue-300 scale-105'
                  : 'bg-white text-gray-600 hover:bg-era-light border border-gray-200'
              }`}
            >
              <span>{p.emoji}</span> {p.level}
            </button>
          ))}
        </div>

        {/* Active Program Card */}
        <div className={`rounded-3xl overflow-hidden shadow-2xl ${prog.bg} border ${prog.border}`}>
          <div className={`bg-gradient-to-r ${prog.color} p-10 text-white`}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="text-6xl">{prog.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="font-heading font-bold text-4xl">{prog.level}</h3>
                </div>
                <div className="flex flex-wrap gap-4 text-white/90">
                  <span className="bg-white/20 rounded-full px-4 py-1 text-sm font-medium">📚 {prog.grades}</span>
                  <span className="bg-white/20 rounded-full px-4 py-1 text-sm font-medium">👦 {prog.age}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-heading font-bold text-era-dark text-xl mb-4">About This Programme</h4>
              <p className="text-gray-600 leading-relaxed text-lg">{prog.description}</p>
              <a href="#contact" className="inline-flex items-center gap-2 mt-6 bg-era-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-era-dark transition-colors duration-300">
                🎒 Enquire Now <span>→</span>
              </a>
            </div>
            <div>
              <h4 className="font-heading font-bold text-era-dark text-xl mb-4">What We Learn & Do 🌟</h4>
              <div className="grid grid-cols-2 gap-3">
                {prog.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${prog.color}`}></div>
                    <span className="text-gray-700 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
