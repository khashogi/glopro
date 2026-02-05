import Link from 'next/link';
import { Sparkles, Shield, Droplets, Wind, Star, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'glo-essential',
      name: 'Glo Essential',
      icon: Sparkles,
      price: 'AED 120',
      duration: '45 mins',
      description: 'Perfect for maintaining your car\'s shine between deep cleans.',
      features: [
        'Hand wash exterior with premium soap',
        'Wheel and tire cleaning',
        'Interior vacuum',
        'Window cleaning (inside & out)',
        'Dashboard wipe-down',
        'Air freshener'
      ],
      popular: false
    },
    {
      id: 'glo-premium',
      name: 'Glo Premium',
      icon: Star,
      price: 'AED 280',
      duration: '2 hours',
      description: 'Our signature service - complete transformation with checkpoint photos.',
      features: [
        'Everything in Glo Essential',
        'Hand wax application',
        'Deep interior detailing',
        'Leather conditioning',
        'Engine bay cleaning',
        'Tire shine & dressing',
        '4 Checkpoint photos sent to you',
        'Choose your favorite cleaner'
      ],
      popular: true
    },
    {
      id: 'desert-rescue',
      name: 'Desert Rescue',
      icon: Shield,
      price: 'AED 450',
      duration: '3 hours',
      description: 'Ultimate protection against Abu Dhabi\'s harsh desert conditions.',
      features: [
        'Everything in Glo Premium',
        'Ceramic coating application',
        'Paint protection film on high-impact areas',
        'Underbody anti-rust treatment',
        'Sand-resistant sealant',
        'UV protection for interior',
        '6-month protection guarantee',
        'Free quick rinse after sandstorms'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Pet Hair Removal',
      icon: Wind,
      price: 'AED 50',
      description: 'Deep cleaning for pet owners'
    },
    {
      name: 'Headlight Restoration',
      icon: Zap,
      price: 'AED 80',
      description: 'Restore clarity and brightness'
    },
    {
      name: 'Odor Elimination',
      icon: Droplets,
      price: 'AED 60',
      description: 'Professional odor treatment'
    },
    {
      name: 'Scratch Removal',
      icon: Shield,
      price: 'AED 150',
      description: 'Minor scratch buffing & polish'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Premium hand car wash services designed for Abu Dhabi's climate
            </p>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                  service.popular ? 'ring-2 ring-teal-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-teal-500 text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  {/* Icon and Name */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                  </div>

                  {/* Name and Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <span className="text-teal-500 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={`/book?service=${service.id}`}
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      service.popular
                        ? 'bg-teal-500 text-white hover:bg-teal-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add-Ons Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Add-Ons
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your service with these professional treatments
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {addOns.map((addon) => {
              const Icon = addon.icon;
              return (
                <div
                  key={addon.name}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {addon.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {addon.description}
                  </p>
                  <div className="text-lg font-bold text-teal-600">
                    {addon.price}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Weather Smart Scheduling Info */}
      <div className="bg-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Weather-Smart Scheduling
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We monitor Abu Dhabi's weather patterns and will proactively suggest 
            rescheduling if sandstorms are predicted. Your car stays clean, longer.
          </p>
          <Link
            href="/book"
            className="inline-block bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
          >
            Schedule Your Glow
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          <details className="bg-white rounded-lg shadow-sm p-6 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              How long does each service take?
              <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">
              Glo Essential takes 45 minutes, Glo Premium takes 2 hours, and Desert Rescue takes 3 hours. 
              We'll send you real-time updates and checkpoint photos during the service.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-sm p-6 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              Do you come to my location?
              <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">
              Yes! We're a mobile service and come to your home, office, or any location in Abu Dhabi. 
              All we need is access to water and electricity.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-sm p-6 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              What products do you use?
              <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">
              We use premium, pH-balanced products that are safe for all paint types and won't damage your car's finish. 
              All our products are specifically chosen for Abu Dhabi's harsh desert climate.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-sm p-6 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              Can I request the same cleaner each time?
              <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">
              Absolutely! After your first service, you can "favorite" your cleaner and request them for future bookings. 
              Building that relationship is part of our premium experience.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
