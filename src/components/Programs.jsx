import { useState } from 'react'

const programs = [
  {
    level: 'Pre-Primary',
    emoji: '🌱',
    grades: 'Nursery – KG',
    age: 'Ages 3 – 5',
    color: 'from-pink-400 to-rose-500',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    description: 'A nurturing play-based environment that fosters curiosity, creativity, and social skills in our youngest learners.',
    features: ['Play-based Learning', 'Story Time', 'Art & Craft', 'Music & Dance', 'Outdoor Play', 'Social Skills'],
  },
  {
    level: 'Primary School',
    emoji: '📗',
    grades: 'Class I – V',
    age: 'Ages 6 – 10',
    color: 'from-blue-400 to-era-blue',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    description: 'Building strong academic foundations with activity-based learning, critical thinking, and character development.',
    features: ['CBSE Curriculum', 'Smart Classes', 'Science Labs', 'Language Skills', 'Mathematics', 'EVS Projects'],
  },
  {
    level: 'Middle School',
    emoji: '📘',
    grades: 'Class VI – VIII',
    age: 'Ages 11 – 13',
    color: 'from-indigo-400 to-purple-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    description: 'Deepening conceptual understanding with subject specialization, project-based learning, and leadership development.',
    features: ['Subject Labs', 'Coding & Robotics', 'Debate Club', 'Sports Teams', 'Art Studio', 'Community Service'],
  },
  {
    level: 'Secondary',
    emoji: '📙',
    grades: 'Class IX – X',
    age: 'Ages 14 – 15',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    description: 'Rigorous CBSE board preparation with expert faculty, regular mock tests, and comprehensive career guidance.',
    features: ['Board Prep', 'Mock Tests', 'Career Counseling', 'Advanced Labs', 'Olympiad Training', 'Study Skills'],
  },
  {
    level: 'Senior Secondary',
    emoji: '🎓',
    grades: 'Class XI – XII',
    age: 'Ages 16 – 17',
    color: 'from-green-400 to-era-green',
    bg: 'bg-green-50',
    border: 'border-green-200',
    description: 'Specialized streams in Science, Commerce & Humanities with college entrance coaching and placement guidance.',
    features: ['Science Stream', 'Commerce Stream', 'Humanities', 'JEE/NEET Prep', 'CA Foundation', 'University Guidance'],
  },
]

export default function Programs() {
  const [active, setActive] = useState(0)
  const prog = programs[active]

  return (
    <section id="programs" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-era-blue/10 text-era-blue font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Academic Programs</span>
          <h2 className="section-title">Our <span className="text-era-blue">Programs</span></h2>
          <p className="section-subtitle">Comprehensive education from Pre-Primary to Senior Secondary, tailored to each stage of growth.</p>
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
              <h4 className="font-heading font-bold text-era-dark text-xl mb-4">Program Overview</h4>
              <p className="text-gray-600 leading-relaxed text-lg">{prog.description}</p>
              <a href="#contact" className="inline-flex items-center gap-2 mt-6 bg-era-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-era-dark transition-colors duration-300">
                Enquire Now <span>→</span>
              </a>
            </div>
            <div>
              <h4 className="font-heading font-bold text-era-dark text-xl mb-4">Key Features</h4>
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
