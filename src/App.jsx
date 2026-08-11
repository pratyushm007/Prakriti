import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BadgeHelp,
  Box,
  Check,
  ChevronRight,
  CircleUserRound,
  Flower2,
  Headphones,
  Heart,
  LockKeyhole,
  MapPin,
  Menu,
  PackageCheck,
  PackageSearch,
  Search,
  ShoppingBag,
  Sparkles,
  Sprout,
  Star,
  Store,
  Truck,
  UserRound,
  X,
} from 'lucide-react'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const navItems = [
  { label: 'Women', href: '#shop-categories' },
  { label: 'Men', href: '#mens-collection' },
  { label: 'Kids', href: '#shop-categories' },
  { label: 'New Arrivals', href: '#best-sellers' },
  { label: 'Collections', href: '#heritage' },
  { label: 'Sale', href: '#best-sellers' },
]

const categories = [
  {
    title: 'Women',
    subtitle: 'Elegant. Effortless. You.',
    image: '/images/category-women.jpg',
    icon: Sprout,
  },
  {
    title: 'Kids',
    subtitle: 'Comfort meets cuteness.',
    image: '/images/category-kids.jpg',
    icon: Flower2,
  },
  {
    title: 'New Arrivals',
    subtitle: 'Fresh styles just for you.',
    image: '/images/category-new.jpg',
    icon: Sparkles,
  },
  {
    title: 'Collections',
    subtitle: 'Curated for every mood.',
    image: '/images/category-collections.jpg',
    icon: Box,
  },
  {
    title: 'Sale',
    subtitle: 'Styles you love, now less.',
    image: '/images/category-sale.jpg',
    icon: TagIcon,
  },
]

const products = [
  {
    id: 1,
    name: 'Sambalpuri Cotton Saree',
    price: '₹2,299',
    rating: 4.8,
    reviews: 126,
    image: '/images/hero-prakriti.jpg',
    position: '72% center',
  },
  {
    id: 2,
    name: 'Banarasi Silk Saree',
    price: '₹3,499',
    rating: 4.7,
    reviews: 98,
    image: '/images/category-new.jpg',
    position: 'center',
  },
  {
    id: 3,
    name: 'Handloom Kurta Set',
    price: '₹1,799',
    rating: 4.6,
    reviews: 76,
    image: '/images/product-pink.jpg',
    position: 'center 20%',
  },
  {
    id: 4,
    name: 'Sambalpuri Dupatta',
    price: '₹1,299',
    rating: 4.8,
    reviews: 54,
    image: '/images/sambalpuri-weave.jpg',
    position: 'center',
  },
  {
    id: 5,
    name: 'Banarasi Suit Set',
    price: '₹2,499',
    rating: 4.7,
    reviews: 87,
    image: '/images/category-women.jpg',
    position: 'center 23%',
  },
  {
    id: 6,
    name: 'Kids Ethnic Dress',
    price: '₹999',
    rating: 4.8,
    reviews: 65,
    image: '/images/category-kids.jpg',
    position: 'center 22%',
  },
  {
    id: 7,
    name: 'Festive Teal Kurta',
    price: '₹1,899',
    rating: 4.7,
    reviews: 41,
    image: '/images/category-sale.jpg',
    position: 'center 18%',
  },
]

const serviceItems = [
  { icon: Truck, title: 'Free Shipping', detail: 'On orders above ₹1999' },
  { icon: PackageCheck, title: '7 Days Return', detail: 'Hassle free returns' },
  { icon: LockKeyhole, title: 'Secure Payment', detail: '100% protected checkout' },
  { icon: Headphones, title: 'Support 24/7', detail: "We're here to help" },
]

function TagIcon({ size = 21, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M20.6 13.2 12.2 21.6a2 2 0 0 1-2.8 0l-7-7a2 2 0 0 1 0-2.8L10.8 3.4A2 2 0 0 1 12.2 3H19a2 2 0 0 1 2 2v6.8a2 2 0 0 1-.4 1.4Z" />
      <circle cx="16.5" cy="7.5" r="1" />
    </svg>
  )
}

