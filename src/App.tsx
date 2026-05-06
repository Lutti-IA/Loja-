/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter, 
  Star, 
  ArrowRight,
  Search,
  User,
  Heart
} from 'lucide-react';

const CATEGORIES = [
  {
    title: 'Skincare',
    subtitle: 'Nourriture pure',
    image: 'https://images.unsplash.com/photo-1570172619380-4101750c59cc?q=80&w=800&h=1000&auto=format&fit=crop',
    id: 'cat-skincare'
  },
  {
    title: 'Makeup',
    subtitle: 'Lumière et art',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&h=1000&auto=format&fit=crop',
    id: 'cat-makeup'
  },
  {
    title: 'Fragrance',
    subtitle: 'Essence invisible',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&h=1000&auto=format&fit=crop',
    id: 'cat-fragrance'
  }
];

const PRODUCTS = [
  {
    id: 1,
    name: 'Sérum de Radiant',
    price: 'R$ 289,00',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&h=800&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 2,
    name: 'Essence d\'Or Hydrating',
    price: 'R$ 156,00',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&h=800&auto=format&fit=crop',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Velvet Matte Lipstick',
    price: 'R$ 112,00',
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=600&h=800&auto=format&fit=crop',
    rating: 4.9
  },
  {
    id: 4,
    name: 'Midnight Rose Parfum',
    price: 'R$ 498,00',
    category: 'Fragrance',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&h=800&auto=format&fit=crop',
    rating: 5
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-aura-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex-1 hidden md:flex items-center gap-8">
          <a href="#" className="text-xs uppercase tracking-widest hover:text-aura-gold transition-colors">Coleção</a>
          <a href="#" className="text-xs uppercase tracking-widest hover:text-aura-gold transition-colors">Filosofia</a>
          <a href="#" className="text-xs uppercase tracking-widest hover:text-aura-gold transition-colors">Journal</a>
        </div>

        <button 
          id="menu-toggle"
          className="md:hidden p-2" 
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex-1 flex justify-center">
          <a href="/" className="text-2xl font-serif tracking-[0.2em] uppercase font-semibold">
            Aura
          </a>
        </div>

        <div className="flex-1 flex items-center justify-end gap-5">
          <button id="search-btn" className="hidden sm:block hover:text-aura-gold transition-colors">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button id="account-btn" className="hidden sm:block hover:text-aura-gold transition-colors">
            <User className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button id="cart-btn" className="relative hover:text-aura-gold transition-colors">
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            <span className="absolute -top-1 -right-1 bg-aura-ink text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-aura-cream z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-serif tracking-widest uppercase">Aura</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-2xl font-serif">
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Produtos</a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Skincare</a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Maquiagem</a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Sustentabilidade</a>
            </div>
            <div className="mt-auto flex gap-4 pt-8 border-t border-aura-ink/10">
              <Instagram className="w-5 h-5" />
              <Facebook className="w-5 h-5" />
              <Twitter className="w-5 h-5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1920&h=1080&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Aura Beauty Hero"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-aura-ink/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
        <div className="max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.4em] mb-6 font-medium"
          >
            Edição Limitada 2026
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl leading-[0.95] mb-8 font-serif italic"
          >
            Beleza é uma <br />
            <span className="not-italic">Expressão Aura.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl font-light mb-10 max-w-md"
          >
            Descubra o ritual que transforma o seu cotidiano em um momento de puro luxo e cuidado.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button className="bg-white text-aura-ink px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-aura-beige transition-colors flex items-center gap-2 group">
              Explorar Coleção
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-6 z-10 hidden md:block">
        <div className="flex items-center gap-4 text-white/60">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-20 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 80] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ category, index }: { category: typeof CATEGORIES[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative h-[500px] cursor-pointer overflow-hidden"
    >
      <img 
        src={category.image} 
        alt={category.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-aura-ink/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <p className="text-[10px] uppercase tracking-widest mb-1 font-medium">{category.subtitle}</p>
        <h3 className="text-4xl font-serif mb-4 flex items-center justify-between">
          {category.title}
          <ChevronRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </h3>
      </div>
    </motion.div>
  );
};

const ProductCard = ({ product }: { product: typeof PRODUCTS[0] }) => {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-aura-beige mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/80 backdrop-blur-sm px-2 py-1 text-[10px] uppercase tracking-wider font-semibold">
            Bestseller
          </span>
        </div>
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] bg-aura-ink text-white py-3 text-[10px] uppercase tracking-widest font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Adicionar ao Carrinho
        </button>
        <button className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <p className="text-[10px] text-aura-ink/50 uppercase tracking-widest">{product.category}</p>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-aura-gold text-aura-gold" />
            <span className="text-[10px] font-medium">{product.rating}</span>
          </div>
        </div>
        <h4 className="text-xl font-serif group-hover:text-aura-gold transition-colors">{product.name}</h4>
        <p className="font-sans text-sm font-semibold tracking-wide">{product.price}</p>
      </div>
    </div>
  );
};

