const values = [
  { icon: '🧸', title: 'Play-Based Fun', text: 'Every lesson is a joyful adventure! Letters, numbers, colours and shapes through games, puzzles, rhymes, and hands-on discovery.' },
  { icon: '🎨', title: 'Creative Expression', text: 'Little artists love it here — painting, drawing, clay modelling, music, and dance are everyday celebrations of creativity.' },
  { icon: '🤝', title: 'Friendship & Kindness', text: 'We build warm hearts and great friendships. Social skills, sharing, and empathy form the heart of our Jr KG family.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-era-light/50 clip-diagonal -z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-era-light text-era-blue font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">About Us</span>
          <h2 className="section-title">Welcome to ERA Junior KG<br /><span className="text-era-blue">International School 🌈</span></h2>
          <p className="section-subtitle">
            A warm, happy place where little friends laugh, learn, and grow together every single day!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Story */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-era-dark to-era-blue rounded-3xl p-10 text-white shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-era-yellow/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-400/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <img src="/era-logo.png" alt="ERA Logo" className="w-16 h-16 object-contain drop-shadow-lg" />
                    <div>
                      <p className="font-heading font-bold text-2xl">ERA Jr KG</p>
                      <p className="text-era-yellow text-sm">International School</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Founded with the motto <strong className="text-era-yellow">"Laugh • Learn • Lead"</strong>, our Junior KG program is where tiny learners take their very first magical steps into school life. Every child is unique, special, and loved here! 💛
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Our play-based curriculum blends stories, songs, art, and outdoor adventures to nurture curiosity, creativity, and confidence in every little one. 🌟
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {[['Play-Based Learning', '🎮'], ['Stories & Songs', '📖'], ['Art & Craft', '🎨'], ['Safe & Caring', '💛']].map(([label, icon]) => (
                      <div key={label} className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
                        <span>{icon}</span>
                        <span className="text-sm font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-era-yellow rounded-2xl p-4 shadow-xl text-center">
                <p className="font-heading font-black text-3xl text-era-dark">25+</p>
                <p className="text-era-dark text-xs font-semibold">Years of<br/>Excellence</p>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="space-y-6 animate-slide-in-right">
            {[
              { icon: '🧸', title: 'Play-Based Fun', text: 'Every lesson is a joyful adventure! We explore letters, numbers, colours and shapes through games, puzzles, rhymes, and hands-on discovery.' },
              { icon: '🎨', title: 'Creative Expression', text: 'Little artists love it here — painting, drawing, clay modelling, music, and dance are everyday celebrations of creativity.' },
              { icon: '🤝', title: 'Friendship & Kindness', text: 'We build warm hearts and great friendships. Social skills, sharing, and empathy form the heart of our Jr KG family.' },
              { icon: '🌟', title: 'Safe & Nurturing', text: 'A warm, loving space with caring teachers ensures every child feels safe, seen, and celebrated — every single day.' },
            ].map((v, i) => (
              <div key={i} className="group flex gap-5 p-6 rounded-2xl border border-gray-100 card-hover bg-white shadow-sm">
                <div className="flex-shrink-0 w-14 h-14 bg-era-light rounded-xl flex items-center justify-center text-2xl group-hover:bg-era-blue group-hover:scale-110 transition-all duration-300">
                  <span>{v.icon}</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-era-dark text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose ERA Jr KG */}
        <div className="bg-gradient-to-r from-era-dark to-era-blue rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 hero-dots opacity-30"></div>
          <div className="relative text-center mb-8">
            <h3 className="font-heading font-bold text-3xl mb-2">Why ERA Jr KG is Special 🌈</h3>
            <p className="text-white/70">The perfect beginning for your little one's lifelong love of learning</p>
          </div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🎪', label: 'Fun Classrooms' },
              { icon: '👩‍🏫', label: 'Caring Teachers' },
              { icon: '🌱', label: 'Play Garden' },
              { icon: '🎵', label: 'Music & Dance' },
              { icon: '📚', label: 'Story Time' },
              { icon: '🎨', label: 'Art & Craft' },
              { icon: '🍎', label: 'Healthy Snacks' },
              { icon: '🚌', label: 'Safe Transport' },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-4 text-center group hover:bg-era-yellow/20 transition-all duration-300 cursor-default">
                <span className="text-3xl block mb-2 group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
