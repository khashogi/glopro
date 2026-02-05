'use client'

import Link from 'next/link'
import { FiCalendar, FiClock, FiMapPin, FiStar, FiHeart, FiGift, FiAlertCircle } from 'react-icons/fi'

// Mock data - Replace with actual API calls
const mockUser = {
  name: 'Adnan',
  points: 245,
  subscription: {
    plan: 'Sand-Free Monthly Pass',
    washesRemaining: 2,
    nextBillingDate: '2026-03-01',
  },
}

const mockUpcomingBooking = {
  id: 'book_001',
  service: 'Premium Detail',
  date: '2026-02-08',
  time: '10:00 AM',
  vehicle: '2023 BMW 7 Series',
  location: 'Home - Al Reem Island',
  cleaner: {
    name: 'Ahmed',
    rating: 4.9,
    photo: '👨',
  },
  weatherAlert: true,
}

const mockBookingHistory = [
  {
    id: 'book_002',
    service: 'Essential Hand Wash',
    date: '2026-01-28',
    vehicle: '2023 BMW 7 Series',
    cleaner: 'Ahmed',
    rating: 5,
    photos: 4,
  },
  {
    id: 'book_003',
    service: 'Desert Shield',
    date: '2026-01-15',
    vehicle: '2023 BMW 7 Series',
    cleaner: 'Mohammed',
    rating: 5,
    photos: 4,
  },
]

const mockFavoriteCleaners = [
  {
    id: 'cleaner_001',
    name: 'Ahmed',
    photo: '👨',
    rating: 4.9,
    totalWashes: 23,
    specialization: 'Luxury Vehicles',
  },
  {
    id: 'cleaner_002',
    name: 'Mohammed',
    photo: '👨‍🦱',
    rating: 4.8,
    totalWashes: 12,
    specialization: 'Interior Detailing',
  },
]