function BrandLogo({ className = '' }) {
  return (
    <img
      className={className}
      src="/brand/prakriti-logo.png"
      alt="Prakriti — Rooted in Tradition, Made for You"
    />
  )
}

function Header({ onSearch, onCart, onMenu }) {
  return (
    <header className="site-header">
      <div className="announcement-bar">
        <div className="site-container announcement-inner">
          <div className="announcement-left">
            <span>FREE SHIPPING <em>on orders above ₹1999</em></span>
            <span className="divider" />
            <span>Easy 7 days return</span>
          </div>
          <div className="announcement-right">
            <button type="button"><PackageSearch size={16} />Track Order</button>
            <button type="button"><MapPin size={16} />Store Locator</button>
            <button type="button"><BadgeHelp size={16} />Help</button>
          </div>
        </div>
      </div>

      <div className="main-nav-wrap">
        <div className="site-container main-nav">
          <button className="mobile-menu-button" onClick={onMenu} aria-label="Open menu" type="button">
            <Menu size={25} />
          </button>

          <a href="#top" className="logo" aria-label="Prakriti home">
            <BrandLogo className="brand-logo-image" />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="nav-actions">
            <button type="button" onClick={onSearch} aria-label="Search"><Search /></button>
            <button type="button" className="hide-small" aria-label="Account"><UserRound /></button>
            <button type="button" className="hide-small" aria-label="Wishlist"><Heart /></button>
            <button type="button" className="bag-button" onClick={onCart} aria-label="Shopping bag">
              <ShoppingBag />
              <span className="bag-count">2</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-label="Featured collections">
      <Swiper
        modules={[Pagination, A11y, Navigation]}
        slidesPerView={1}
        loop
        navigation={{ nextEl: '.hero-next', prevEl: '.hero-prev' }}
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div className="hero-slide hero-slide-primary">
            <img src="/images/mens-collection.png" alt="Men wearing classic Indian kurtas in a heritage courtyard" className="hero-image" />
            <div className="hero-shade hero-shade-warm" />
            <div className="site-container hero-content-wrap">
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <p className="hero-eyebrow">Tradition, tailored for him</p>
                <h1>Modern Roots.<br />Timeless Style.</h1>
                <p className="hero-description">Classic kurtas made for celebrations,<br className="desktop-break" /> crafted with quiet confidence.<br />For every man. For every moment.</p>
                <a href="#mens-collection" className="primary-button">Shop Men's Collection <ArrowRight size={17} /></a>
              </motion.div>

              <div className="hero-usps" aria-label="Our promises">
                <div><Sprout /><span>Premium<br />Fabrics</span></div>
                <div><Flower2 /><span>Trusted<br />Quality</span></div>
                <div><PackageCheck /><span>Easy<br />Returns</span></div>
                <div><LockKeyhole /><span>Secure<br />Payment</span></div>
              </div>
            </div>
            <div className="discount-medallion" aria-label="Up to 40 percent off">
              <span>Up to</span>
              <strong>40<sup>%</sup></strong>
              <span>Off</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-slide textile-hero">
            <img src="/images/sambalpuri-weave.jpg" alt="Detailed traditional Sambalpuri ikat weave" className="hero-image" />
            <div className="textile-overlay" />
            <div className="site-container textile-content">
              <p className="hero-eyebrow">The soul of Odisha</p>
              <h2>Sambalpuri Soul</h2>
              <p>Bold motifs. Living heritage.<br />Woven by tradition, worn by you.</p>
              <a href="#heritage" className="light-button">Discover the Weave <ArrowRight size={17} /></a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-slide textile-hero">
            <img src="/images/banarasi-weave.jpg" alt="Rich red and gold Banarasi silk weave" className="hero-image" />
            <div className="textile-overlay banarasi-overlay" />
            <div className="site-container textile-content">
              <p className="hero-eyebrow">A regal tradition</p>
              <h2>Banarasi Elegance</h2>
              <p>Luminous silk. Timeless craft.<br />A celebration in every drape.</p>
              <a href="#heritage" className="light-button">Explore Banarasi <ArrowRight size={17} /></a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button className="hero-arrow hero-prev" aria-label="Previous slide" type="button"><ArrowLeft /></button>
      <button className="hero-arrow hero-next" aria-label="Next slide" type="button"><ArrowRight /></button>
    </section>
  )
}

