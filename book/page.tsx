'use client';

import { useState } from 'react';
import { Calendar, MapPin, Clock, CreditCard, Sparkles, Star, Shield } from 'lucide-react';

export default function Book() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    location: '',
    vehicle: '',
    addOns: [] as string[],
    cleaner: '',
    payment: ''
  });

  const services = [
    {
      id: 'glo-essential',
      name: 'Glo Essential',
      price: 120,
      duration: '45 mins',
      icon: Sparkles,
      description: 'Perfect for maintaining shine'
    },
    {
      id: 'glo-premium',
      name: 'Glo Premium',
      price: 280,
      duration: '2 hours',
      icon: Star,
      description: 'Complete transformation',
      popular: true
    },
    {
      id: 'desert-rescue',
      name: 'Desert Rescue',
      price: 450,
      duration: '3 hours',
      icon: Shield,
      description: 'Ultimate desert protection'
    }
  ];

  const addOns = [
    { id: 'pet-hair', name: 'Pet Hair Removal', price: 50 },
    { id: 'headlight', name: 'Headlight Restoration', price: 80 },
    { id: 'odor', name: 'Odor Elimination', price: 60 },
    { id: 'scratch', name: 'Scratch Removal', price: 150 }
  ];

  const timeSlots = [
    '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM',
    '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const cleaners = [
    { id: 'ahmed', name: 'Ahmed K.', rating: 4.9, jobs: 1250 },
    { id: 'mohammad', name: 'Mohammad R.', rating: 4.8, jobs: 980 },
    { id: 'hassan', name: 'Hassan M.', rating: 4.9, jobs: 1100 },
    { id: 'any', name: 'Any Available Pro', rating: 4.8, jobs: 0 }
  ];

  const calculateTotal = () => {
    const servicePrice = services.find(s => s.id === formData.service)?.price || 0;
    const addOnsPrice = formData.addOns.reduce((total, addonId) => {
      const addon = addOns.find(a => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);
    return servicePrice + addOnsPrice;
  };

  const toggleAddOn = (addonId: string) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addonId)
        ? prev.addOns.filter(id => id !== addonId)
        : [...prev.addOns, addonId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Book Your Glow
          </h1>
          <p className="text-gray-600">
            Choose your service and let our pros make your car shine
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= num
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {num}
                </div>
                {num < 5 && (
                  <div
                    className={`w-16 h-1 ${
                      step > num ? 'bg-teal-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between max-w-2xl mx-auto mt-2 text-sm text-gray-600">
            <span>Service</span>
            <span>Date & Time</span>
            <span>Location</span>
            <span>Add-ons</span>
            <span>Payment</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Step 1: Choose Service */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Choose Your Service
                  </h2>
                  <div className="space-y-4">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <div
                          key={service.id}
                          onClick={() => setFormData({ ...formData, service: service.id })}
                          className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                            formData.service === service.id
                              ? 'border-teal-500 bg-teal-50'
                              : 'border-gray-200 hover:border-teal-300'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Icon className="w-6 h-6 text-teal-600" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="text-lg font-semibold text-gray-900">
                                    {service.name}
                                  </h3>
                                  {service.popular && (
                                    <span className="px-2 py-1 bg-teal-500 text-white text-xs rounded-full">
                                      POPULAR
                                    </span>
                                  )}
                                </div>
                                <p className="text-gray-600 text-sm mt-1">
                                  {service.description}
                                </p>
                                <p className="text-gray-500 text-sm mt-2">
                                  Duration: {service.duration}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-teal-600">
                                AED {service.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Calendar className="text-teal-500" />
                    Choose Date & Time
                  </h2>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Time Slot
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setFormData({ ...formData, time })}
                          className={`py-3 rounded-lg font-medium transition-all ${
                            formData.time === time
                              ? 'bg-teal-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          } ${
                            time.includes('06:00') || time.includes('07:00') || time.includes('08:00')
                              ? 'ring-2 ring-orange-300'
                              : ''
                          }`}
                        >
                          {time}
                          {(time.includes('06:00') || time.includes('07:00') || time.includes('08:00')) && (
                            <div className="text-xs text-orange-600 font-normal">-10% off</div>
                          )}
                        </button>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      🌅 Book early morning slots (6-9 AM) for a 10% Heatwave Discount!
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3: Location */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <MapPin className="text-teal-500" />
                    Service Location
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Address
                      </label>
                      <textarea
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        rows={3}
                        placeholder="Enter your complete address in Abu Dhabi"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle Details
                      </label>
                      <input
                        type="text"
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        placeholder="e.g., 2023 Toyota Land Cruiser - White"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mt-6 bg-teal-50 rounded-lg p-4">
                    <h3 className="font-semibold text-teal-900 mb-2">
                      Choose Your Cleaner
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {cleaners.map((cleaner) => (
                        <button
                          key={cleaner.id}
                          onClick={() => setFormData({ ...formData, cleaner: cleaner.id })}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            formData.cleaner === cleaner.id
                              ? 'border-teal-500 bg-white'
                              : 'border-teal-200 bg-teal-50 hover:bg-white'
                          }`}
                        >
                          <div className="font-semibold text-gray-900">{cleaner.name}</div>
                          <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                            <span>⭐ {cleaner.rating}</span>
                            {cleaner.jobs > 0 && <span>• {cleaner.jobs} jobs</span>}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Add-ons */}
              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Enhance Your Service
                  </h2>
                  <div className="space-y-3">
                    {addOns.map((addon) => (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                          formData.addOns.includes(addon.id)
                            ? 'border-teal-500 bg-teal-50'
                            : 'border-gray-200 hover:border-teal-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                          </div>
                          <div className="text-lg font-bold text-teal-600">
                            +AED {addon.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    💡 Tip: Add-ons can be added during the service if needed
                  </p>
                </div>
              )}

              {/* Step 5: Payment */}
              {step === 5 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <CreditCard className="text-teal-500" />
                    Payment Details
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="border-2 border-gray-200 rounded-lg p-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="card"
                          checked={formData.payment === 'card'}
                          onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                          className="w-4 h-4 text-teal-500"
                        />
                        <span className="font-medium text-gray-900">Credit / Debit Card</span>
                      </label>
                    </div>

                    <div className="border-2 border-gray-200 rounded-lg p-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="cash"
                          checked={formData.payment === 'cash'}
                          onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                          className="w-4 h-4 text-teal-500"
                        />
                        <span className="font-medium text-gray-900">Cash on Completion</span>
                      </label>
                    </div>
                  </div>

                  <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-sm">
                      ✓ Your booking is protected by our satisfaction guarantee
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                )}
                {step < 5 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={
                      (step === 1 && !formData.service) ||
                      (step === 2 && (!formData.date || !formData.time)) ||
                      (step === 3 && (!formData.location || !formData.vehicle || !formData.cleaner))
                    }
                    className="ml-auto px-8 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    disabled={!formData.payment}
                    className="ml-auto px-8 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Confirm Booking
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Booking Summary
              </h3>
              
              <div className="space-y-4 text-sm">
                {formData.service && (
                  <div>
                    <div className="text-gray-600">Service</div>
                    <div className="font-semibold text-gray-900">
                      {services.find(s => s.id === formData.service)?.name}
                    </div>
                  </div>
                )}

                {formData.date && formData.time && (
                  <div>
                    <div className="text-gray-600">Date & Time</div>
                    <div className="font-semibold text-gray-900">
                      {new Date(formData.date).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="font-semibold text-gray-900">{formData.time}</div>
                  </div>
                )}

                {formData.cleaner && formData.cleaner !== 'any' && (
                  <div>
                    <div className="text-gray-600">Your Pro</div>
                    <div className="font-semibold text-gray-900">
                      {cleaners.find(c => c.id === formData.cleaner)?.name}
                    </div>
                  </div>
                )}

                {formData.addOns.length > 0 && (
                  <div>
                    <div className="text-gray-600 mb-2">Add-ons</div>
                    {formData.addOns.map(addonId => {
                      const addon = addOns.find(a => a.id === addonId);
                      return addon ? (
                        <div key={addonId} className="flex justify-between text-gray-900">
                          <span>{addon.name}</span>
                          <span>AED {addon.price}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
              </div>

              <div className="border-t mt-6 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    AED {calculateTotal()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold text-teal-600 mt-4">
                  <span>Total</span>
                  <span>AED {calculateTotal()}</span>
                </div>
              </div>

              <div className="mt-6 bg-teal-50 rounded-lg p-4">
                <div className="text-sm text-teal-900">
                  <strong>✨ What's Included:</strong>
                  <ul className="mt-2 space-y-1 text-teal-800">
                    <li>• Real-time checkpoint photos</li>
                    <li>• Weather-smart scheduling</li>
                    <li>• Satisfaction guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
