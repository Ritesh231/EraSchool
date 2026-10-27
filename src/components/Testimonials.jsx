const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of Class VIII Student',
    avatar: 'PS',
    color: 'from-pink-400 to-rose-500',
    text: 'ERA International School has been a transformative experience for my daughter. The teachers are incredibly dedicated, and the school\'s holistic approach has made her more confident and curious.',
    rating: 5,
  },
  {
    name: 'Rahul Mehta',
    role: 'Alumni – Batch 2022',
    avatar: 'RM',
    color: 'from-blue-400 to-era-blue',
    text: 'My years at ERA shaped who I am today. The faculty pushed me to achieve my best, and the values instilled here helped me crack IIT JEE. Forever grateful to ERA!',
    rating: 5,
  },
  {
    name: 'Sunita Gupta',
    role: 'Parent of Class XI Student',
    avatar: 'SG',
    color: 'from-purple-400 to-purple-600',
    text: 'The school\'s infrastructure and teaching quality are excellent. My son has shown remarkable improvement in both academics and extra-curricular activities since joining ERA.',
    rating: 5,
  },
  {
    name: 'Aditya Patel',
    role: 'Class XII Student',
    avatar: 'AP',
    color: 'from-green-400 to-era-green',
    text: 'ERA gives us a perfect balance of studies and fun. The teachers are supportive and the facilities are amazing. I feel prepared for whatever comes next!',
    rating: 5,
  },
  {
    name: 'Meena Verma',
    role: 'Parent of Class III Student',
    avatar: 'MV',
    color: 'from-amber-400 to-orange-500',
    text: 'The pre-primary and primary section is exceptional. My child absolutely loves school – the teachers make learning so fun and engaging. Best decision we made!',
    rating: 5,
  },
  {
    name: 'Dr. Vikram Singh',
    role: 'Parent – IIT Graduate',
    avatar: 'VS',
    color: 'from-teal-400 to-cyan-600',
    text: 'As a technical professional, I value quality education greatly. ERA\'s STEM programs and smart classrooms are truly world-class. My daughter thrives here every day.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-era-dark via-era-blue to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 hero-dots opacity-20"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-era-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-era-green/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-era-yellow/20 text-era-yellow font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Testimonials</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">What Our Community<br /><span className="text-era-yellow">Says About Us</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Thousands of families trust ERA International School for their children's bright futures.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass rounded-2xl p-6 group hover:bg-white/20 transition-all duration-300 card-hover">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-era-yellow text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 leading-relaxed mb-6 text-sm italic">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat row */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
          {[
            { value: '4.9/5', label: 'Parent Rating' },
            { value: '5000+', label: 'Happy Families' },
            { value: '100%', label: 'Recommend Us' },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <p className="font-heading font-black text-3xl text-era-yellow">{s.value}</p>
              <p className="text-white/60 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
