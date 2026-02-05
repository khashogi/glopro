import Link from 'next/link'
import { FiSmartphone, FiMapPin, FiClock, FiCheckCircle, FiCamera, FiStar } from 'react-icons/fi'

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-coral/10 via-teal/5 to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral mb-6">
              How GloPro Works
            </h1>
            <p className="text-xl text-neutral-light">
              Premium car care. Here's what makes us different.
            </p>
          </div>
        </div>
      </section>

      {/* Main Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-coral text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                  <h2 className="text-3xl font-bold text-neutral">
                    Book in Under 2 Minutes
                  </h2>
                </div>
                <p className="text-lg text-neutral-light mb-6">
                  Choose your service, pick a time slot that works for you, and enter your location. Our smart booking system shows real-time availability and even suggests optimal times based on weather forecasts.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="text-coral mt-1 flex-shrink-0" />
                    <p className="text-neutral-light">
                      <strong className="text-neutral">No commitment:</strong> Book one-time or subscribe for savings
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="text-coral mt-1 flex-shrink-0" />
                    <p className="text-neutral-light">
                      <strong className="text-neutral">Weather-smart:</strong> Get alerts if sandstorms are forecasted
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="text-coral mt-1 flex-shrink-0" />
                    <p className="text-neutral-light">
                      <strong className="text-neutral">Heatwave discounts:</strong> Save up to 15% on early morning slots
                    </p>
                  </div>
                </div>
              </div>
              <div className="card bg-white">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-coral/5 rounded-button">
                    <FiSmartphone className="text-coral text-3xl" />
                    <div>
                      <p className="font-semibold text-neutral">Mobile-First Design</p>
                      <p className="text-sm text-neutral-light">Book from anywhere, anytime</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-teal/5 rounded-button">
                    <FiMapPin className="text-teal text-3xl" />
                    <div>
                      <p className="font-semibold text-neutral">Home or Office</p>
                      <p className="text-sm text-neutral-light">We come to your location</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-coral/5 rounded-button">
                    <FiClock className="text-coral text-3xl" />
                    <div>
                      <p className="font-semibold text-neutral">Flexible Scheduling</p>
                      <p className="text-sm text-neutral-light">6 AM - 8 PM, 7 days a week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="card bg-white">
                  <h3 className="text-xl font-semibold text-neutral mb-4">Meet Your Cleaner</h3>
                  <div className="bg-gray-50 rounded-button p-6 text-center mb-4">
                    <div className="text-6xl mb-3">👨</div>
                    <p className="font-semibold text-neutral mb-1">Ahmed</p>
                    <div className="flex items-center justify-center space-x-1 text-sm text-neutral-light mb-2">
                      <FiStar className="text-coral" />
                      <span>4.9 rating • 150+ washes</span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="bg-coral/10 text-coral text-xs px-3 py-1 rounded-full">
                        Luxury Vehicles Expert
                      </span>
                      <span className="bg-teal/10 text-teal text-xs px-3 py-1 rounded-full">
                        7 years experience
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-neutral-light">
                    <p>✓ Background checked</p>
                    <p>✓ Professionally trained</p>
                    <p>✓ Fully insured</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                  <h2 className="text-3xl font-bold text-neutral">
                    Your Cleaner Arrives
                  </h2>
                </div>
                <p className="text-lg text-neutral-light mb-6">
                  A skilled, background-checked detailer arrives at your location with professional equipment. You'll receive a notification when they're on the way, and you can track their arrival in real-time.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="text-teal mt-1 flex-shrink-0" />
                    <p className="text-neutral-light">
                      <strong className="text-neutral">Professional equipment:</strong> We bring everything needed
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="text-teal mt-1 flex-shrink-0" />
                    <p className="text-neutral-light">
                      <strong className="text-neutral">Favorite your cleaner:</strong> Book the same person next time
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="text-teal mt-1 flex-shrink-0" />
                    <p className="text-neutral-light">
                      <strong className="text-neutral">Direct messaging:</strong> Chat with your cleaner if needed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-coral text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                  <h2 className="text-3xl font-bold text-neutral">
                    Watch Your Wash Live
                  </h2>
                </div>
                <p className="text-lg text-neutral-light mb-6">
                  This is where we're different. Your cleaner uploads real-time checkpoint photos at every major stage of the service. No mystery about what's happening to your car - total transparency, total trust.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <FiCamera className="text-coral mt-1 flex-shrink-0" />
                    <p className="text-neutral-light">
                      <strong className="text-neutral">4 checkpoint photos:</strong> Before, interior progress, exterior treatment, final result
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCamera className="text-coral mt-1 flex-shrink-0" />
                    <p className="text-neutral-light">
                      <strong className="text-neutral">Push notifications:</strong> Get notified as each photo is uploaded
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCamera className="text-coral mt-1 flex-shrink-0" />
                    <p className="text-neutral-light">
                      <strong className="text-neutral">Photo archive:</strong> Access all photos in your booking history
                    </p>
                  </div>
                </div>
              </div>
              <div className="card bg-white">
                <h3 className="text-lg font-semibold text-neutral mb-4">Live Photo Timeline</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-coral pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-neutral text-sm">Before Service</p>
                      <span className="text-xs text-neutral-light">10:00 AM</span>
                    </div>
                    <div className="bg-gray-100 rounded-button h-32 flex items-center justify-center text-4xl">
                      📷
                    </div>
                  </div>
                  <div className="border-l-2 border-coral pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-neutral text-sm">Interior Vacuumed</p>
                      <span className="text-xs text-neutral-light">10:15 AM</span>
                    </div>
                    <div className="bg-gray-100 rounded-button h-32 flex items-center justify-center text-4xl">
                      📷
                    </div>
                  </div>
                  <div className="border-l-2 border-gray-300 pl-4 opacity-50">
                    <p className="font-semibold text-neutral text-sm mb-2">Hand Wax Applied</p>
                    <div className="bg-gray-100 rounded-button h-32 flex items-center justify-center text-2xl">
                      ⏳ In Progress
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="card bg-gradient-to-br from-coral/5 to-teal/5 border-2 border-dashed border-coral/30">
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">✨</div>
                    <h3 className="text-2xl font-bold text-neutral mb-4">
                      Your Car is Ready!
                    </h3>
                    <div className="space-y-3 text-left max-w-sm mx-auto">
                      <div className="bg-white rounded-button p-4">
                        <p className="text-sm font-semibold text-neutral mb-1">
                          🎁 Points Earned
                        </p>
                        <p className="text-2xl font-bold text-coral">+35 points</p>
                        <p className="text-xs text-neutral-light mt-1">
                          115 points until next reward
                        </p>
                      </div>
                      <div className="bg-white rounded-button p-4">
                        <p className="text-sm font-semibold text-neutral mb-2">
                          Rate Your Experience
                        </p>
                        <div className="flex space-x-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FiStar
                              key={star}
                              className="text-coral fill-coral cursor-pointer"
                              size={24}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                  <h2 className="text-3xl font-bold text-neutral">
                    Enjoy Your Clean Car
                  </h2>
                </div>
                <p className="text-lg text-neutral-light mb-6">
                  Service complete! You'll receive a notification with final photos and a summary. Rate your experience, earn points toward rewards, and book your next wash when you're ready.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="text-teal mt-1 flex-shrink-0" />
                    <p className="text-neutral-light">
                      <strong className="text-neutral">Earn points:</strong> Every wash gets you closer to free services
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="text-teal mt-1 flex-shrink-0" />
                    <p className="text-neutral-light">
                      <strong className="text-neutral">Easy rebooking:</strong> One tap to schedule your next wash
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="text-teal mt-1 flex-shrink-0" />
                    <p className="text-neutral-light">
                      <strong className="text-neutral">Download invoice:</strong> Perfect for expense tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
              Why GloPro is Different
            </h2>
            <p className="text-lg text-neutral-light max-w-2xl mx-auto">
              We're not just another car wash - we're reimagining car care for the modern age
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-neutral mb-3">
                No Machines, Just Hands
              </h3>
              <p className="text-neutral-light text-sm">
                Automated car washes use harsh brushes that scratch paint. Our detailers hand-wash every inch with microfiber and premium soap.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🏜️</div>
              <h3 className="text-xl font-semibold text-neutral mb-3">
                Built for the Desert
              </h3>
              <p className="text-neutral-light text-sm">
                Sandstorm alerts, heatwave discounts, and unlimited quick rinses for subscribers. We understand Abu Dhabi.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-xl font-semibold text-neutral mb-3">
                Total Transparency
              </h3>
              <p className="text-neutral-light text-sm">
                Real-time photos at every stage. No "black box" service - you see exactly what's happening to your car.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold text-neutral mb-3">
                Your Cleaner, Your Choice
              </h3>
              <p className="text-neutral-light text-sm">
                Build a relationship with a trusted detailer. Favorite them and request them for every wash.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold text-neutral mb-3">
                Rewarding Loyalty
              </h3>
              <p className="text-neutral-light text-sm">
                Earn points on every wash. Redeem for free services, refer friends for bonuses, and enjoy birthday perks.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-neutral mb-3">
                Seamless Experience
              </h3>
              <p className="text-neutral-light text-sm">
                Book in 2 minutes, manage everything from your phone, and get notified every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-coral to-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of Abu Dhabi drivers who've switched to human-led detailing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-white text-coral px-8 py-4 rounded-button font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]"
            >
              Book Your First Wash
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-button font-semibold hover:bg-white hover:text-coral transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
