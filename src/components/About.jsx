'use client';

export default function About() {
  const services = [
    {
      icon: '🚚',
      title: 'Entrega Rápida',
      description: 'Receba os seus produtos em sua casa! (Tempo de Entrega por consulta)',
    },
    {
      icon: '🛡️',
      title: 'Garantia de Qualidade',
      description: 'Todos os produtos com garantia de fabricante',
    },
    {
      icon: '💬',
      title: 'Suporte Especializado',
      description: 'Equipa pronta para ajudar com qualquer dúvida',
    },
    {
      icon: '💳',
      title: 'Formas de Pagamento',
      description: 'Múltiplas opções: cartão, transferência, MB Way',
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              Sobre a KSM
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Com mais de 15 anos de experiência no mercado, a KSM é a sua loja de confiança para tudo relacionado com autopeças e acessórios automóveis.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Somos uma pequena empresa local com grande paixão por qualidade e atendimento. Cada produto é selecionado cuidadosamente para garantir a melhor relação qualidade-preço.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Localizada em Gondomar, servimos clientes em toda a região do Porto e arredores. Visite-nos ou faça o seu pedido online!
            </p>

            <a
              href="#contact"
              className="btn-primary inline-block"
            >
              Conhecer Mais →
            </a>
          </div>

          {/* Right: Services Grid */}
          <div className="grid grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 fade-in"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-gradient-to-b from-primary/10 to-transparent rounded-lg">
            <p className="text-4xl font-bold text-primary mb-2">15+</p>
            <p className="text-gray-600 font-semibold">Anos de Experiência</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-primary/10 to-transparent rounded-lg">
            <p className="text-4xl font-bold text-primary mb-2">1000+</p>
            <p className="text-gray-600 font-semibold">Clientes Satisfeitos</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-primary/10 to-transparent rounded-lg">
            <p className="text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-gray-600 font-semibold">Produtos Disponíveis</p>
          </div>
          <div className="p-6 bg-gradient-to-b from-primary/10 to-transparent rounded-lg">
            <p className="text-4xl font-bold text-primary mb-2">24h</p>
            <p className="text-gray-600 font-semibold">Entrega Rápida</p>
          </div>
        </div>
      </div>
    </section>
  );
}
