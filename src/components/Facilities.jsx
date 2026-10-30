const facilities = [
  {
    icon: '🎪',
    title: 'Bright Fun Classrooms',
    description: 'Colourful, airy classrooms filled with picture books, learning corners, sensory mats, and cozy reading nooks that make little ones feel at home.',
    color: 'from-blue-400 to-blue-600',
    highlights: ['Learning Corners', 'Cozy Reading Nook', 'Sensory Mat Area'],
  },
  {
    icon: '🎨',
    title: 'Art & Craft Studio',
    description: 'A magical messy play space where tiny hands create masterpieces with paints, clay, glitter, paper, and all things colourful and creative!',
    color: 'from-pink-400 to-fuchsia-500',
    highlights: ['Finger Painting', 'Clay Modelling', 'Collage & Craft'],
  },
  {
    icon: '🎵',
    title: 'Music & Dance Room',
    description: 'Tambourines, maracas, keyboards, and a dance floor — our music room is where little stars sing, tap their feet, and discover the joy of rhythm and movement.',
    color: 'from-purple-400 to-violet-600',
    highlights: ['Rhythm Instruments', 'Singing Sessions', 'Dance & Movement'],
  },
  {
    icon: '📚',
    title: 'Story & Library Corner',
    description: 'A bright, cheerful space overflowing with picture books, pop-up books, and big-picture storybooks that fire up imagination at every page turn!',
    color: 'from-amber-400 to-orange-500',
    highlights: ['500+ Picture Books', 'Daily Story Time', 'Puppet Corner'],
  },
  {
    icon: '🌳',
    title: 'Outdoor Play Garden',
    description: 'Swings, slides, sandpit, and open green space for running, climbing, and all the outdoor adventures that make childhood truly wonderful!',
    color: 'from-green-400 to-emerald-600',
    highlights: ['Swings & Slides', 'Sandpit', 'Tricycle Track'],
  },
  {
    icon: '🎭',
    title: 'Pretend Play Area',
    description: 'Little chefs, doctors, shopkeepers, and builders come alive here! Role-play builds language, social skills, and endless imagination.',
    color: 'from-rose-400 to-pink-600',
    highlights: ['Play Kitchen', 'Dress-Up Corner', 'Building Blocks'],
  },
  {
    icon: '🍎',
    title: 'Healthy Snack Corner',
    description: 'Nutritious, yummy, and child-friendly snacks served in our bright dining area. We teach healthy eating habits while making mealtimes fun!',
    color: 'from-teal-400 to-cyan-600',
    highlights: ['Healthy Menu', 'Hygienic Space', 'Good Food Habits'],
  },
  {
    icon: '🚌',
    title: 'Safe School Transport',
    description: 'GPS-tracked, air-conditioned buses with trained lady attendants and carefully vetted drivers, covering all major city routes safely.',
    color: 'from-indigo-400 to-indigo-700',
    highlights: ['GPS Tracked', 'Lady Attendant', 'Parent Live App'],
  },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-era-green/10 text-era-green font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Our Spaces</span>
          <h2 className="section-title">Magical Spaces for<br /><span className="text-era-blue">Little Explorers 🌈</span></h2>
          <p className="section-subtitle">Every corner of our campus is designed to spark curiosity, creativity, and big smiles in little hearts.</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden card-hover cursor-default"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${fac.color}`}></div>

              <div className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${fac.color} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {fac.icon}
                </div>

                <h3 className="font-heading font-bold text-era-dark text-lg mb-2 group-hover:text-era-blue transition-colors duration-300">{fac.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{fac.description}</p>

                {/* Highlights */}
                <div className="space-y-1.5">
                  {fac.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${fac.color}`}></span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${fac.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-era-yellow/20 via-white to-pink-100 rounded-3xl p-10 border border-era-yellow/30 text-center">
          <div className="text-4xl mb-3">🏫✨</div>
          <h3 className="font-heading font-bold text-3xl text-era-dark mb-3">Come See Our Happy School!</h3>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto">See our colourful classrooms, play garden, and magical spaces in person. Schedule a campus visit today and let your little one fall in love with ERA!</p>
          <a href="#contact" className="btn-primary inline-block">🎒 Schedule a Campus Visit</a>
        </div>
      </div>
    </section>
  )
}