function CategorySection() {
  return (
    <section className="categories-section" id="shop-categories" aria-label="Shop categories">
      <div className="site-container category-grid">
        {categories.map(({ title, subtitle, image, icon: Icon }, index) => (
          <motion.a
            href={title === 'Collections' ? '#heritage' : '#best-sellers'}
            key={title}
            className="category-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.06, duration: 0.48 }}
          >
            <div className="category-image-wrap">
              <img src={image} alt={`${title} ethnic wear collection`} />
            </div>
            <div className="category-copy">
              <div className="category-title"><Icon size={20} /><h3>{title}</h3></div>
              <p>{subtitle}</p>
              <ArrowRight className="category-arrow" size={17} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

function HeritageSection() {
  return (
    <section className="heritage" id="heritage">
      <motion.div
        className="heritage-intro"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        <span>The Soul of Our Weaves</span>
        <h2>Sambalpuri<br />&amp; Banarasi</h2>
        <p>Handcrafted heritage.<br />Woven with pride.</p>
        <a href="#best-sellers" className="primary-button compact">Discover Now <ArrowRight size={16} /></a>
      </motion.div>

      <motion.a
        href="#best-sellers"
        className="weave-card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <img src="/images/sambalpuri-weave.jpg" alt="Sambalpuri handloom textile" />
        <div className="weave-overlay" />
        <div className="weave-copy">
          <h3>Sambalpuri</h3>
          <p>Bold. Vibrant. Timeless.</p>
          <span>Explore <ArrowRight size={16} /></span>
        </div>
      </motion.a>

      <motion.a
        href="#best-sellers"
        className="weave-card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.08 }}
      >
        <img src="/images/banarasi-weave.jpg" alt="Banarasi silk textile" />
        <div className="weave-overlay" />
        <div className="weave-copy">
          <h3>Banarasi</h3>
          <p>Royal. Elegant. Eternal.</p>
          <span>Explore <ArrowRight size={16} /></span>
        </div>
      </motion.a>
    </section>
  )
}

function Rating({ value, reviews }) {
  return (
    <div className="rating" aria-label={`${value} out of 5 stars, ${reviews} reviews`}>
      <span className="stars">
        {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={12} fill="currentColor" />)}
      </span>
      <span>({reviews})</span>
    </div>
  )
}

function ProductCard({ product, favorite, onFavorite }) {
  return (
    <article className="product-card">
      <a href="#top" className="product-image-wrap" aria-label={product.name}>
        <img src={product.image} alt={product.name} style={{ objectPosition: product.position }} />
        <span className="quick-view">Quick View</span>
      </a>
      <button
        className={`favorite-button ${favorite ? 'is-favorite' : ''}`}
        type="button"
        aria-label={favorite ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
        onClick={() => onFavorite(product.id)}
      >
        <Heart size={17} fill={favorite ? 'currentColor' : 'none'} />
      </button>
      <div className="product-copy">
        <h3>{product.name}</h3>
        <strong>{product.price}</strong>
        <Rating value={product.rating} reviews={product.reviews} />
      </div>
    </article>
  )
}

function BestSellers() {
  const [favorites, setFavorites] = useState([])
  const toggleFavorite = (id) => {
    setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  }

  return (
    <section className="best-sellers" id="best-sellers">
      <div className="site-container">
        <div className="section-heading-row">
          <h2>Best Sellers</h2>
          <a href="#best-sellers">View All <ArrowRight size={16} /></a>
        </div>

        <Swiper
          modules={[A11y, Navigation]}
          className="products-swiper"
          navigation={{ nextEl: '.products-next', prevEl: '.products-prev' }}
          spaceBetween={12}
          slidesPerView={1.55}
          breakpoints={{
            520: { slidesPerView: 2.4, spaceBetween: 14 },
            760: { slidesPerView: 3.5, spaceBetween: 14 },
            1024: { slidesPerView: 6, spaceBetween: 13 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} favorite={favorites.includes(product.id)} onFavorite={toggleFavorite} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="product-nav products-prev" aria-label="Previous products" type="button"><ArrowLeft /></button>
        <button className="product-nav products-next" aria-label="Next products" type="button"><ArrowRight /></button>
      </div>
    </section>
  )
}

function CampaignBanner() {
  return (
    <section className="campaign" id="mens-collection" aria-label="Men's kurta collection">
      <img src="/images/mens-collection.png" alt="Men wearing classic Indian kurtas in a warm heritage courtyard" />
      <div className="site-container campaign-inner">
        <motion.div
          className="campaign-copy"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <span>Men's Collection</span>
          <h2>Heritage, Tailored</h2>
          <p>Classic silhouettes. Made for every celebration.</p>
          <a href="#best-sellers" className="primary-button compact">Shop Men's Kurtas</a>
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services" aria-label="Customer service benefits">
      <div className="site-container services-grid">
        {serviceItems.map(({ icon: Icon, title, detail }) => (
          <div className="service-item" key={title}>
            <Icon />
            <div><strong>{title}</strong><span>{detail}</span></div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('')
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div
            className="search-panel"
            initial={{ y: -45, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="search-panel-head">
              <span>What are you looking for?</span>
              <button type="button" onClick={onClose} aria-label="Close search"><X /></button>
            </div>
            <form className="search-form" onSubmit={(event) => event.preventDefault()}>
              <Search />
              <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search sarees, kurtis, kidswear..." />
              {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search"><X size={18} /></button>}
            </form>
            <div className="popular-searches"><span>Popular:</span> Sambalpuri Sarees · Banarasi Silk · Kurta Sets · Kids Frocks</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CartDrawer({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.aside
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.33 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="drawer-head"><h2>Your Bag <span>(2)</span></h2><button type="button" onClick={onClose}><X /></button></div>
            <div className="cart-items">
              {[
                { name: 'Sambalpuri Cotton Saree', price: '₹2,299', image: '/images/hero-prakriti.jpg', position: '72%' },
                { name: 'Banarasi Suit Set', price: '₹2,499', image: '/images/category-women.jpg', position: 'center 22%' },
              ].map((item) => (
                <div className="cart-item" key={item.name}>
                  <img src={item.image} alt="" style={{ objectPosition: item.position }} />
                  <div><h3>{item.name}</h3><span>Qty: 1</span><strong>{item.price}</strong></div>
                  <button type="button" aria-label={`Remove ${item.name}`}><X size={15} /></button>
                </div>
              ))}
            </div>
            <div className="shipping-note"><Check size={16} /><span>You qualify for <strong>free shipping</strong></span></div>
            <div className="cart-footer">
              <div><span>Subtotal</span><strong>₹4,798</strong></div>
              <button type="button">Proceed to Checkout <ArrowRight size={17} /></button>
              <p>Taxes and shipping calculated at checkout.</p>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.aside
            className="mobile-drawer"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.32 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mobile-drawer-brand">
              <a href="#top" className="logo" onClick={onClose} aria-label="Prakriti home">
                <BrandLogo className="drawer-brand-logo-image" />
              </a>
              <button type="button" onClick={onClose}><X /></button>
            </div>
            <nav>
              {navItems.map((item) => <a href={item.href} key={item.label} onClick={onClose}>{item.label}<ChevronRight /></a>)}
            </nav>
            <div className="mobile-drawer-links">
              <a href="#top" onClick={onClose}><CircleUserRound />My Account</a>
              <a href="#top" onClick={onClose}><Heart />Wishlist</a>
              <a href="#top" onClick={onClose}><Store />Store Locator</a>
            </div>
            <div className="mobile-drawer-note"><Truck />Pan India shipping on all orders</div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function App() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const anyOverlayOpen = searchOpen || cartOpen || menuOpen

  useEffect(() => {
    document.body.style.overflow = anyOverlayOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [anyOverlayOpen])

  return (
    <div className="app">
      <Header onSearch={() => setSearchOpen(true)} onCart={() => setCartOpen(true)} onMenu={() => setMenuOpen(true)} />
      <main>
        <Hero />
        <CategorySection />
        <HeritageSection />
        <BestSellers />
        <CampaignBanner />
        <Services />
      </main>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  )
}

export default App
