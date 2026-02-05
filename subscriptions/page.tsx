import Link from 'next/link';
import { Check, Zap, Crown, Sparkles } from 'lucide-react';

export default function Subscriptions() {
  const plans = [
    {
      id: 'essential',
      name: 'Glo Essential Pass',
      icon: Sparkles,
      price: 'AED 399',
      period: '/month',
      description: 'Perfect for regular maintenance',
      features: [
        '4 Glo Essential washes per month',
        'Unlimited quick rinses after sandstorms',
        'Priority booking',
        '10% off add-on services',
        'Weather alerts & smart scheduling',
        'Choose your favorite cleaner',
        'Cancel anytime'
      ],
      cta: 'Start Essential',
      popular: false,
      savings: 'Save AED 81/month'
    },
    {
      id: 'premium',
      name: 'Glo Premium Club',
      icon: Crown,
      price: 'AED 899',
      period: '/month',
      description: 'Complete care for your vehicle',
      features: [
        '2 Glo Premium washes per month',
        '2 Glo Essential washes per month',
        'Unlimited quick rinses after sandstorms',
        'Priority booking (24hr ahead)',
        '15% off add-on services',
        'Checkpoint photo timeline every wash',
        'Dedicated account manager',
        'Free interior sanitization monthly',
        'Cancel anytime'
      ],
      cta: 'Join Premium Club',
      popular: true,
      savings: 'Save AED 241/month'
    },
    {
      id: 'elite',
      name: 'Desert Elite',
      icon: Zap,
      price: 'AED 1,499',
      period: '/month',
      description: 'Ultimate protection & luxury',
      features: [
        '1 Desert Rescue service per month',
        '2 Glo Premium washes per month',
        'Unlimited Glo Essential washes',
        'Unlimited quick rinses',
        'VIP priority booking',
        '20% off all add-ons',
        'Ceramic coating refresh quarterly',
        'Personal detailing consultant',
        'Complimentary interior/exterior protection',
        'Exclusive member events',
        'Cancel anytime'
      ],
      cta: 'Go Elite',
      popular: false,
      savings: 'Save AED 601/month'
    }
  ];

  const benefits = [
    {
      title: 'Never Book Again',
      description: 'We schedule your regular washes automatically based on weather and your preferences'
    },
    {
      title: 'Sandstorm Protection',
      description: 'Get unlimited quick rinses within 24 hours of any sandstorm - keep your car clean year-round'
    },
    {
      title: 'Smart Scheduling',
      description: 'Our system monitors weather patterns and proactively adjusts your schedule to maximize cleanliness'
    },
    {
      title: 'Priority Access',
      description: 'Book your favorite cleaners before they fill up, with advance booking windows'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              GloPro Club Memberships
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8">
              Never worry about booking again. Stay sand-free with unlimited quick rinses.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-teal-100">💎</span>
              <span className="font-semibold">Save up to 40% with annual plans</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 ${
                  plan.popular ? 'ring-4 ring-teal-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center py-3 font-semibold">
                    ⭐ MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <div className="text-sm text-teal-600 font-semibold mt-2">
                      {plan.savings}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={`/book?plan=${plan.id}`}
                    className={`block w-full text-center py-4 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-teal-500 text-white hover:bg-teal-600'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Join GloPro Club?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            More than just savings - get peace of mind with automated care designed for Abu Dhabi's desert climate
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{['🎯', '🌪️', '🧠', '⭐'][index]}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Compare Plans
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">
                    Essential
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-teal-600 bg-teal-50">
                    Premium Club
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">
                    Desert Elite
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">Glo Essential washes/month</td>
                  <td className="text-center py-4 px-4">4</td>
                  <td className="text-center py-4 px-4 bg-teal-50">2</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">Glo Premium washes/month</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 px-4 bg-teal-50">2</td>
                  <td className="text-center py-4 px-4">2</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">Desert Rescue/month</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 px-4 bg-teal-50">—</td>
                  <td className="text-center py-4 px-4">1</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">Unlimited quick rinses</td>
                  <td className="text-center py-4 px-4">✓</td>
                  <td className="text-center py-4 px-4 bg-teal-50">✓</td>
                  <td className="text-center py-4 px-4">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">Priority booking window</td>
                  <td className="text-center py-4 px-4">Standard</td>
                  <td className="text-center py-4 px-4 bg-teal-50">24hr ahead</td>
                  <td className="text-center py-4 px-4">VIP</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">Discount on add-ons</td>
                  <td className="text-center py-4 px-4">10%</td>
                  <td className="text-center py-4 px-4 bg-teal-50">15%</td>
                  <td className="text-center py-4 px-4">20%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">Checkpoint photos</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 px-4 bg-teal-50">✓</td>
                  <td className="text-center py-4 px-4">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">Dedicated account manager</td>
                  <td className="text-center py-4 px-4">—</td>
                  <td className="text-center py-4 px-4 bg-teal-50">✓</td>
                  <td className="text-center py-4 px-4">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Membership FAQ
        </h2>

        <div className="space-y-4">
          <details className="bg-white rounded-lg shadow-sm p-6 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              Can I cancel anytime?
              <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">
              Yes! All memberships are month-to-month with no long-term commitment. Cancel anytime from your dashboard.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-sm p-6 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              What happens to unused washes?
              <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">
              Unused monthly washes roll over for up to 2 months, giving you flexibility during travel or busy periods.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-sm p-6 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              How do "unlimited quick rinses" work?
              <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">
              Within 24 hours of any sandstorm alert in Abu Dhabi, request a complimentary 15-minute exterior rinse to remove dust and sand. 
              Perfect for keeping your car clean between full washes.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-sm p-6 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              Can I upgrade or downgrade my plan?
              <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">
              Absolutely! Change your plan at any time. Upgrades take effect immediately, downgrades at your next billing cycle.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-sm p-6 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              Do you offer annual plans?
              <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">
              Yes! Pay annually and save an additional 15% on any plan. Contact us for annual pricing details.
            </p>
          </details>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join GloPro Club?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Start with a 30-day trial. Cancel anytime, no questions asked.
          </p>
          <Link
            href="/book"
            className="inline-block bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors text-lg"
          >
            Start Your Trial
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            First wash on us • No credit card required
          </p>
        </div>
      </div>
    </div>
  );
}
