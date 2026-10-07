import React, { useState, useEffect } from 'react';
import { Leaf, Droplets, Sparkles, Phone, Mail, MapPin, Instagram, Facebook, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';

// --- DATA ---
const products = [
  {
    id: 1,
    name: "Olive & Aloe Haven",
    quality: "Deeply moisturizing and soothing for sensitive skin. Rich in antioxidants and Vitamin E.",
    mfg: "Aug 2026",
    exp: "Aug 2028",
    gradient: "from-emerald-100 to-emerald-300",
    icon: <Leaf className="w-12 h-12 text-emerald-700 opacity-70" />
  },
  {
    id: 2,
    name: "Lavender Almond Dream",
    quality: "Calming aroma with gentle almond exfoliation. Perfect for evening relaxation and stress relief.",
    mfg: "Jul 2026",
    exp: "Jul 2028",
    gradient: "from-purple-100 to-purple-300",
    icon: <Sparkles className="w-12 h-12 text-purple-700 opacity-70" />
  },
  {
    id: 3,
    name: "Coconut Citrus Burst",
    quality: "Energizing and refreshing. Provides a deep, invigorating cleanse without stripping natural oils.",
    mfg: "Aug 2026",
    exp: "Aug 2028",
    gradient: "from-yellow-100 to-amber-300",
    icon: <Droplets className="w-12 h-12 text-amber-700 opacity-70" />
  },
  {
    id: 4,
    name: "Shea & Cocoa Butter Bliss",
    quality: "Ultra-rich hydration specifically formulated for dry, flaky skin. Leaves a silky smooth finish.",
    mfg: "Jun 2026",
    exp: "Jun 2028",
    gradient: "from-orange-100 to-orange-300",
    icon: <ShieldCheck className="w-12 h-12 text-orange-700 opacity-70" />
  },
  {
    id: 5,
    name: "Tea Tree & Neem Purify",
    quality: "Naturally antibacterial and antifungal. Excellent for acne-prone skin and deep pore cleansing.",
    mfg: "Aug 2026",
    exp: "Aug 2027",
    gradient: "from-teal-100 to-teal-300",
    icon: <Leaf className="w-12 h-12 text-teal-700 opacity-70" />
  },
  {
    id: 6,
    name: "Turmeric Sandalwood Glow",
    quality: "Brightening and anti-inflammatory. Helps even out skin tone and restores natural radiance.",
    mfg: "Jul 2026",
    exp: "Jul 2027",
    gradient: "from-amber-200 to-yellow-500",
    icon: <Sparkles className="w-12 h-12 text-yellow-800 opacity-70" />
  },
  {
    id: 7,
    name: "Rosehip & Hibiscus Renew",
    quality: "Packed with Vitamin C. Promotes cell turnover and provides powerful anti-aging benefits.",
    mfg: "Aug 2026",
    exp: "Aug 2028",
    gradient: "from-rose-100 to-rose-300",
    icon: <Leaf className="w-12 h-12 text-rose-700 opacity-70" />
  },
  {
    id: 8,
    name: "Oatmeal Honey Comfort",
    quality: "Incredibly soothing for irritated skin. Acts as a natural humectant to lock in moisture.",
    mfg: "May 2026",
    exp: "May 2028",
    gradient: "from-stone-200 to-stone-400",
    icon: <Droplets className="w-12 h-12 text-stone-700 opacity-70" />
  },
  {
    id: 9,
    name: "Charcoal & Argan Detox",
    quality: "Draws out impurities and toxins while pure Argan oil ensures the skin remains nourished.",
    mfg: "Aug 2026",
    exp: "Aug 2028",
    gradient: "from-gray-300 to-gray-500",
    icon: <ShieldCheck className="w-12 h-12 text-gray-800 opacity-70" />
  },
  {
    id: 10,
    name: "Hemp Seed & Green Tea Zen",
    quality: "Antioxidant-rich and balancing. Regulates oil production while calming redness and inflammation.",
    mfg: "Jul 2026",
    exp: "Jul 2028",
    gradient: "from-green-200 to-emerald-400",
    icon: <Leaf className="w-12 h-12 text-green-800 opacity-70" />
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-stone-800 bg-stone-50 min-h-screen">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <Droplets className="w-8 h-8 text-emerald-700" />
              <span className={`font-serif text-2xl font-bold ${isScrolled ? 'text-emerald-900' : 'text-emerald-950'}`}>
                Aura Botanicals
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('home')} className="font-medium hover:text-emerald-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="font-medium hover:text-emerald-600 transition-colors">Our Story</button>
              <button onClick={() => scrollToSection('products')} className="font-medium hover:text-emerald-600 transition-colors">Collections</button>
              <button onClick={() => scrollToSection('contact')} className="bg-emerald-800 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-md">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-emerald-900">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-stone-100">
            <div className="flex flex-col px-4 pt-2 pb-6 space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 border-b border-stone-100">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 border-b border-stone-100">Our Story</button>
              <button onClick={() => scrollToSection('products')} className="text-left py-2 border-b border-stone-100">Collections</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-emerald-700 font-bold">Contact Us</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-stone-900/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100/90 text-emerald-800 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
            100% PURE & NATURAL
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-tight">
            The Essence of <br/><span className="text-emerald-300 italic">Nature's Oils</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Handcrafted luxury soaps enriched with premium botanical oils. Elevate your daily ritual with our pure, skin-nourishing formulations.
          </p>
          <button 
            onClick={() => scrollToSection('products')}
            className="group inline-flex items-center bg-white text-emerald-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
          >
            Explore Our Soaps
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-stone-200 rounded-2xl bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1547484253-90cbcc5df3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}></div>
                  <div className="h-64 bg-stone-200 rounded-2xl bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}></div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-64 bg-stone-200 rounded-2xl bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1552046122-33181715ce8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}></div>
                  <div className="h-48 bg-stone-200 rounded-2xl bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}></div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
                Crafted with patience, enriched by nature.
              </h3>
              <p className="text-lg text-stone-600">
                At Aura Botanicals, we believe that skincare should be a therapeutic ritual. Our factory specializes exclusively in cold-pressed, oil-based soaps. We source the finest olive, coconut, almond, and essential oils globally to create bars that cleanse without compromising your skin's natural barrier.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <Leaf className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">100% Vegan</h4>
                    <p className="text-sm text-stone-500">Cruelty-free and plant-based ingredients.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Droplets className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Rich Oil Base</h4>
                    <p className="text-sm text-stone-500">Cold-pressed oils for maximum nourishment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-2">Our Collection</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
              The Artisan Selection
            </h3>
            <p className="text-lg text-stone-600">
              Discover our core collection of 10 uniquely formulated luxury soaps. Every bar is carefully cured to ensure a long-lasting, creamy lather.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full transform hover:-translate-y-2"
              >
                {/* Visual Representation (Gradient + Icon instead of breaking images) */}
                <div className={`h-48 w-full bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="transform group-hover:scale-110 transition-transform duration-500">
                    {product.icon}
                  </div>
                  
                  {/* Floating badging */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-700 shadow-sm">
                    No. {product.id}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-serif font-bold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-stone-600 text-sm mb-6 flex-grow leading-relaxed">
                    {product.quality}
                  </p>
                  
                  {/* Dates */}
                  <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-xs text-stone-500 font-medium">
                    <div className="flex flex-col">
                      <span className="uppercase text-[10px] tracking-wider text-stone-400">Mfg Date</span>
                      <span>{product.mfg}</span>
                    </div>
                    <div className="h-6 w-px bg-stone-200"></div>
                    <div className="flex flex-col text-right">
                      <span className="uppercase text-[10px] tracking-wider text-stone-400">Best Before</span>
                      <span className="text-emerald-700">{product.exp}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
          <Leaf className="w-96 h-96 text-white" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to upgrade your skincare ritual?
          </h2>
          <p className="text-emerald-100 mb-10 text-lg">
            We supply both individual artisanal lovers and wholesale boutique clients. 
          </p>
          <button onClick={() => scrollToSection('contact')} className="bg-white text-emerald-950 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-[3rem] p-8 md:p-16 border border-stone-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                  Let's Connect
                </h2>
                <p className="text-stone-600 mb-12 text-lg">
                  Interested in bulk orders, becoming a distributor, or just have a question about our oils? Reach out to our team.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-4 rounded-full shadow-sm">
                      <MapPin className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1">Factory Location</h4>
                      <p className="text-stone-600">123 Artisan Boulevard,<br/>Industrial Estate, City 45678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-4 rounded-full shadow-sm">
                      <Phone className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1">Phone</h4>
                      <p className="text-stone-600">+1 (555) 123-4567<br/>Mon-Fri, 9am - 5pm</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-4 rounded-full shadow-sm">
                      <Mail className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1">Email</h4>
                      <p className="text-stone-600">hello@aurabotanicals.com<br/>sales@aurabotanicals.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-emerald-800 text-white font-bold py-4 rounded-xl hover:bg-emerald-900 transition-colors shadow-md">
                    Send Message
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Droplets className="w-6 h-6 text-emerald-500" />
              <span className="font-serif text-xl font-bold text-white">
                Aura Botanicals
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-emerald-400 transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Facebook className="w-6 h-6" /></a>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2026 Aura Botanicals Oil Soap Factory. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}