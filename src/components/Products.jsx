'use client';

import { useCart } from '../../store/cart.js';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Bateria de Carro 12V 60Ah',
    category: 'Baterias',
    price: 89.99,
    description: 'Bateria premium de 60Ah, ideal para carros convencionais. Oferece partidas rápidas e confiáveis em todas as condições.',
    emoji: '🔋',
    badge: 'Populares',
    specs: ['12V', '60Ah', 'Garantia 2 anos', 'Entrega rápida'],
  },
  {
    id: 2,
    name: 'Tapete de Carro Premium',
    category: 'Acessórios',
    price: 45.99,
    description: 'Tapete antiderrapante de alta qualidade. Proteção completa do interior com design elegante e confortável.',
    emoji: '🟫',
    badge: 'Nova chegada',
    specs: ['Antiderrapante', 'Fácil de limpar', '4 peças', 'Design elegante'],
  },
  {
    id: 3,
    name: 'Placa Matrícula Personalizada',
    category: 'Placas',
    price: 25.99,
    description: 'Placa de matrícula registada e homologada. Atende a todas as especificações legais de Portugal.',
    emoji: '🏷️',
    badge: 'Homologada',
    specs: ['Homologada', 'Reflectiva', 'Instalação fácil', 'Garantia legal'],
  },
];

export default function Products() {
  const { addItem } = useCart();
  const [addedNotification, setAddedNotification] = useState(null);

  const handleAddToCart = (product) => {
    addItem(product);
    setAddedNotification(product.id);
    setTimeout(() => setAddedNotification(null), 2000);
  };

  return (
    <section
      id="products"
      className="py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selecione os produtos que precisa. Qualidade garantida, preços competitivos.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card overflow-hidden fade-in"
            >
              {/* Product Image Area */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden group">
                <div className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
                  {product.emoji}
                </div>
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-dark mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="mb-4 grid grid-cols-2 gap-2">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="text-xs text-gray-500 flex items-center gap-1">
                      <span className="text-primary">✓</span> {spec}
                    </div>
                  ))}
                </div>

                {/* Price and Button */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">Preço</p>
                      <p className="text-3xl font-bold text-primary">
                        €{product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full btn-primary mt-4"
                  >
                    {addedNotification === product.id ? '✓ Adicionado!' : 'Adicionar ao Carrinho'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="#contact" className="btn-secondary">
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
}
