import Link from 'next/link'
import { FiCheckCircle, FiClock } from 'react-icons/fi'

const services = [
  {
    id: 'essential-wash',
    name: 'Essential Hand Wash',
    price: 150,
    duration: 45,
    points: 15,
    icon: '✨',
    description: 'Perfect for regular maintenance and keeping your car looking fresh.',
    includes: [
      'Exterior hand wash with premium soap',
      'Wheel and tire cleaning',
      'Tire shine application',
      'Interior vacuum (seats, carpets, trunk)',
      'Window cleaning (inside & out)',
      'Dashboard wipe-down',
    ],
    popular: false,
  },
  {
    id: 'premium-detail',
    name: 'Premium Detail',
    price: 350,
    duration: 120,
    points: 35,
    icon: '💎',
    description: 'Our most popular service - complete transformation inside and out.',
    includes: [
      'Everything in Essential Hand Wash',
      'Clay bar treatment (removes contaminants)',
      'Hand wax application (premium carnauba)',
      'Deep interior cleaning (steam)',
      'Leather conditioning',
      'Door jambs cleaning',
      'Chrome polishing',
      'Air vent detailing',
    ],
    popular: true,
  },
  {
    id: 'interior-sanctuary',
    name: 'Interior Sanctuary',
    price: 280,
    duration: 90,
    points: 28,
    icon: '🧘',
    description: 'Focused deep cleaning for the inside of your vehicle.',
    includes: [
      'Deep vacuum (all surfaces)',
      'Steam cleaning upholstery',
      'Leather treatment and conditioning',
      'Dashboard polish',
      'Center console detailing',
      'Cup holder cleaning',
      'Odor elimination treatment',
      'UV protection for plastics',
    ],
    popular: false,
  },
  {
    id: 'desert-shield',
    name: 'Desert Shield',
    price: 220,
    duration: 60,
    points: 22,
    icon: '🏜️',
    description: 'Specialized post-sandstorm rescue service.',
    includes: [
      'Thorough exterior hand wash',
      'Undercarriage rinse (removes sand)',
      'Wheel well cleaning',
      'Window treatment (water repellent)',
      'Door seals cleaning',
      'Engine bay dust removal',
    ],
    popular: false,
  },
  {
    id: 'quick-rinse',
    name: 'Quick Rinse',
    price: 80,
    duration: 20,
    points: 8,
    icon: '💧',
    description: 'Fast exterior wash for light dust. FREE for subscription members!',
    includes: [
      'Exterior rinse and dry',
      'Window cleaning',
      'Quick tire wipe',
    ],
    popular: false,
    badge: 'FREE WITH SUBSCRIPTION',
  },
  {
    id: 'executive-polish',
    name: 'Executive Polish',
    price: 550,
    duration: 180,
    points: 55,
    icon: '👔',
    description: 'The ultimate detailing experience for luxury vehicles.',
    includes: [
      'Everything in Premium Detail',
      'Paint correction (minor scratches)',
      'Ceramic coating touch-up',
      'Headlight restoration',
      'Chrome and metal polishing',
      'Engine bay detailing',
      'Trunk deep clean',
      'All-weather floor mat cleaning',
    ],
    popular: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-coral/10 via-teal/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral mb-4">
              Our Services
            </h1>
            <p className="text-xl text-neutral-light max-w-2xl mx-auto">
              From quick rinses to complete transformations, we have the perfect service for every need and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`card relative ${
                  service.popular ? 'border-2 border-coral' : ''
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-coral text-white text-xs font-semibold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                {/* Special Badge */}
                {service.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal text-white text-xs font-semibold px-4 py-1 rounded-full">
                    {service.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="text-6xl mb-4 text-center">{service.icon}</div>

                {/* Service Name */}
                <h3 className="text-2xl font-semibold text-neutral mb-2 text-center">
                  {service.name}
                </h3>

                {/* Price and Duration */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <span className="text-3xl font-bold text-neutral">
                      AED {service.price}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-neutral-light">
                    <FiClock />
                    <span className="text-sm">{service.duration} min</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-light text-sm mb-4">
                  {service.description}
                </p>

                {/* Points */}
                <div className="bg-teal/10 rounded-button px-3 py-2 mb-4">
                  <p className="text-teal text-sm font-medium">
                    🎁 Earn {service.points} points with this service
                  </p>
                </div>

                {/* Includes */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-neutral-light"
                      >
                        <FiCheckCircle className="text-coral mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/booking?service=${service.id}`}
                  className="btn-primary w-full text-center"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral mb-4">
              Available Add-Ons
            </h2>
            <p className="text-lg text-neutral-light">
              Customize any service with these premium extras
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Add-on 1 */}
            <div className="border-2 border-gray-200 rounded-card p-6 hover:border-coral transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-neutral">
                  Pet Hair Removal
                </h3>
                <span className="text-xl font-bold text-coral">+AED 50</span>
              </div>
              <p className="text-neutral-light text-sm">
                Specialized vacuum and brush treatment to remove stubborn pet hair from upholstery.
              </p>
            </div>

            {/* Add-on 2 */}
            <div className="border-2 border-gray-200 rounded-card p-6 hover:border-coral transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-neutral">
                  Headlight Restoration
                </h3>
                <span className="text-xl font-bold text-coral">+AED 120</span>
              </div>
              <p className="text-neutral-light text-sm">
                Professional polishing to restore cloudy or yellowed headlights to crystal clarity.
              </p>
            </div>

            {/* Add-on 3 */}
            <div className="border-2 border-gray-200 rounded-card p-6 hover:border-coral transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-neutral">
                  Engine Bay Detailing
                </h3>
                <span className="text-xl font-bold text-coral">+AED 80</span>
              </div>
              <p className="text-neutral-light text-sm">
                Deep clean and dressing for your engine bay. Makes maintenance easier and looks impressive.
              </p>
            </div>

            {/* Add-on 4 */}
            <div className="border-2 border-gray-200 rounded-card p-6 hover:border-coral transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-neutral">
                  Odor Elimination Treatment
                </h3>
                <span className="text-xl font-bold text-coral">+AED 100</span>
              </div>
              <p className="text-neutral-light text-sm">
                Ozone treatment to permanently eliminate smoke, food, and other stubborn odors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-coral/10 to-teal/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral mb-4">
            Not sure which service to choose?
          </h2>
          <p className="text-lg text-neutral-light mb-8">
            Our team can help you select the perfect service based on your vehicle's condition and your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Book a Service
            </Link>
            <Link href="/subscription" className="btn-secondary">
              Explore Subscriptions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
