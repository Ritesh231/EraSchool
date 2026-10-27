const values = [
  { icon: '🎯', title: 'Our Mission', text: 'To provide holistic, world-class education that nurtures intellectual curiosity, creativity, and character in every student.' },
  { icon: '🌟', title: 'Our Vision', text: 'To be a globally recognized institution that shapes compassionate, confident, and competent leaders for the 21st century.' },
  { icon: '💎', title: 'Our Values', text: 'Integrity, excellence, inclusivity, and innovation form the cornerstone of everything we do at ERA International School.' },
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
          <h2 className="section-title">Welcome to ERA<br /><span className="text-era-blue">International School</span></h2>
          <p className="section-subtitle">
            Established with a vision to transform education, ERA International School has been a beacon of academic excellence and holistic development for over two decades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Story */}
          <div className="animate-slide-in-left">
            <div className="relative">
              {/* Shield badge graphic */}
              <div className="relative bg-gradient-to-br from-era-dark to-era-blue rounded-3xl p-10 text-white shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-era-yellow/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-era-green/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <img src="/era-logo.png" alt="ERA Logo" className="w-16 h-16 object-contain drop-shadow-lg" />
                    <div>
                      <p className="font-heading font-bold text-2xl">ERA</p>
                      <p className="text-era-yellow text-sm">International School</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Founded with the motto <strong className="text-era-yellow">"Laugh • Learn • Lead"</strong>, ERA International School has been shaping young minds since its inception. We believe every child is unique and deserves personalized attention.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Our CBSE-affiliated curriculum blends rigorous academics with co-curricular excellence, ensuring students are prepared for both higher education and life's challenges.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {[['CBSE Affiliated', '✅'], ['Smart Classrooms', '🖥️'], ['Sports Academy', '⚽'], ['International Exposure', '🌍']].map(([label, icon]) => (
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
            {values.map((v, i) => (
              <div key={i} className="group flex gap-5 p-6 rounded-2xl border border-gray-100 card-hover bg-white shadow-sm">
                <div className="flex-shrink-0 w-14 h-14 bg-era-light rounded-xl flex items-center justify-center text-2xl group-hover:bg-era-blue group-hover:scale-110 transition-all duration-300">
                  <span className="group-hover:grayscale-0">{v.icon}</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-era-dark text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose ERA */}
        <div className="bg-gradient-to-r from-era-dark to-era-blue rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 hero-dots opacity-30"></div>
          <div className="relative text-center mb-8">
            <h3 className="font-heading font-bold text-3xl mb-2">Why Choose ERA International School?</h3>
            <p className="text-white/70">The perfect blend of tradition, innovation, and global standards</p>
          </div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '📚', label: 'CBSE Curriculum' },
              { icon: '🧑‍🏫', label: 'Expert Faculty' },
              { icon: '🏆', label: 'Award Winning' },
              { icon: '🌱', label: 'Value Education' },
              { icon: '🔬', label: 'Modern Labs' },
              { icon: '🎨', label: 'Arts & Culture' },
              { icon: '⚽', label: 'Sports Excellence' },
              { icon: '💻', label: 'Digital Learning' },
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
