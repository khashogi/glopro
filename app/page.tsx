import Link from 'next/link'
import Image from 'next/image'
import { FiCheckCircle, FiCloud, FiHeart, FiUsers, FiStar, FiCalendar } from 'react-icons/fi'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-glopro/10 via-dark/5 to-background py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
                Premium Car Wash,
                <span className="text-glopro"> Desert-Smart</span>
              </h1>
              <p className="text-xl text-neutral-light mb-4 font-semibold">
                Make your car glow, byPros
              </p>
              <p className="text-lg text-neutral-light mb-8">
                Experience Abu Dhabi's finest car detailing service. Weather-aware scheduling, transparent service, and trusted cleaners at your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking" className="btn-primary text-center">
                  Book Your First Wash
                </Link>
                <Link href="/services" className="btn-secondary text-center">
                  View Services
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 mt-8 text-sm text-neutral-light">
                <div className="flex items-center space-x-1">
                  <FiStar className="text-glopro" />
                  <span>4.9 Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FiUsers className="text-glopro" />
                  <span>500+ Happy Customers</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] rounded-card overflow-hidden shadow-card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-glopro/20 to-dark/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-card">
                    <span className="text-6xl">🚗</span>
                  </div>
                  <p className="text-dark font-medium">Hero Image Placeholder</p>
                  <p className="text-sm text-neutral-light">Luxury car being hand-washed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Choose GloPro?
            </h2>
            <p className="text-lg text-neutral-light max-w-2xl mx-auto">
              We combine artisanal craftsmanship with smart technology designed for desert living.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-glopro/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart className="text-glopro text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">
                Professional Touch
              </h3>
              <p className="text-neutral-light">
                Skilled detailers hand-wash every inch of your vehicle with care and precision. No automated brushes damaging your paint.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-glopro/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCloud className="text-glopro text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">
                Weather-Smart Scheduling
              </h3>
              <p className="text-neutral-light">
                Our app monitors sandstorm forecasts and proactively suggests reschedules so your car stays pristine longer.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-glopro/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheckCircle className="text-glopro text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">
                Live Service Updates
              </h3>
              <p className="text-neutral-light">
                Watch your wash in real-time with checkpoint photos at every stage. Total transparency, total trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-light">
              From quick rinses to complete detailing transformations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card">
              <div className="relative h-48 bg-gradient-to-br from-glopro/10 to-dark/10 rounded-button mb-4 flex items-center justify-center">
                <span className="text-6xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">
                Glo Essential
              </h3>
              <p className="text-neutral-light text-sm mb-4">
                Exterior hand wash, wheel cleaning, tire shine, interior vacuum
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-dark">AED 150</span>
                <span className="text-sm text-neutral-light">45 minutes</span>
              </div>
              <Link href="/services" className="btn-primary w-full text-center">
                Book Now
              </Link>
            </div>

            {/* Service 2 */}
            <div className="card border-2 border-glopro relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-glopro text-white text-xs font-semibold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="relative h-48 bg-gradient-to-br from-glopro/10 to-dark/10 rounded-button mb-4 flex items-center justify-center">
                <span className="text-6xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">
                Glo Premium
              </h3>
              <p className="text-neutral-light text-sm mb-4">
                Hand wash, clay bar, hand wax, deep interior clean, leather conditioning
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-dark">AED 350</span>
                <span className="text-sm text-neutral-light">2 hours</span>
              </div>
              <Link href="/services" className="btn-primary w-full text-center">
                Book Now
              </Link>
            </div>

            {/* Service 3 */}
            <div className="card">
              <div className="relative h-48 bg-gradient-to-br from-glopro/10 to-dark/10 rounded-button mb-4 flex items-center justify-center">
                <span className="text-6xl">🏜️</span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">
                Desert Rescue
              </h3>
              <p className="text-neutral-light text-sm mb-4">
                Post-sandstorm rescue with thorough exterior wash and undercarriage rinse
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-dark">AED 220</span>
                <span className="text-sm text-neutral-light">1 hour</span>
              </div>
              <Link href="/services" className="btn-primary w-full text-center">
                Book Now
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              How It Works
            </h2>
            <p className="text-lg text-neutral-light">
              Premium car care in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-glopro text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">
                Book Your Service
              </h3>
              <p className="text-neutral-light">
                Choose your service, select a time slot, and enter your location. Takes less than 2 minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-glopro text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">
                We Come to You
              </h3>
              <p className="text-neutral-light">
                Your trusted cleaner arrives with professional equipment. Watch progress with live photo updates.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-glopro text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">
                Enjoy Your Clean Car
              </h3>
              <p className="text-neutral-light">
                Drive away with a spotless vehicle and earn points toward your next wash. It's that simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-glopro to-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for a Pristine Ride?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of Abu Dhabi drivers who trust GloPro for premium car care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="bg-white text-glopro px-8 py-4 rounded-button font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]">
              Book Your First Wash
            </Link>
            <Link href="/subscription" className="border-2 border-white text-white px-8 py-4 rounded-button font-semibold hover:bg-white hover:text-glopro transition-all duration-200">
              View Subscription Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
