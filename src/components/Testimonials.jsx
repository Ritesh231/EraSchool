const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of Jr KG Student',
    avatar: 'PS',
    color: 'from-pink-400 to-rose-500',
    text: 'My daughter absolutely loves coming to school every day! The teachers are so warm and patient. ERA Jr KG has made her confident, expressive, and she has so many little friends already. Best decision ever!',
    rating: 5,
  },
  {
    name: 'Rahul Mehta',
    role: 'Parent of Nursery Student',
    avatar: 'RM',
    color: 'from-blue-400 to-era-blue',
    text: 'My son used to cry every morning before school — but from day one at ERA, he couldn\'t wait to go back! The welcoming environment and beautiful classrooms made all the difference. Truly a home away from home.',
    rating: 5,
  },
  {
    name: 'Sunita Gupta',
    role: 'Parent of Sr KG Student',
    avatar: 'SG',
    color: 'from-purple-400 to-purple-600',
    text: 'The way ERA integrates art, music, stories, and play into learning is incredible. My daughter can now count, identify shapes, and even read simple words — and she thinks it\'s all just fun! Outstanding teachers.',
    rating: 5,
  },
  {
    name: 'Aditya Patel',
    role: 'Parent of Jr KG Student',
    avatar: 'AP',
    color: 'from-green-400 to-era-green',
    text: 'ERA Jr KG is exactly what we were looking for — a place that focuses on the whole child, not just academics. My son comes home every day with stories, crafts, and the biggest smile. Truly remarkable.',
    rating: 5,
  },
  {
    name: 'Meena Verma',
    role: 'Parent of Nursery Student',
    avatar: 'MV',
    color: 'from-amber-400 to-orange-500',
    text: 'I was nervous about sending my little one to school so early, but the ERA team put us completely at ease. The safety, care, and love they show every child is extraordinary. My baby is thriving!',
    rating: 5,
  },
  {
    name: 'Dr. Vikram Singh',
    role: 'Parent of Jr KG Student',
    avatar: 'VS',
    color: 'from-teal-400 to-cyan-600',
    text: 'As a parent, I cannot ask for more. ERA gives our children a safe, stimulating, and joyful environment. The outdoor play area, music sessions, and art studio are simply wonderful. Highly recommend!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-era-dark via-era-blue to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 hero-dots opacity-20"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-era-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-era-yellow/20 text-era-yellow font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Happy Families</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">What Our Little Stars'<br /><span className="text-era-yellow">Parents Say 💛</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Hundreds of happy families trust ERA Jr KG for their little one's first magical school adventure.</p>
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
            { value: '4.9/5', label: 'Parent Rating ⭐' },
            { value: '500+', label: 'Happy Families 👨‍👩‍👧' },
            { value: '100%', label: 'Love ERA 💛' },
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
