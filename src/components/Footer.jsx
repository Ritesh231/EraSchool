export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-950 text-white overflow-hidden">
      {/* Top wave */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#030712"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/era-logo.png" alt="ERA Logo" className="w-14 h-14 object-contain drop-shadow-lg" />
              <div>
                <p className="font-heading font-bold text-lg leading-tight">ERA Jr KG</p>
                <p className="text-era-yellow text-xs tracking-widest uppercase">International School</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Nurturing little hearts and bright minds through love, laughter, and joyful play-based learning since 1999. 🌟
            </p>
            <div className="flex gap-2">
              {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
                <button key={i} className="w-9 h-9 rounded-lg bg-white/10 hover:bg-era-yellow hover:text-era-dark flex items-center justify-center text-sm transition-all duration-300 hover:scale-110" aria-label={`Social ${i}`}>
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'About Us', 'Programs', 'Facilities', 'Gallery', 'Contact Us', 'Admissions'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-era-yellow text-sm transition-colors duration-200 hover:pl-2 block">
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5 text-white">Our Programmes 🎈</h4>
            <ul className="space-y-2.5">
              {[
                '🌸 Nursery (Age 2.5–3.5)',
                '🌟 Junior KG (Age 3.5–4.5)',
                '🚀 Senior KG (Age 4.5–5.5)',
                '🎓 Class 1 (Age 6–7)',
                '🎓 Class 2 (Age 7–8)',
                '🎨 Art & Craft',
                '🎵 Music & Dance',
              ].map(prog => (
                <li key={prog}>
                  <a href="#programs" className="text-gray-400 hover:text-era-yellow text-sm transition-colors duration-200 hover:pl-2 block">
                    {prog}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5 text-white">Contact Us</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex gap-3">
                <span>📍</span>
                <span>123 Education Avenue,<br/>Knowledge Park, New Delhi – 110001</span>
              </div>
              <div className="flex gap-3">
                <span>📞</span>
                <a href="tel:+919876543210" className="hover:text-era-yellow transition-colors duration-200">+91 98765 43210</a>
              </div>
              <div className="flex gap-3">
                <span>📧</span>
                <a href="mailto:admissions@erainternational.edu.in" className="hover:text-era-yellow transition-colors duration-200 text-xs">admissions@erainternational.edu.in</a>
              </div>
              <div className="flex gap-3">
                <span>🕐</span>
                <span>Jr KG: 8:30 AM – 12:30 PM<br/>Office: Mon–Sat 9 AM–5 PM</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-white font-semibold text-sm mb-2">📬 Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-era-yellow transition-colors duration-200"
                />
                <button className="bg-era-yellow text-era-dark px-3 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 transition-colors duration-200">→</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {year} ERA International School. All Rights Reserved. | 😄 Laugh • 📚 Learn • 🏆 Lead
          </p>
          <div className="flex gap-4 text-gray-500 text-xs">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map(link => (
              <a key={link} href="#" className="hover:text-era-yellow transition-colors duration-200">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
