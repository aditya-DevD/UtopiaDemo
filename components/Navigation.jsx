function Navigation(){
    return(
         <nav className="fixed w-full bg-dark-navy/90 backdrop-blur-md z-50 border-b border-neon-purple/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
                <div className="mr-2 w-10 h-10 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center">
                    <span className="text-2xl font-bold">U</span>
                </div>
                <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">UTOPIA</h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
                <a href="#home" className="nav-link hover:text-neon-blue transition-colors">Home</a>
                <a href="#experiences" className="nav-link hover:text-neon-blue transition-colors">Experiences</a>
                <a href="#booking" className="nav-link hover:text-neon-blue transition-colors">Book Now</a>
                <a href="#gallery" className="nav-link hover:text-neon-blue transition-colors">Gallery</a>
                <a href="#contact" className="nav-link hover:text-neon-blue transition-colors">Location</a>
            </div>
            
            <button id="admin-toggle" className="px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-neon-purple/30 transition-all">
                Admin
            </button>
            
            <button id="mobile-menu-button" className="md:hidden text-2xl">
                <i className="fas fa-bars"></i>
            </button>
        </div>
        
        <div id="mobile-menu" className="md:hidden hidden bg-dark-navy px-6 py-4">
            <div className="flex flex-col space-y-4">
                <a href="#home" className="nav-link hover:text-neon-blue transition-colors">Home</a>
                <a href="#experiences" className="nav-link hover:text-neon-blue transition-colors">Experiences</a>
                <a href="#booking" className="nav-link hover:text-neon-blue transition-colors">Book Now</a>
                <a href="#gallery" className="nav-link hover:text-neon-blue transition-colors">Gallery</a>
                <a href="#contact" className="nav-link hover:text-neon-blue transition-colors">Location</a>
            </div>
        </div>
    </nav>
    )
}

export default Navigation