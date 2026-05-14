'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

export default function Contact() {
  const [state, handleSubmit] = useForm('xrejvrwv');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Phone validation: must start with 9 or 2, and be exactly 9 digits
  const validatePhone = (phone) => {
    if (!phone) return true; // Allow empty (not required)
    const phoneRegex = /^[92]\d{8}$/;
    return phoneRegex.test(phone);
  };

  // Email validation: must contain @
  const validateEmail = (email) => {
    if (!email) return false; // Email is required
    return email.includes('@');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Get form values
    const phoneInput = e.target.phone.value;
    const emailInput = e.target.email.value;

    // Reset errors
    setPhoneError('');
    setEmailError('');

    // Validate phone if provided
    if (phoneInput && !validatePhone(phoneInput)) {
      setPhoneError('Formato inválido. Use: 9XXXXXXXX (9 dígitos começando com 9 ou 2)');
      return;
    }

    // Validate email
    if (!validateEmail(emailInput)) {
      setEmailError('Email inválido. Deve conter o caractere @ (exemplo: seu@email.com)');
      return;
    }

    // All validations passed - submit the form
    await handleSubmit(e);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Contacte-nos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tem dúvidas? Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-dark mb-8">
              Informações de Contacto
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-3xl">📞</div>
                <div>
                  <p className="font-bold text-dark text-lg">Telemóvel</p>
                  <a
                    href="tel:+351919658113"
                    className="text-primary font-semibold hover:underline"
                  >
                    +351 919 658 113
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Seg-Sex: 9h-18h | Sáb: 10h-14h</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-3xl">✉️</div>
                <div>
                  <p className="font-bold text-dark text-lg">Email</p>
                  <a
                    href="mailto:ksmlda@hotmail.com"
                    className="text-primary font-semibold hover:underline"
                  >
                    ksmlda@hotmail.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Resposta em até 24 horas</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="font-bold text-dark text-lg">Localização</p>
                  <p className="text-gray-600 font-semibold">
                    Rua São Pedro 510 RC<br />
                    Gondomar, 4510-431<br />
                    Portugal
                  </p>
                  <a
                    href="https://maps.app.goo.gl/4W7NJ3Pp2ckazNrq5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline text-sm mt-2 inline-block"
                  >
                    Abrir no Google Maps →
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                <div className="text-3xl">👥</div>
                <div>
                  <p className="font-bold text-dark text-lg">Redes Sociais</p>
                  <a
                    href="https://www.facebook.com/people/KSM-Com%C3%A9rcio-de-Baterias-Tapetes-Auto-Unip-Lda/100063710131083/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Siga-nos no Facebook →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form with Formspree */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-dark mb-8">
              Envie uma Mensagem
            </h3>

            {/* Success Message */}
            {state.succeeded && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✓ Mensagem enviada com sucesso! Obrigado pelo contacto.
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    emailError
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-primary'
                  }`}
                  placeholder="seu@email.com"
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-2">⚠️ {emailError}</p>
                )}
                <ValidationError field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    phoneError
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-primary'
                  }`}
                  placeholder="9XXXXXXXX"
                />
                {phoneError && (
                  <p className="text-red-500 text-sm mt-2">⚠️ {phoneError}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                  placeholder="Descreva a sua dúvida ou pedido..."
                ></textarea>
                <ValidationError field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? '⏳ Enviando...' : 'Enviar Mensagem'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Responderemos a sua mensagem assim que possível.
              </p>
            </form>
          </div>
        </div>

        {/* Embedded Google Maps Section */}
        <div className="fade-in mt-12">
          <h3 className="text-2xl font-bold text-dark mb-6 text-center">
            Localização no Mapa
          </h3>
          <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: '400px' }}>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.7892356789!2d-8.510741!3d41.1561553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246300593dd2f9%3A0xe13e61bfa06091fa!2sKsm%20Com%C3%A9rcio%20De%20Baterias%20E%20Autorradios!5e0!3m2!1sen!2spt!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KSM - Localização no Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
