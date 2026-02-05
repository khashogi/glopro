import Link from 'next/link';
import { Calendar, MapPin, Camera, Sparkles, CheckCircle, Star } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Choose Your Service',
      icon: Sparkles,
      description: 'Select from Glo Essential, Glo Premium, or Desert Rescue based on your needs.',
      details: [
        'Browse our service menu and pricing',
        'See what\'s included in each package',
        'Add premium add-ons if desired'
      ]
    },
    {
      number: 2,
      title: 'Pick Date, Time & Location',
      icon: Calendar,
      description: 'Book a time that works for you. We come to your home, office, or anywhere in Abu Dhabi.',
      details: [
        'Choose your preferred date and time',
        'Get heatwave discounts for early morning slots',
        'Smart weather alerts suggest optimal timing',
        'Select your favorite cleaner'
      ]
    },
    {
      number: 3,
      title: 'We Come to You',
      icon: MapPin,
      description: 'Our professional team arrives with all equipment and premium products.',
      details: [
        'No need to leave home or office',
        'We bring water, equipment, and supplies',
        'Track your pro\'s arrival in real-time',
        'Meet your assigned cleaner'
      ]
    },
    {
      number: 4,
      title: 'Watch the Transformation',
      icon: Camera,
      description: 'Receive real-time checkpoint photos showing your car\'s glow-up.',
      details: [
        'Get notified when service begins',
        'Receive 3-4 progress photos',
        'See before/after comparisons',
        'Communicate directly with your cleaner'
      ]
    },
    {
      number: 5,
      title: 'Enjoy Your Glowing Car',
      icon: CheckCircle,
      description: 'Inspect the results, leave a rating, and earn rewards points.',
      details: [
        'Final walkthrough with your cleaner',
        'Rate your service and favorite your pro',
        'Earn points toward future discounts',
        'Schedule your next wash'
      ]
    }
  ];

  const features = [
    {
      icon: '🌪️',
      title: 'Weather-Smart Scheduling',
      description: 'We monitor sandstorms and proactively suggest rescheduling to keep your car clean longer.'
    },
    {
      icon: '📸',
      title: 'Checkpoint Photos',
      description: 'Get real-time updates with photos at each stage - see your car transform before your eyes.'
    },
    {
      icon: '⭐',
      title: 'Favorite Your Cleaner',
      description: 'Build a relationship with a trusted pro who knows your car and preferences.'
    },
    {
      icon: '🎯',
      title: 'Rewards Program',
      description: 'Earn points on every service that can be redeemed for discounts and free upgrades.'
    },
    {
      icon: '🌅',
      title: 'Heatwave Discounts',
      description: 'Save 10% on early morning bookings (6-9 AM) when it\'s cooler for our team.'
    },
    {
      icon: '🛡️',
      title: 'Satisfaction Guarantee',
      description: 'Not happy? We\'ll come back and make it right, or your money back.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How GloPro Works
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Premium hand car wash that comes to you. From booking to final shine, 
            we've made the process simple and transparent.
          </p>
        </div>
      </div>

      {/* Main Steps */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon & Number */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 bg-teal-100 rounded-2xl flex items-center justify-center">
                      <Icon className="w-12 h-12 text-teal-600" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-lg">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-teal-500 mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Visual Timeline */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Average Service Timeline
            </h2>
            <p className="text-gray-600">
              Here's what to expect during a typical Glo Premium service
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-teal-200 hidden md:block" />

            <div className="space-y-12">
              {[
                { time: '0 min', event: 'Pro arrives & introduces themselves', icon: '👋' },
                { time: '5 min', event: 'Initial exterior rinse & photo sent', icon: '📸' },
                { time: '20 min', event: 'Hand wash with premium soap', icon: '🧽' },
                { time: '35 min', event: 'Wheel & tire detailing', icon: '⚙️' },
                { time: '50 min', event: 'Interior vacuum & wipe down', icon: '✨' },
                { time: '75 min', event: 'Hand wax application - photo update', icon: '🪄' },
                { time: '100 min', event: 'Final polish & tire shine', icon: '💎' },
                { time: '120 min', event: 'Final photos & walkthrough', icon: '🎉' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-8 relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full z-10" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="bg-teal-50 rounded-lg p-4 inline-block">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="text-teal-600 font-semibold text-sm mb-1">
                        {item.time}
                      </div>
                      <div className="text-gray-900 font-medium">
                        {item.event}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Makes GloPro Different
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've designed every detail to make premium car care convenient, 
            transparent, and perfectly suited for Abu Dhabi's desert climate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Checkpoint Photos Section */}
      <div className="bg-teal-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                See Every Step with Checkpoint Photos
              </h2>
              <p className="text-gray-700 mb-6">
                Unlike traditional car washes where you wait and wonder, we keep you in the loop. 
                Get real-time photos at key stages so you can see the transformation happening.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Camera className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Before Photo</div>
                    <div className="text-gray-600 text-sm">
                      Initial condition documented
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Camera className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Progress Updates</div>
                    <div className="text-gray-600 text-sm">
                      2-3 photos during key stages
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Camera className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Final Reveal</div>
                    <div className="text-gray-600 text-sm">
                      Multiple angles of finished result
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-4 border-2 border-teal-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="w-4 h-4 text-teal-600" />
                    <span className="text-xs font-semibold text-teal-600">CHECKPOINT 1</span>
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    "Starting exterior rinse 💦"
                  </div>
                  <div className="text-xs text-gray-500 mt-1">10:05 AM</div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4 border-2 border-teal-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="w-4 h-4 text-teal-600" />
                    <span className="text-xs font-semibold text-teal-600">CHECKPOINT 2</span>
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    "Interior detailed & vacuumed ✨"
                  </div>
                  <div className="text-xs text-gray-500 mt-1">10:45 AM</div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4 border-2 border-teal-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="w-4 h-4 text-teal-600" />
                    <span className="text-xs font-semibold text-teal-600">CHECKPOINT 3</span>
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    "Wax applied - looking great! 💎"
                  </div>
                  <div className="text-xs text-gray-500 mt-1">11:15 AM</div>
                </div>

                <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4" />
                    <span className="text-xs font-semibold">FINAL RESULT</span>
                  </div>
                  <div className="text-sm font-medium">
                    "All done! Your car is glowing ✨🚗"
                  </div>
                  <div className="text-xs text-teal-100 mt-1">11:50 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Preview */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Common Questions
        </h2>

        <div className="space-y-4">
          <details className="bg-white rounded-lg shadow-sm p-6 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              How long does a service take?
              <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">
              Glo Essential: 45 minutes | Glo Premium: 2 hours | Desert Rescue: 3 hours. 
              You don't need to be present - we can service your car while you work or relax.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-sm p-6 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              What if it rains after my wash?
              <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">
              Our weather-smart system monitors forecasts and will suggest rescheduling if rain is predicted within 24 hours of your booking.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-sm p-6 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              Do I need to provide water or electricity?
              <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">
              Yes, we need access to an outdoor water source and power outlet. This keeps our service eco-friendly and cost-effective!
            </p>
          </details>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience GloPro?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Book your first wash and see why Abu Dhabi trusts us with their vehicles
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors text-lg"
          >
            Book Your First Glow
          </Link>
          <p className="text-sm text-teal-100 mt-4">
            Satisfaction guaranteed • Real-time updates • Professional service
          </p>
        </div>
      </div>
    </div>
  );
}
