'use client';

import Link from 'next/link';
import { useCart } from '../../store/cart.js';
import { useState } from 'react';

export default function Header() {
  const { items } = useCart();
  const [showCart, setShowCart] = useState(false);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with Image */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img 
              src="https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-6/242692774_2982017112056940_2866878707729737438_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=R_9Z6UCSJWMQ7kNvwFQFfTe&_nc_oc=AdpSIY-0c67M5ju13ajqXOHC-v0dFOg8KipSdrH6tPaq7Dp5PN22TZPZaCkCRwwPQPo&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=9-cDrHIuyjzHlvwNOBAcfQ&_nc_ss=7b2a8&oh=00_Af5kGe63QWwtXTAX27-PMaFexBR8Gfw-xhWkNco4DTjv7w&oe=6A0AA6F1"
              alt="KSM Logo"
              className="h-14 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link href="#products" className="hover:text-primary transition font-medium">
              Produtos
            </Link>
            <Link href="#about" className="hover:text-primary transition font-medium">
              Sobre
            </Link>
            <Link href="#contact" className="hover:text-primary transition font-medium">
              Contacto
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative bg-primary hover:bg-accent text-white p-3 rounded-lg transition-all duration-200 transform hover:scale-110"
              aria-label="Ver carrinho"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>
        </div>

        {/* Cart Dropdown */}
        {showCart && (
          <div className="mt-4 bg-gray-900 p-4 rounded-lg max-h-64 overflow-y-auto fade-in">
            {items.length === 0 ? (
              <p className="text-gray-400">O carrinho está vazio</p>
            ) : (
              <>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-2 border-b border-gray-700"
                  >
                    <div className="flex-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-400">
                        {item.quantity}x €{item.price.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => useCart.getState().removeItem(item.id)}
                      className="ml-4 text-red-500 hover:text-red-400 transition"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="font-bold text-lg mb-3">
                    Total: €{items
                      .reduce((sum, item) => sum + item.price * item.quantity, 0)
                      .toFixed(2)}
                  </p>
                  <button className="w-full btn-primary">
                    Finalizar Compra
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
