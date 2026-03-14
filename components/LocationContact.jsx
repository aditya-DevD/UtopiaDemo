export default function LocationContact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">

        <h2 className="text-4xl font-heading font-bold text-center mb-4">
          Find Us in Bhubaneswar
        </h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Visit us for an unforgettable experience with friends
        </p>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Map Section */}
          <div className="lg:w-2/3">
            <div className="bg-dark-navy/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-neon-blue/30 h-96">

              <div className="w-full h-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
                <div className="text-center">

                  <i className="fas fa-map-marker-alt text-6xl text-neon-blue mb-4"></i>

                  <p className="text-xl font-bold">
                    Utopia Entertainment Hub
                  </p>

                  <p className="text-gray-300">
                    Bhubaneswar, Odisha
                  </p>

                </div>
              </div>

            </div>
          </div>


          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-dark-navy/70 backdrop-blur-sm rounded-2xl p-8 border border-neon-purple/30">

              <h3 className="text-2xl font-bold mb-6">
                Visit Utopia
              </h3>

              <div className="space-y-6">

                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>

                  <div>
                    <h4 className="font-bold">Address</h4>

                    <p className="text-gray-300">
                      Plot No. 123, Infocity Road
                      <br />
                      Chandrasekharpur, Bhubaneswar
                      <br />
                      Odisha 751024
                    </p>
                  </div>
                </div>


                {/* Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center mr-4">
                    <i className="fas fa-clock"></i>
                  </div>

                  <div>
                    <h4 className="font-bold">Opening Hours</h4>

                    <p className="text-gray-300">
                      Monday - Thursday: 4 PM - 1 AM
                      <br />
                      Friday - Sunday: 12 PM - 2 AM
                    </p>
                  </div>
                </div>


                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-pink to-neon-blue flex items-center justify-center mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>

                  <div>
                    <h4 className="font-bold">Contact Us</h4>

                    <p className="text-gray-300">
                      +91 98765 43210
                      <br />
                      hello@utopiabhubaneswar.com
                    </p>
                  </div>
                </div>


                {/* Instagram */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center mr-4">
                    <i className="fab fa-instagram"></i>
                  </div>

                  <div>
                    <h4 className="font-bold">Follow Us</h4>

                    <p className="text-gray-300">
                      @utopia_bhubaneswar
                      <br />
                      #UtopiaBhubaneswar
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}