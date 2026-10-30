import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '', studentName: '', phone: '', email: '', grade: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-era-blue/10 text-era-blue font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Join Our Family</span>
          <h2 className="section-title">Enrol Your Little Star 🌟<br /><span className="text-era-blue">Today!</span></h2>
          <p className="section-subtitle">Take the first step toward the happiest school years of your child's life. Our friendly team is ready to help you! 🎒</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info card */}
            <div className="bg-gradient-to-br from-era-dark to-era-blue rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 hero-dots opacity-20"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/era-logo.png" alt="ERA Logo" className="w-14 h-14 object-contain drop-shadow-lg" />
                  <div>
                    <p className="font-heading font-bold text-xl">ERA Jr KG International School</p>
                    <p className="text-era-yellow text-sm">🎒 Admissions Open 2025-26</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: '📍', label: 'Address', value: '123 Education Avenue, Knowledge Park,\nNew Delhi – 110001, India' },
                    { icon: '📞', label: 'Phone', value: '+91 98765 43210\n+91 11 2345 6789' },
                    { icon: '📧', label: 'Email', value: 'admissions@erainternational.edu.in' },
                    { icon: '🕐', label: 'School Timings', value: 'Mon – Sat: 8:30 AM – 12:30 PM (Jr KG)\nOffice: 9:00 AM – 5:00 PM' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 glass rounded-xl p-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-era-yellow text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-white/80 text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick info badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {['🎨 Art & Craft', '🎵 Music & Dance', '🌳 Play Garden', '🍎 Healthy Snacks', '🚌 Safe Bus'].map((tag) => (
                    <span key={tag} className="bg-white/15 text-white text-xs px-3 py-1 rounded-full font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: '📘', label: 'Facebook', color: 'bg-blue-600' },
                { icon: '📸', label: 'Instagram', color: 'bg-gradient-to-br from-pink-500 to-purple-600' },
                { icon: '🐦', label: 'Twitter', color: 'bg-sky-500' },
                { icon: '▶️', label: 'YouTube', color: 'bg-red-600' },
              ].map((s, i) => (
                <button key={i} className={`${s.color} text-white flex-1 py-3 rounded-xl text-center text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300`} aria-label={s.label}>
                  {s.icon} {s.label}
                </button>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-era-light rounded-2xl h-48 flex items-center justify-center border-2 border-dashed border-era-blue/30 group hover:border-era-blue/60 transition-colors duration-300 cursor-pointer">
              <div className="text-center">
                <span className="text-4xl block mb-2">🗺️</span>
                <p className="text-era-blue font-semibold">View on Google Maps</p>
                <p className="text-gray-400 text-sm">123 Education Ave, New Delhi</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-7xl mb-4 animate-bounce-slow">🎉</div>
                <h3 className="font-heading font-bold text-2xl text-era-dark mb-3">Yay! Application Received! 🌟</h3>
                <p className="text-gray-500 mb-6">Thank you for choosing ERA Jr KG! Our friendly admissions team will call you within 24 hours. We can't wait to welcome your little star! 💛</p>
                <button onClick={() => setSubmitted(false)} className="btn-primary">Submit Another Enquiry</button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-2xl text-era-dark mb-1">🎒 Jr KG Admission Enquiry</h3>
                  <p className="text-gray-400 text-sm">Fill in the form and we'll get back to you with all the exciting details!</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Parent's Name *</label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-era-blue focus:ring-2 focus:ring-era-blue/20 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Child's Name *</label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                        placeholder="Your Child's Name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-era-blue focus:ring-2 focus:ring-era-blue/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 9876543210"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-era-blue focus:ring-2 focus:ring-era-blue/20 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Applying For *</label>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-era-blue focus:ring-2 focus:ring-era-blue/20 transition-all duration-200 bg-white"
                      >
                        <option value="">Select Class</option>
                        {['Nursery (Age 2.5–3.5)', 'Junior KG (Age 3.5–4.5)', 'Senior KG (Age 4.5–5.5)', 'Class 1', 'Class 2'].map(g => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="parent@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-era-blue focus:ring-2 focus:ring-era-blue/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message / Any Questions?</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Ask us anything about fees, timings, admission process, or what a typical day looks like for your little one..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-era-blue focus:ring-2 focus:ring-era-blue/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-era-blue text-white font-bold py-4 rounded-xl hover:bg-era-dark transition-all duration-300 hover:shadow-xl disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </>
                    ) : '🎒 Enrol My Little Star!'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
