import { useState } from "react";

export default function BookingSection() {
  const [step, setStep] = useState(1);

  return (
    <section id="booking" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-4">
          Book Your Slot
        </h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Fast, smooth, zero-friction booking experience with real-time
          availability
        </p>

        <div className="max-w-4xl mx-auto bg-dark-navy/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-neon-blue/30">

          {/* Steps indicator */}
          <div className="flex flex-col md:flex-row justify-between mb-10">
            {[1,2,3,4].map((s)=>(
              <div key={s} className="flex-1 text-center mb-6 md:mb-0">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3
                  ${step >= s
                    ? "bg-gradient-to-r from-neon-purple to-neon-blue"
                    : "bg-dark-navy border-2 border-neon-blue/30"}
                  `}
                >
                  <span className="font-bold">{s}</span>
                </div>

                <h4 className={`font-bold ${step < s ? "text-gray-400" : ""}`}>
                  {s === 1 && "Select Experience"}
                  {s === 2 && "Pick Date & Time"}
                  {s === 3 && "Enter Details"}
                  {s === 4 && "Confirm & Pay"}
                </h4>
              </div>
            ))}
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Choose Your Experience
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-neon-blue/30 rounded-xl cursor-pointer hover:bg-dark-charcoal">
                  Bowling
                </div>

                <div className="p-6 border border-neon-blue/30 rounded-xl cursor-pointer hover:bg-dark-charcoal">
                  VR Gaming
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full font-bold"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Select Date & Time Slot
              </h3>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {["4 PM","5 PM","6 PM","7 PM","8 PM"].map((t)=>(
                  <div
                    key={t}
                    className="p-3 border border-neon-blue/30 rounded-lg text-center cursor-pointer hover:bg-dark-charcoal"
                  >
                    {t}
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-8 py-3 border border-neon-blue/30 rounded-full"
                >
                  Back
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Your Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  placeholder="Full Name"
                  className="p-4 bg-dark-charcoal border border-neon-blue/30 rounded-xl"
                />

                <input
                  placeholder="Email"
                  className="p-4 bg-dark-charcoal border border-neon-blue/30 rounded-xl"
                />

                <input
                  placeholder="Phone"
                  className="p-4 bg-dark-charcoal border border-neon-blue/30 rounded-xl"
                />

                <input
                  placeholder="Special Requests"
                  className="p-4 bg-dark-charcoal border border-neon-blue/30 rounded-xl"
                />
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="px-8 py-3 border border-neon-blue/30 rounded-full"
                >
                  Back
                </button>

                <button
                  onClick={() => setStep(4)}
                  className="px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">
                Confirm Booking
              </h3>

              <p className="mb-6">
                Secure payment powered by Razorpay
              </p>

              <button className="px-12 py-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full text-lg font-bold">
                Pay Now
              </button>

              <div className="mt-8">
                <button
                  onClick={() => setStep(3)}
                  className="px-8 py-3 border border-neon-blue/30 rounded-full"
                >
                  Back
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}