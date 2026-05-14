'use client';

import { useState, useEffect } from 'react';

const photos = [
  {
    id: 1,
    url: 'https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-6/487313408_1212924697507857_6292072472811661436_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GHuCA7vCRFUQ7kNvwHqOFUA&_nc_oc=AdqAW0L3Q1J0YQ783yKU5B1nyyVSIgY9tDFx_pCnKVk7kDj8QctFkaYqwn64c7QteJA&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=M3NV8HoA4cwxmOJpRt8lhg&_nc_ss=7b2a8&oh=00_Af5QsR3EHGB0d6Y8f9pXJraTbjGNUbrGyAbbexBCq1nzqQ&oe=6A0AA0D4',
    alt: 'KSM - Produtos e Acessórios Auto 1'
  },
  {
    id: 2,
    url: 'https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-6/573300332_1407332034733788_3898436306107381653_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wBErJoey4rwQ7kNvwGW38UH&_nc_oc=AdoSxZHz5HXQfZByfQ6LVSqQUlPsWEsfp5ogu3-exf17ftBzefn4_rjxzL_pYWhpVD8&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=xnibtUbCIEvYmYpnzrs4Kg&_nc_ss=7b2a8&oh=00_Af7lapqJZAxNI0jsXMAPoJ50eYMihHZNkzcfP_sGFTGJ8Q&oe=6A0A8F7D',
    alt: 'KSM - Loja de Baterias 2'
  },
  {
    id: 3,
    url: 'https://scontent-lis1-1.xx.fbcdn.net/v/t1.6435-9/122464297_2736002426658411_7332119968972094810_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=W5X1GLYMq8YQ7kNvwHt6w-f&_nc_oc=AdqGz-GBfWrVaEsm_vXOP79h6KYB4lV1uN4Jg9DWdvuaq5f47GoZWToCQfuLmCLOkXU&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=CT0vXvwtIi6Gpa45Rt_y5g&_nc_ss=7b2a8&oh=00_Af7kzbj4mJZdnwQef7b6e_KYSbg2yOvZrEtdNv1YSvxp4w&oe=6A2C3CB5',
    alt: 'KSM - Acessórios Auto 3'
  },
  {
    id: 4,
    url: 'https://scontent-lis1-1.xx.fbcdn.net/v/t1.6435-9/70689963_2398053847119939_484877330699780096_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ostql6UgUxwQ7kNvwGVsGIP&_nc_oc=AdopBKSYi_3XgYLV7OdCFcqvTNuqqDKglxex0OgXgKh9ZQY5Uv6jjzy0Fxvkk5lwR4A&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=Hd6pyPNsBu6AaaFhd3AGTQ&_nc_ss=7b2a8&oh=00_Af5HeT-rTnzaunsELjN8Gs0I3G5CW0TGUm04PoAdDuLFkg&oe=6A2C1A12',
    alt: 'KSM - Tapetes Auto 4'
  },
];

export default function Hero() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-r from-dark via-gray-900 to-dark text-white py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div className="fade-in flex flex-col items-center text-center">
            {/* Animated Logo - Centered */}
            <div className="mb-6 animate-bounce">
              <img 
                src="https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-6/242692774_2982017112056940_2866878707729737438_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=R_9Z6UCSJWMQ7kNvwFQFfTe&_nc_oc=AdpSIY-0c67M5ju13ajqXOHC-v0dFOg8KipSdrH6tPaq7Dp5PN22TZPZaCkCRwwPQPo&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=9-cDrHIuyjzHlvwNOBAcfQ&_nc_ss=7b2a8&oh=00_Af5kGe63QWwtXTAX27-PMaFexBR8Gfw-xhWkNco4DTjv7w&oe=6A0AA6F1"
                alt="KSM Logo"
                className="h-20 w-auto drop-shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Tudo para o seu carro
            </h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Baterias de qualidade, acessórios premium e peças confiáveis. Temos tudo o que você precisa para manter seu carro em perfeito estado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProducts}
                className="btn-primary"
              >
                Ver Produtos 🛒
              </button>
              <a
                href="#contact"
                className="btn-outline"
              >
                Contacte-nos
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-gray-400">Anos de experiência</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">1000+</p>
                <p className="text-gray-400">Clientes satisfeitos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-gray-400">Produtos</p>
              </div>
            </div>
          </div>

          {/* Right: Photo Slider */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={photos[currentPhoto].url}
                alt={photos[currentPhoto].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent"></div>

              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-accent text-white p-3 rounded-full transition-all duration-200 z-20"
                aria-label="Foto anterior"
              >
                ❮
              </button>

              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-accent text-white p-3 rounded-full transition-all duration-200 z-20"
                aria-label="Próxima foto"
              >
                ❯
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {photos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPhoto(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === currentPhoto
                        ? 'bg-primary w-8'
                        : 'bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`Foto ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="absolute top-4 right-4 bg-dark/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {currentPhoto + 1}/{photos.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
