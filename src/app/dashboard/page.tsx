'use client';

import { Calendar, Award, Clock, Star, CloudRain, AlertTriangle, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const user = {
    name: 'Ahmed',
    points: 450,
    tier: 'Gold',
    nextReward: 550
  };

  const upcomingBookings = [
    {
      id: 1,
      service: 'Glo Premium',
      date: '2026-02-08',
      time: '10:00 AM',
      location: 'Al Reem Island',
      cleaner: 'Ahmed K.',
      status: 'confirmed'
    },
    {
      id: 2,
      service: 'Glo Essential',
      date: '2026-02-15',
      time: '07:00 AM',
      location: 'Yas Island',
      cleaner: 'Mohammad R.',
      status: 'confirmed'
    }
  ];

  const recentBookings = [
    {
      id: 3,
      service: 'Glo Premium',
      date: '2026-01-28',
      cleaner: 'Ahmed K.',
      rating: 5,
      pointsEarned: 280
    },
    {
      id: 4,
      service: 'Desert Rescue',
      date: '2026-01-15',
      cleaner: 'Hassan M.',
      rating: 5,
      pointsEarned: 450
    }
  ];

  const favoriteCleaners = [
    { name: 'Ahmed K.', rating: 4.9, jobs: 12 },
    { name: 'Hassan M.', rating: 4.9, jobs: 3 }
  ];

  const weatherAlert = {
    type: 'sandstorm',
    date: '2026-02-09',
    severity: 'moderate',
    recommendation: 'Consider moving your Feb 10 booking to Feb 11'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600">
            Manage your bookings, track your rewards, and keep your car glowing
          </p>
        </div>

        {/* Weather Alert */}
        {weatherAlert && (
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-orange-900 mb-2">
                  ⚠️ Sandstorm Alert - {weatherAlert.date}
                </h3>
                <p className="text-orange-800 mb-3">
                  {weatherAlert.recommendation}
                </p>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors text-sm">
                    Reschedule Booking
                  </button>
                  <button className="px-4 py-2 bg-white border border-orange-300 text-orange-800 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-sm">
                    Keep Original Time
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Bookings */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Calendar className="text-teal-500" />
                  Upcoming Bookings
                </h2>
                <button className="text-teal-600 font-semibold hover:text-teal-700">
                  Book New +
                </button>
              </div>

              <div className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="border-2 border-gray-200 rounded-lg p-5 hover:border-teal-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {booking.service}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          with {booking.cleaner}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                        Confirmed
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-4 h-4 text-teal-500" />
                        {new Date(booking.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-4 h-4 text-teal-500" />
                        {booking.time}
                      </div>
                    </div>

                    <div className="flex gap-3 mt-4 pt-4 border-t">
                      <button className="flex-1 px-4 py-2 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors text-sm">
                        View Details
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm">
                        Modify
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent History */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="text-teal-500" />
                Recent History
              </h2>

              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-teal-200 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {booking.service}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {new Date(booking.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })} • {booking.cleaner}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-yellow-500 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < booking.rating ? 'fill-current' : ''
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm font-semibold text-teal-600">
                          +{booking.pointsEarned} pts
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                View All History
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rewards Card */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">GloPro Rewards</h3>
                <Award className="w-8 h-8" />
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">{user.points}</div>
                <div className="text-teal-100">Points Balance</div>
              </div>

              <div className="bg-white/20 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Progress to {user.tier} Elite</span>
                  <span className="text-sm font-semibold">
                    {user.points}/{user.nextReward}
                  </span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-2">
                  <div
                    className="bg-white rounded-full h-2 transition-all"
                    style={{ width: `${(user.points / user.nextReward) * 100}%` }}
                  />
                </div>
              </div>

              <button className="w-full py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                Redeem Points
              </button>
            </div>

            {/* Favorite Cleaners */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="text-teal-500" />
                Your Favorite Pros
              </h3>

              <div className="space-y-3">
                {favoriteCleaners.map((cleaner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-teal-50 rounded-lg"
                  >
                    <div>
                      <div className="font-semibold text-gray-900">
                        {cleaner.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        ⭐ {cleaner.rating} • {cleaner.jobs} washes with you
                      </div>
                    </div>
                    <button className="text-teal-600 hover:text-teal-700 font-semibold text-sm">
                      Book
                    </button>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm">
                + Add Favorite
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="text-teal-500" />
                Your Stats
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Washes</span>
                  <span className="text-2xl font-bold text-gray-900">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Member Since</span>
                  <span className="font-semibold text-gray-900">Dec 2025</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average Rating</span>
                  <span className="font-semibold text-gray-900">⭐ 5.0</span>
                </div>
              </div>
            </div>

            {/* Weather Widget */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <CloudRain className="w-6 h-6" />
                <h3 className="text-lg font-bold">Abu Dhabi Weather</h3>
              </div>

              <div className="text-4xl font-bold mb-2">32°C</div>
              <div className="text-blue-100 mb-4">Clear skies today</div>

              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-sm mb-1">Next 3 Days Forecast</div>
                <div className="flex justify-between text-sm">
                  <span>Tomorrow: 🌤️ 30°</span>
                  <span>Sat: ☀️ 33°</span>
                  <span>Sun: 🌪️ 28°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