const Philosophy = () => {
  return (
    <section className="py-24 bg-aura-beige">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&h=1000&auto=format&fit=crop" 
              alt="Natural beauty"
              className="w-full h-[600px] object-cover rounded-t-[140px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-aura-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center p-8 text-center text-xs uppercase tracking-widest font-bold leading-relaxed border border-aura-gold/30">
              100% Orgânico & Cruelty Free
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-8">
          <span className="text-xs uppercase tracking-[0.4em] text-aura-gold font-bold">Nossa Filosofia</span>
          <h2 className="text-5xl md:text-6xl leading-[1.1]">Inspirada pela <br/><span className="italic">Natureza</span>, aperfeiçoada pela ciência.</h2>
          <p className="text-aura-ink/70 leading-relaxed text-lg font-light">
            Na Aura, acreditamos que a beleza não é algo a ser aplicado, mas cultivado. Nossas fórmulas combinam botânicos ancestrais com bio-tecnologia moderna para criar resultados que honram a sua pele e o planeta.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="space-y-2">
              <h4 className="text-xl font-serif">Ético</h4>
              <p className="text-sm text-aura-ink/60">Sustentável desde a origem até a embalagem.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-serif">Simples</h4>
              <p className="text-sm text-aura-ink/60">Fórmulas essenciais que funcionam.</p>
            </div>
          </div>
          <button className="text-xs uppercase tracking-widest font-bold border-b border-aura-ink pb-2 hover:text-aura-gold hover:border-aura-gold transition-all">
            Conheça Nosso Manifesto
          </button>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-24 bg-aura-ink text-aura-cream px-6">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-5xl">Receba a aura em seu e-mail</h2>
        <p className="text-aura-cream/50 text-lg font-light">
          Inscreva-se para receber ofertas exclusivas, dicas de rituais de beleza e lançamentos em primeira mão.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Seu endereço de e-mail" 
            className="flex-1 bg-transparent border-b border-aura-cream/30 py-4 text-lg focus:outline-none focus:border-aura-cream transition-colors font-light"
          />
          <button className="bg-aura-cream text-aura-ink px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-aura-gold hover:text-white transition-all whitespace-nowrap">
            Assinar
          </button>
        </form>
        <p className="text-[10px] uppercase tracking-widest text-aura-cream/30">
          Ao assinar você concorda com nossos termos e política de privacidade.
        </p>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <main className="luxury-scroller">
      <Navbar />
      <Hero />
      
      {/* Categories Grid */}
      <section id="categories" className="py-12 md:py-24 px-6 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {CATEGORIES.map((cat, idx) => (
          <CategoryCard key={cat.id} category={cat} index={idx} />
        ))}
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-aura-gold font-bold">Os Favoritos</span>
            <h2 className="text-5xl md:text-6xl">Bestsellers</h2>
          </div>
          <button className="text-xs uppercase tracking-widest font-bold group flex items-center gap-2 pb-2 border-b border-aura-ink hover:text-aura-gold hover:border-aura-gold transition-all">
            Ver Todos os Produtos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Philosophy />

      {/* Modern Highlight Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1920&h=1080&auto=format&fit=crop" 
          alt="Aesthetic beauty background"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-aura-ink/40" />
        <div className="relative z-10 text-center text-white space-y-6 px-6">
          <h2 className="text-5xl md:text-7xl italic font-serif max-w-3xl leading-tight">
            "A beleza começa no momento em que você decide ser você mesma."
          </h2>
          <p className="uppercase tracking-[0.6em] text-sm">Aura Collection &copy; 2026</p>
        </div>
      </section>

      <Newsletter />

      {/* Footer */}
      <footer className="bg-aura-cream py-20 px-6 border-t border-aura-ink/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <h3 className="text-2xl font-serif tracking-widest uppercase mb-8">Aura</h3>
            <p className="text-aura-ink/60 text-sm leading-relaxed max-w-xs">
              Beleza consciente, fórmulas limpas e cuidado premium para a mulher contemporânea.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-aura-gold transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-aura-gold transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-aura-gold transition-colors" />
            </div>
          </div>
          
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Shopping</h5>
            <ul className="space-y-4 text-sm text-aura-ink/60">
              <li className="hover:text-aura-ink cursor-pointer">Ver Tudo</li>
              <li className="hover:text-aura-ink cursor-pointer">Skincare</li>
              <li className="hover:text-aura-ink cursor-pointer">Maquiagem</li>
              <li className="hover:text-aura-ink cursor-pointer">Fragrâncias</li>
              <li className="hover:text-aura-ink cursor-pointer">Kits de Presente</li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Suporte</h5>
            <ul className="space-y-4 text-sm text-aura-ink/60">
              <li className="hover:text-aura-ink cursor-pointer">Envio & Devoluções</li>
              <li className="hover:text-aura-ink cursor-pointer">FAQ</li>
              <li className="hover:text-aura-ink cursor-pointer">Rastreio</li>
              <li className="hover:text-aura-ink cursor-pointer">Cuidados com a Pele</li>
              <li className="hover:text-aura-ink cursor-pointer">Fale Conosco</li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8">A Empresa</h5>
            <ul className="space-y-4 text-sm text-aura-ink/60">
              <li className="hover:text-aura-ink cursor-pointer">Nossa História</li>
              <li className="hover:text-aura-ink cursor-pointer">Sustentabilidade</li>
              <li className="hover:text-aura-ink cursor-pointer">Carreiras</li>
              <li className="hover:text-aura-ink cursor-pointer">Imprensa</li>
              <li className="hover:text-aura-ink cursor-pointer">Legal</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-aura-ink/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-aura-ink/40">
          <p>&copy; 2026 Aura Beauty. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <span className="hover:text-aura-ink cursor-pointer">Privacidade</span>
            <span className="hover:text-aura-ink cursor-pointer">Termos</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
