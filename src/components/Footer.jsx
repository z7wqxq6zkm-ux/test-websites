'use client';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-6/242692774_2982017112056940_2866878707729737438_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=R_9Z6UCSJWMQ7kNvwFQFfTe&_nc_oc=AdpSIY-0c67M5ju13ajqXOHC-v0dFOg8KipSdrH6tPaq7Dp5PN22TZPZaCkCRwwPQPo&_nc_zt=23&_nc_ht=scontent-lis1-1.xx&_nc_gid=9-cDrHIuyjzHlvwNOBAcfQ&_nc_ss=7b2a8&oh=00_Af5kGe63QWwtXTAX27-PMaFexBR8Gfw-xhWkNco4DTjv7w&oe=6A0AA6F1"
                alt="KSM Logo"
                className="h-12 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              KSM - Comércio de Baterias, Tapetes Auto Unip. Lda - Sua loja de confiança para baterias, acessórios e peças de qualidade desde 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#products" className="hover:text-primary transition">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:+351919658113" className="hover:text-primary transition">
                  +351 919 658 113
                </a>
              </li>
              <li>
                <a href="mailto:ksmlda@hotmail.com" className="hover:text-primary transition">
                  ksmlda@hotmail.com
                </a>
              </li>
              <li className="text-xs">
                Seg-Sex: 9h-18h | Sáb: 10h-14h
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="font-bold mb-4">Horário</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="font-semibold">Segunda a Sexta</span>
                <br />
                09:00 - 18:00
              </li>
              <li>
                <span className="font-semibold">Sábado</span>
                <br />
                10:00 - 14:00
              </li>
              <li>
                <span className="font-semibold">Domingo</span>
                <br />
                Encerrado
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} KSM - Comércio de Baterias, Tapetes Auto Unip. Lda - Todos os direitos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/people/KSM-Com%C3%A9rcio-de-Baterias-Tapetes-Auto-Unip-Lda/100063710131083/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              Facebook
            </a>
            <span>•</span>
            <a href="https://maps.app.goo.gl/4W7NJ3Pp2ckazNrq5" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              Google Maps
            </a>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>🔒 Created and maintained by Primentix</p>
        </div>
      </div>
    </footer>
  );
}
