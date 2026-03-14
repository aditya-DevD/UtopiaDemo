function Experience(){

    const experiences = [
  {
    id: 1,
    icon: "🎯",
    title: "Bowling Alley",
    description:
      "State-of-the-art bowling lanes with neon lighting and competitive scoring.",
    price: "₹600 / hour",
    color: "neon-purple",
    experience: "Bowling",
  },
  {
    id: 2,
    icon: "🎮",
    title: "PS5 Gaming Zone",
    description:
      "Latest PS5 consoles with 100+ games. 4K screens and gaming chairs.",
    price: "₹400 / hour",
    color: "neon-blue",
    experience: "PS5 Gaming",
  },
  {
    id: 3,
    icon: "🥊",
    title: "Punching Arena",
    description:
      "Release your stress with our high-tech punching bags and gloves.",
    price: "₹350 / 30 min",
    color: "neon-pink",
    experience: "Punching Arena",
  },
  {
    id: 4,
    icon: "🏀",
    title: "Basketball Court",
    description:
      "Indoor basketball with professional hoops and scoring systems.",
    price: "₹500 / hour",
    color: "neon-purple",
    experience: "Basketball",
  },
  {
    id: 5,
    icon: "🍹",
    title: "Premium Hookah Lounge",
    description:
      "Exotic hookah flavors in a luxurious lounge setting.",
    price: "₹800 / session",
    color: "neon-blue",
    experience: "Hookah Lounge",
  },
  {
    id: 6,
    icon: "🍸",
    title: "Mocktail Bar",
    description:
      "Artisanal mocktails crafted by expert mixologists.",
    price: "₹250 / drink",
    color: "neon-pink",
    experience: "Mocktail Bar",
  },
];

    return(
        <section id="experiences" class="py-20 px-6 bg-dark-navy/50">
            <div class="container mx-auto">
                <h2 class="text-4xl font-heading font-bold text-center mb-4">Our Premium Experiences</h2>
                <p class="text-center text-gray-300 mb-12 max-w-2xl mx-auto">Choose your adventure at Utopia - each experience is designed for maximum fun and Instagrammable moments</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => (
    <div
      key={exp.id}
      className="experience-card bg-dark-charcoal/70 backdrop-blur-sm rounded-2xl p-6 border border-neon-purple/20 hover:border-neon-purple/50 transition-all hover:-translate-y-2"
    >
      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink flex items-center justify-center mb-6">
        <span className="text-2xl">{exp.icon}</span>
      </div>

      <h3 className="text-2xl font-bold mb-3">{exp.title}</h3>

      <p className="text-gray-300 mb-6">{exp.description}</p>

      <div className="flex justify-between items-center">
        <span className="text-neon-purple font-bold">{exp.price}</span>

        <button
          className="px-4 py-2 bg-neon-purple/20 text-neon-purple rounded-full hover:bg-neon-purple/30 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
    ))}
    </div>
        </section>

    )
}

export default Experience