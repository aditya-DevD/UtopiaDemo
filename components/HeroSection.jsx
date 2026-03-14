function HeroSection(){
    return(
        <section id="home" className="pt-24 pb-20 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-dark-charcoal via-dark-navy to-dark-charcoal z-0"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl z-0"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl z-0"></div>
            
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                            <span className="block">Eat.</span>
                            <span className="block">Play.</span>
                            <span className="block bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent">Repeat.</span>
                        </h2>
                        <p className="text-xl mb-8 text-gray-300">
                            Bhubaneswar's premium entertainment & hangout space for Gen Z & millennials
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <span className="px-4 py-2 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30">🎯 Bowling</span>
                            <span className="px-4 py-2 rounded-full bg-neon-blue/20 text-neon-blue border border-neon-blue/30">🎮 PlayStation</span>
                            <span className="px-4 py-2 rounded-full bg-neon-pink/20 text-neon-pink border border-neon-pink/30">🥊 Punching</span>
                            <span className="px-4 py-2 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30">🏀 Basketball</span>
                            <span className="px-4 py-2 rounded-full bg-neon-blue/20 text-neon-blue border border-neon-blue/30">🍹 Hookah & Mocktails</span>
                        </div>
                        <a href="#booking" className="inline-block px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full font-bold text-lg hover:shadow-xl hover:shadow-neon-purple/30 transition-all transform hover:-translate-y-1">
                            Book Your Slot <i className="ml-2 fas fa-arrow-right"></i>
                        </a>
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-neon-purple/50 overflow-hidden animate-pulse-glow">
                                <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Utopia Lounge" className="w-full h-full object-cover"/>
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-neon-pink to-neon-purple rounded-2xl rotate-12 animate-float"></div>
                            <div
                            className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl -rotate-12 animate-float"
                            style={{ animationDelay: "1s" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;