export default function DashboardPage() {
  const pointsToNextReward = 350 - mockUser.points
  const progressPercentage = (mockUser.points / 350) * 100

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral mb-2">
            Welcome back, {mockUser.name}! 👋
          </h1>
          <p className="text-neutral-light">
            Your car care dashboard
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Points Card */}
            <div className="card bg-gradient-to-br from-coral to-teal text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm opacity-90 mb-1">Your Points</p>
                  <p className="text-4xl font-bold">{mockUser.points}</p>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <FiGift size={32} />
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-2 opacity-90">
                  <span>Progress to next reward</span>
                  <span>{pointsToNextReward} points to go</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div
                    className="bg-white rounded-full h-3 transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
              
              <Link href="/rewards" className="text-sm underline hover:opacity-80 transition-opacity">
                View all rewards →
              </Link>
            </div>

            {/* Upcoming Booking */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-neutral">
                  Upcoming Booking
                </h2>
                <Link href="/booking" className="btn-secondary text-sm py-2">
                  Book Another
                </Link>
              </div>

              {mockUpcomingBooking ? (
                <div>
                  {/* Weather Alert */}
                  {mockUpcomingBooking.weatherAlert && (
                    <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6 rounded-button">
                      <div className="flex items-start space-x-3">
                        <FiAlertCircle className="text-orange-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-neutral text-sm mb-1">
                            Sandstorm Warning
                          </p>
                          <p className="text-sm text-neutral-light mb-3">
                            A sandstorm is forecasted for Tuesday. Your Monday wash might get dirty quickly. Consider rescheduling to Wednesday?
                          </p>
                          <button className="text-sm font-medium text-coral hover:text-coral-dark transition-colors">
                            Reschedule to Wednesday 10:00 AM →
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                            <FiCalendar className="text-coral" />
                          </div>
                          <div>
                            <p className="text-xs text-neutral-light">Date & Time</p>
                            <p className="font-semibold text-neutral">
                              {new Date(mockUpcomingBooking.date).toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                              })}{' '}
                              at {mockUpcomingBooking.time}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center">
                            <FiMapPin className="text-teal" />
                          </div>
                          <div>
                            <p className="text-xs text-neutral-light">Location</p>
                            <p className="font-semibold text-neutral">
                              {mockUpcomingBooking.location}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center text-xl">
                            🚗
                          </div>
                          <div>
                            <p className="text-xs text-neutral-light">Vehicle</p>
                            <p className="font-semibold text-neutral">
                              {mockUpcomingBooking.vehicle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="bg-gray-50 rounded-button p-4">
                        <p className="text-xs text-neutral-light mb-2">Your Cleaner</p>
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="text-4xl">{mockUpcomingBooking.cleaner.photo}</div>
                          <div>
                            <p className="font-semibold text-neutral">
                              {mockUpcomingBooking.cleaner.name}
                            </p>
                            <div className="flex items-center space-x-1">
                              <FiStar className="text-coral text-sm" />
                              <span className="text-sm text-neutral-light">
                                {mockUpcomingBooking.cleaner.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm font-semibold text-neutral mb-2">
                          {mockUpcomingBooking.service}
                        </p>
                        <div className="flex space-x-2">
                          <button className="flex-1 text-sm py-2 border border-coral text-coral rounded-button hover:bg-coral hover:text-white transition-colors">
                            Reschedule
                          </button>
                          <button className="flex-1 text-sm py-2 border border-gray-300 text-neutral-light rounded-button hover:border-neutral hover:text-neutral transition-colors">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-neutral-light mb-4">No upcoming bookings</p>
                  <Link href="/booking" className="btn-primary">
                    Book Your Next Wash
                  </Link>
                </div>
              )}
            </div>

            {/* Booking History */}
            <div className="card">
              <h2 className="text-2xl font-semibold text-neutral mb-6">
                Recent Services
              </h2>

              <div className="space-y-4">
                {mockBookingHistory.map((booking) => (
                  <div
                    key={booking.id}
                    className="border border-gray-200 rounded-button p-4 hover:border-coral transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold text-neutral">{booking.service}</p>
                        <p className="text-sm text-neutral-light">
                          {new Date(booking.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            size={16}
                            className={
                              i < booking.rating
                                ? 'text-coral fill-coral'
                                : 'text-gray-300'
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-light">
                        Cleaner: {booking.cleaner}
                      </span>
                      <button className="text-coral hover:text-coral-dark transition-colors">
                        View {booking.photos} photos →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link href="/history" className="btn-tertiary">
                  View All History
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Subscription Card */}
            {mockUser.subscription && (
              <div className="card bg-teal/5 border-2 border-teal">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-neutral">Your Membership</h3>
                  <span className="text-2xl">🎫</span>
                </div>
                
                <p className="font-semibold text-neutral mb-2">
                  {mockUser.subscription.plan}
                </p>
                
                <div className="bg-white rounded-button p-3 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-neutral-light">Washes This Month</span>
                    <span className="font-bold text-teal">
                      {mockUser.subscription.washesRemaining} left
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-teal rounded-full h-2"
                      style={{ width: '50%' }}
                    />
                  </div>
                </div>

                <p className="text-xs text-neutral-light mb-3">
                  Next billing: {new Date(mockUser.subscription.nextBillingDate).toLocaleDateString()}
                </p>

                <Link
                  href="/subscription/manage"
                  className="block text-center w-full py-2 border border-teal text-teal rounded-button hover:bg-teal hover:text-white transition-colors text-sm font-medium"
                >
                  Manage Plan
                </Link>
              </div>
            )}

            {/* Favorite Cleaners */}
            <div className="card">
              <h3 className="font-semibold text-neutral mb-4 flex items-center space-x-2">
                <FiHeart className="text-coral" />
                <span>Your Cleaners</span>
              </h3>

              <div className="space-y-3">
                {mockFavoriteCleaners.map((cleaner) => (
                  <div
                    key={cleaner.id}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-button"
                  >
                    <div className="text-3xl">{cleaner.photo}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-neutral text-sm">
                        {cleaner.name}
                      </p>
                      <div className="flex items-center space-x-1">
                        <FiStar className="text-coral text-xs" />
                        <span className="text-xs text-neutral-light">
                          {cleaner.rating} • {cleaner.totalWashes} washes
                        </span>
                      </div>
                      <p className="text-xs text-teal mt-1">
                        {cleaner.specialization}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/cleaners"
                className="block text-center mt-4 text-sm text-coral hover:text-coral-dark transition-colors"
              >
                Browse All Cleaners →
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="card bg-gradient-to-br from-coral/5 to-teal/5">
              <h3 className="font-semibold text-neutral mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link
                  href="/booking"
                  className="block w-full py-3 bg-white border border-gray-200 rounded-button text-center text-sm font-medium text-neutral hover:border-coral hover:text-coral transition-colors"
                >
                  📅 Book a Wash
                </Link>
                <Link
                  href="/vehicles"
                  className="block w-full py-3 bg-white border border-gray-200 rounded-button text-center text-sm font-medium text-neutral hover:border-coral hover:text-coral transition-colors"
                >
                  🚗 Manage Vehicles
                </Link>
                <Link
                  href="/rewards"
                  className="block w-full py-3 bg-white border border-gray-200 rounded-button text-center text-sm font-medium text-neutral hover:border-coral hover:text-coral transition-colors"
                >
                  🎁 Redeem Rewards
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
