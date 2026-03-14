const images = [
  {
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    alt: "Utopia Lounge"
  },
  {
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    alt: "Bowling Alley"
  },
  {
    src: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
    alt: "Gaming Zone"
  },
  {
    src: "https://images.unsplash.com/photo-1518834103327-0d0b7d4d5e5f",
    alt: "Basketball Court"
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
    alt: "Hookah Lounge"
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
    alt: "Mocktail Bar"
  },
  {
    src: "https://images.unsplash.com/photo-1544468266-6a8948007d3b",
    alt: "Punching Arena"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    alt: "Social Area"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-6 bg-dark-navy/50">
      <div className="container mx-auto">

        <h2 className="text-4xl font-heading font-bold text-center mb-4">
          Instagrammable Moments
        </h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Check out the vibe at Utopia through these stunning visuals
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {images.map((img, index) => (
            <div
              key={index}
              className="gallery-item overflow-hidden rounded-xl"
            >
              <img
                src={`${img.src}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                alt={img.alt}
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}