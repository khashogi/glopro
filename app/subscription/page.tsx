import Link from 'next/link'
import { FiCheck, FiX } from 'react-icons/fi'

const plans = [
  {
    id: 'sand-free',
    name: 'Sand-Free Monthly Pass',
    price: 499,
    savings: 20,
    bestFor: 'Regular Commuters',
    icon: '🏜️',
    features: [
      { text: '4 Essential Hand Wash services', included: true },
      { text: 'Unlimited Quick Rinses', included: true, highlight: true },
      { text: '10% discount on additional services', included: true },
      { text: 'Priority booking (48-hour notice)', included: true },
      { text: '50 bonus points per month', included: true },
      { text: 'Choose preferred cleaner', included: false },
      { text: 'Emergency sandstorm rinse', included: false },
    ],
    popular: false,
  },
  {
    id: 'executive',
    name: 'Executive Detail Club',
    price: 899,
    savings: 25,
    bestFor: 'Luxury Car Owners',
    icon: '👔',
    features: [
      { text: '2 Premium Detail services', included: true },
      { text: '2 Essential Hand Washes', included: true },
      { text: 'Unlimited Quick Rinses', included: true, highlight: true },
      { text: '15% discount on additional services', included: true },
      { text: 'Priority booking (72-hour notice)', included: true },
      { text: '100 bonus points per month', included: true },
      { text: 'Choose preferred cleaner', included: true, highlight: true },
      { text: 'Emergency sandstorm rinse (24hr)', included: true, highlight: true },
    ],
    popular: true,
  },
  {
    id: 'family',
    name: 'Family Fleet Plan',
    price: 699,
    savings: 20,
    bestFor: 'Multiple Vehicles',
    icon: '👨‍👩‍👧‍👦',
    features: [
      { text: '6 Essential Hand Wash services (any vehicle)', included: true },
      { text: 'Unlimited Quick Rinses (any vehicle)', included: true, highlight: true },
      { text: 'Add up to 3 vehicles', included: true, highlight: true },
      { text: '10% discount on Interior services', included: true },
      { text: 'Flexible scheduling across vehicles', included: true },
      { text: '75 bonus points per month', included: true },
      { text: 'Choose preferred cleaner', included: false },
      { text: 'Emergency sandstorm rinse', included: false },
    ],
    popular: false,
  },
]

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-coral/10 via-teal/5 to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral mb-6">
              Save Big with Membership Plans
            </h1>
            <p className="text-xl text-neutral-light mb-8">
              Enjoy unlimited quick rinses, priority booking, and exclusive perks. Perfect for Abu Dhabi's desert conditions.
            </p>
            <div className="bg-white rounded-card shadow-card p-6 inline-block">
              <p className="text-sm text-neutral-light mb-2">7-Day Free Trial</p>
              <p className="text-3xl font-bold text-coral">Try Any Plan Risk-Free</p>
              <p className="text-sm text-neutral-light mt-2">
                Cancel anytime • No commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Comparison */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`card relative ${
                  plan.popular ? 'border-2 border-coral ring-4 ring-coral/10' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-coral text-white text-xs font-semibold px-6 py-2 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-neutral mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-neutral-light mb-4">
                    Best for {plan.bestFor}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-neutral">
                        AED {plan.price}
                      </span>
                      <span className="text-neutral-light ml-2">/month</span>
                    </div>
                    <p className="text-sm text-green-600 font-medium mt-2">
                      Save {plan.savings}% vs. pay-per-wash
                    </p>
                  </div>

                  <Link
                    href={`/subscribe?plan=${plan.id}`}
                    className={`block w-full py-3 rounded-button font-semibold transition-all ${
                      plan.popular
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-6 border-t border-gray-200">
                  {plan.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-2 ${
                        feature.highlight ? 'bg-teal/5 -mx-2 px-2 py-1 rounded' : ''
                      }`}
                    >
                      {feature.included ? (
                        <FiCheck className="text-coral mt-0.5 flex-shrink-0" size={18} />
                      ) : (
                        <FiX className="text-gray-300 mt-0.5 flex-shrink-0" size={18} />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? 'text-neutral' : 'text-neutral-light'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
              Why Subscribe?
            </h2>
            <p className="text-lg text-neutral-light max-w-2xl mx-auto">
              More than just savings - membership comes with exclusive benefits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                💧
              </div>
              <h3 className="text-xl font-semibold text-neutral mb-3">
                Unlimited Quick Rinses
              </h3>
              <p className="text-neutral-light">
                Post-sandstorm? No problem. Rinse as many times as you need, completely free.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-neutral mb-3">
                Priority Scheduling
              </h3>
              <p className="text-neutral-light">
                Members get first access to premium time slots and same-week bookings.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                🎁
              </div>
              <h3 className="text-xl font-semibold text-neutral mb-3">
                Bonus Points
              </h3>
              <p className="text-neutral-light">
                Earn extra points every month that stack on top of your per-wash rewards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                💰
              </div>
              <h3 className="text-xl font-semibold text-neutral mb-3">
                Ongoing Discounts
              </h3>
              <p className="text-neutral-light">
                Get 10-15% off any additional services beyond your monthly allocation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                ⏸️
              </div>
              <h3 className="text-xl font-semibold text-neutral mb-3">
                Flexible Management
              </h3>
              <p className="text-neutral-light">
                Pause for vacation, upgrade/downgrade anytime, or cancel with no penalties.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                📦
              </div>
              <h3 className="text-xl font-semibold text-neutral mb-3">
                Rollover Washes
              </h3>
              <p className="text-neutral-light">
                Unused washes roll over for up to 2 months. No waste, maximum flexibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="font-semibold text-neutral mb-2">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-neutral-light text-sm">
                Yes! Cancel anytime with no penalties. You'll continue to have access until the end of your billing period, and any unused washes will be refunded prorated.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold text-neutral mb-2">
                What happens to unused washes?
              </h3>
              <p className="text-neutral-light text-sm">
                Unused washes roll over for up to 2 months. After that, they expire. This gives you flexibility for busy months while encouraging regular car care.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold text-neutral mb-2">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="text-neutral-light text-sm">
                Absolutely! You can change your plan anytime. When upgrading, you'll be charged the prorated difference immediately. When downgrading, the change takes effect at your next billing cycle.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold text-neutral mb-2">
                Is the 7-day trial really free?
              </h3>
              <p className="text-neutral-light text-sm">
                Yes! We'll ask for payment information, but you won't be charged until after your 7-day trial ends. During the trial, you get 1 free wash to test our service. Cancel anytime during the trial at no cost.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold text-neutral mb-2">
                What are "Quick Rinses"?
              </h3>
              <p className="text-neutral-light text-sm">
                Quick Rinses are 20-minute exterior washes perfect for post-sandstorm cleanups. They're normally AED 80 each, but completely FREE and unlimited for all members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-coral to-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Save on Every Wash?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your 7-day free trial today. No commitment, cancel anytime.
          </p>
          <Link
            href="/subscribe"
            className="inline-block bg-white text-coral px-8 py-4 rounded-button font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]"
          >
            Start Free Trial
          </Link>
          <p className="text-sm mt-4 opacity-75">
            Already have an account? <Link href="/login" className="underline">Log in</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
