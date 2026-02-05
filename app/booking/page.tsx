'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiCheck, FiChevronRight, FiCalendar, FiMapPin, FiCreditCard } from 'react-icons/fi'

const services = [
  { id: 'essential', name: 'Essential Hand Wash', price: 150, duration: 45, points: 15 },
  { id: 'premium', name: 'Premium Detail', price: 350, duration: 120, points: 35 },
  { id: 'interior', name: 'Interior Sanctuary', price: 280, duration: 90, points: 28 },
  { id: 'desert', name: 'Desert Shield', price: 220, duration: 60, points: 22 },
  { id: 'quick', name: 'Quick Rinse', price: 80, duration: 20, points: 8 },
]

const vehicles = [
  { id: '1', name: '2023 BMW 7 Series', plate: 'AD-12345' },
  { id: '2', name: '2021 Mercedes S-Class', plate: 'AD-67890' },
]

const timeSlots = [
  { time: '08:00 AM', available: true, discount: 15 },
  { time: '09:00 AM', available: true, discount: 15 },
  { time: '10:00 AM', available: true },
  { time: '11:00 AM', available: false },
  { time: '12:00 PM', available: true },
  { time: '02:00 PM', available: true },
  { time: '03:00 PM', available: true },
  { time: '04:00 PM', available: true },
  { time: '05:00 PM', available: true },
]

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const [selectedVehicle, setSelectedVehicle] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [location, setLocation] = useState('')

  const totalSteps = 5

  const selectedServiceData = services.find((s) => s.id === selectedService)
  const selectedTimeData = timeSlots.find((t) => t.time === selectedTime)
  
  const calculateTotal = () => {
    if (!selectedServiceData) return 0
    const discount = selectedTimeData?.discount || 0
    return selectedServiceData.price * (1 - discount / 100)
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    s <= step
                      ? 'bg-coral text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {s < step ? <FiCheck /> : s}
                </div>
                {s < totalSteps && (
                  <div
                    className={`w-12 h-1 mx-2 transition-colors ${
                      s < step ? 'bg-coral' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-neutral-light">
            <span>Service</span>
            <span>Vehicle</span>
            <span>Date & Time</span>
            <span>Location</span>
            <span>Payment</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="card">
              {/* Step 1: Select Service */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-semibold text-neutral mb-6">
                    Choose Your Service
                  </h2>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`w-full text-left p-4 rounded-button border-2 transition-all ${
                          selectedService === service.id
                            ? 'border-coral bg-coral/5'
                            : 'border-gray-200 hover:border-coral/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-neutral mb-1">
                              {service.name}
                            </p>
                            <p className="text-sm text-neutral-light">
                              {service.duration} minutes • {service.points} points
                            </p>
                          </div>
                          <p className="text-2xl font-bold text-neutral">
                            AED {service.price}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Select Vehicle */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-semibold text-neutral mb-6">
                    Select Your Vehicle
                  </h2>
                  <div className="space-y-4">
                    {vehicles.map((vehicle) => (
                      <button
                        key={vehicle.id}
                        onClick={() => setSelectedVehicle(vehicle.id)}
                        className={`w-full text-left p-4 rounded-button border-2 transition-all ${
                          selectedVehicle === vehicle.id
                            ? 'border-coral bg-coral/5'
                            : 'border-gray-200 hover:border-coral/50'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-4xl">🚗</div>
                          <div>
                            <p className="font-semibold text-neutral">
                              {vehicle.name}
                            </p>
                            <p className="text-sm text-neutral-light">
                              {vehicle.plate}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                    <button className="w-full p-4 rounded-button border-2 border-dashed border-gray-300 hover:border-coral text-coral transition-colors">
                      + Add New Vehicle
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Date & Time */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-semibold text-neutral mb-6">
                    Choose Date & Time
                  </h2>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-neutral mb-2">
                      Select Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="input-field"
                    />
                  </div>

                  {selectedDate && (
                    <div>
                      <label className="block text-sm font-medium text-neutral mb-3">
                        Available Time Slots
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.time}
                            onClick={() => slot.available && setSelectedTime(slot.time)}
                            disabled={!slot.available}
                            className={`relative p-3 rounded-button border-2 transition-all ${
                              !slot.available
                                ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                                : selectedTime === slot.time
                                ? 'border-coral bg-coral/5 text-coral'
                                : 'border-gray-200 hover:border-coral'
                            }`}
                          >
                            {slot.discount && (
                              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                                -{slot.discount}%
                              </div>
                            )}
                            <p className="font-medium text-sm">{slot.time}</p>
                            {slot.discount && (
                              <p className="text-xs text-green-600 mt-1">
                                Heatwave Discount
                              </p>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 4: Location */}
              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-semibold text-neutral mb-6">
                    Service Location
                  </h2>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-neutral mb-2">
                      Enter Your Address
                    </label>
                    <textarea
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Building name, street, area..."
                      rows={3}
                      className="input-field"
                    />
                  </div>

                  <div className="bg-gray-100 rounded-button p-8 text-center">
                    <FiMapPin className="text-4xl text-neutral-light mx-auto mb-2" />
                    <p className="text-neutral-light">
                      Map picker placeholder
                    </p>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-neutral mb-2">
                      Special Instructions (Optional)
                    </label>
                    <textarea
                      placeholder="Parking instructions, gate code, etc."
                      rows={2}
                      className="input-field"
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Payment */}
              {step === 5 && (
                <div>
                  <h2 className="text-2xl font-semibold text-neutral mb-6">
                    Payment Details
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="input-field"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div className="bg-teal/10 rounded-button p-4 mt-6">
                      <p className="text-sm text-teal font-medium">
                        🔒 Your payment is secure and encrypted
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                )}
                {step < totalSteps ? (
                  <button
                    onClick={() => {
                      if (
                        (step === 1 && selectedService) ||
                        (step === 2 && selectedVehicle) ||
                        (step === 3 && selectedDate && selectedTime) ||
                        (step === 4 && location)
                      ) {
                        setStep(step + 1)
                      }
                    }}
                    disabled={
                      (step === 1 && !selectedService) ||
                      (step === 2 && !selectedVehicle) ||
                      (step === 3 && (!selectedDate || !selectedTime)) ||
                      (step === 4 && !location)
                    }
                    className="btn-primary ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                    <FiChevronRight className="inline ml-1" />
                  </button>
                ) : (
                  <button className="btn-primary ml-auto">
                    Confirm Booking
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="md:col-span-1">
            <div className="card sticky top-24">
              <h3 className="font-semibold text-neutral mb-4">
                Booking Summary
              </h3>

              <div className="space-y-3 text-sm">
                {selectedServiceData && (
                  <div className="pb-3 border-b border-gray-200">
                    <p className="text-neutral-light mb-1">Service</p>
                    <p className="font-semibold text-neutral">
                      {selectedServiceData.name}
                    </p>
                    <p className="text-xs text-neutral-light mt-1">
                      {selectedServiceData.duration} minutes
                    </p>
                  </div>
                )}

                {selectedVehicle && (
                  <div className="pb-3 border-b border-gray-200">
                    <p className="text-neutral-light mb-1">Vehicle</p>
                    <p className="font-semibold text-neutral">
                      {vehicles.find((v) => v.id === selectedVehicle)?.name}
                    </p>
                  </div>
                )}

                {selectedDate && selectedTime && (
                  <div className="pb-3 border-b border-gray-200">
                    <p className="text-neutral-light mb-1">Date & Time</p>
                    <p className="font-semibold text-neutral">
                      {new Date(selectedDate).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="font-semibold text-neutral">{selectedTime}</p>
                    {selectedTimeData?.discount && (
                      <p className="text-green-600 text-xs mt-1">
                        🌅 Heatwave Discount: -{selectedTimeData.discount}%
                      </p>
                    )}
                  </div>
                )}

                {location && (
                  <div className="pb-3 border-b border-gray-200">
                    <p className="text-neutral-light mb-1">Location</p>
                    <p className="font-semibold text-neutral text-xs">
                      {location}
                    </p>
                  </div>
                )}
              </div>

              {selectedServiceData && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-light">Subtotal</span>
                    <span className="font-medium text-neutral">
                      AED {selectedServiceData.price}
                    </span>
                  </div>
                  {selectedTimeData?.discount && (
                    <div className="flex justify-between mb-2 text-green-600">
                      <span>Discount</span>
                      <span>
                        -AED{' '}
                        {(selectedServiceData.price * selectedTimeData.discount) / 100}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold text-neutral pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>AED {calculateTotal().toFixed(0)}</span>
                  </div>
                  <p className="text-xs text-teal mt-2">
                    You'll earn {selectedServiceData.points} points
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
