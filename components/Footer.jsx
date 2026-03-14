export default function Footer() {
  return (
    <footer className="bg-dark-navy py-12 px-6 border-t border-neon-purple/30">
      <div className="container mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <div className="mb-6 md:mb-0">
            <div className="flex items-center">

              <div className="mr-2 w-10 h-10 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center">
                <span className="text-2xl font-bold">U</span>
              </div>

              <h2 className="text-2xl font-heading font-bold">
                UTOPIA
              </h2>

            </div>

            <p className="mt-4 text-gray-400">
              Bhubaneswar's premium entertainment & hangout space
            </p>
          </div>


          <div className="flex space-x-6">

            <a
              href="#"
              className="text-2xl hover:text-neon-purple transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="#"
              className="text-2xl hover:text-neon-blue transition-colors"
            >
              <i className="fab fa-facebook"></i>
            </a>

            <a
              href="#"
              className="text-2xl hover:text-neon-pink transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="#"
              className="text-2xl hover:text-neon-purple transition-colors"
            >
              <i className="fab fa-youtube"></i>
            </a>

          </div>

        </div>


        <div className="mt-8 pt-8 border-t border-neon-blue/20 text-center text-gray-400">
          <p>
            © 2023 Utopia Entertainment Hub. All rights reserved. | Designed for Gen Z & Millennials
          </p>
        </div>

      </div>
    </footer>
  );
}