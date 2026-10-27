const facilities = [
  {
    icon: '🖥️',
    title: 'Smart Classrooms',
    description: 'Digital boards, projectors, and AI-assisted learning tools in every classroom for interactive, engaging lessons.',
    color: 'from-blue-500 to-blue-700',
    highlights: ['Interactive Whiteboards', 'High-speed Wi-Fi', 'AI Learning Tools'],
  },
  {
    icon: '🔬',
    title: 'Science Laboratories',
    description: 'Fully equipped Physics, Chemistry, and Biology labs with modern instruments for hands-on experimentation.',
    color: 'from-green-500 to-green-700',
    highlights: ['Physics Lab', 'Chemistry Lab', 'Biology Lab'],
  },
  {
    icon: '💻',
    title: 'Computer Lab',
    description: 'State-of-the-art computer lab with latest hardware and software for coding, design, and digital literacy.',
    color: 'from-purple-500 to-purple-700',
    highlights: ['100+ Workstations', 'Coding Courses', 'Robotics Kit'],
  },
  {
    icon: '📚',
    title: 'Library & Resource Center',
    description: 'A vast collection of 20,000+ books, e-resources, journals and a dedicated reading lounge for students.',
    color: 'from-amber-500 to-orange-600',
    highlights: ['20,000+ Books', 'E-Library Access', 'Reading Lounge'],
  },
  {
    icon: '⚽',
    title: 'Sports Complex',
    description: 'Olympic-size grounds, indoor courts, and training facilities for cricket, football, basketball, badminton, and more.',
    color: 'from-red-500 to-rose-600',
    highlights: ['Cricket Ground', 'Basketball Court', 'Indoor Sports'],
  },
  {
    icon: '🎨',
    title: 'Arts & Culture Center',
    description: 'Dedicated spaces for fine arts, music, dance, drama, and pottery to nurture every student\'s creative talents.',
    color: 'from-pink-500 to-pink-700',
    highlights: ['Music Room', 'Dance Studio', 'Art Studio'],
  },
  {
    icon: '🍽️',
    title: 'Cafeteria',
    description: 'Hygienic, nutritious, and delicious meals served in a spacious dining hall with both indoor and outdoor seating.',
    color: 'from-teal-500 to-cyan-600',
    highlights: ['Healthy Menu', 'Hygienic Kitchen', '500+ Capacity'],
  },
  {
    icon: '🚌',
    title: 'Smart Transport',
    description: 'GPS-tracked, AC school buses with trained drivers and attendants covering all major routes of the city.',
    color: 'from-indigo-500 to-indigo-700',
    highlights: ['GPS Tracking', 'Live Parent App', '40+ Routes'],
  },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-era-green/10 text-era-green font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">World-Class Facilities</span>
          <h2 className="section-title">Everything Your Child<br /><span className="text-era-blue">Needs to Thrive</span></h2>
          <p className="section-subtitle">Our campus is designed to inspire learning, creativity, and well-being at every turn.</p>
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
        <div className="mt-16 bg-gradient-to-r from-era-yellow/20 via-white to-era-blue/10 rounded-3xl p-10 border border-era-yellow/30 text-center">
          <h3 className="font-heading font-bold text-3xl text-era-dark mb-3">Come Visit Our Campus</h3>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto">Experience our world-class facilities firsthand. Schedule a campus tour today and see why ERA is the best choice for your child's future.</p>
          <a href="#contact" className="btn-primary inline-block">Schedule a Campus Tour</a>
        </div>
      </div>
    </section>
  )
}
