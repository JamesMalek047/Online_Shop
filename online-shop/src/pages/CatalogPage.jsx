// import React, { useState } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './CatalogPage.css';

const perfumes = [
  { id: 1, name: 'Aboland', brand: 'Versace', price: 139.99, gender: 'men', scent: 'woody', season: 'winter', age: 'adult', intensity: 'strong', occasion: 'formal', origin: 'italy', image: 'Cologne1.png', description: 'Description Description Description...' },
  { id: 2, name: 'Miss Dior', brand: 'Dior', price: 160.00, gender: 'women', scent: 'floral', season: 'spring', age: 'young', intensity: 'medium', occasion: 'casual', origin: 'france', image: 'Cologne2.png', description: 'Elegant and floral.' },
  { id: 3, name: 'Dior Sauvage', brand: 'Dior', price: 180.00, gender: 'men', scent: 'fresh', season: 'summer', age: 'adult', intensity: 'strong', occasion: 'everyday', origin: 'france', image: 'Cologne3.png', description: 'Bold and spicy.' },
  { id: 4, name: 'Kayali', brand: 'Kayali', price: 139.00, gender: 'women', scent: 'oriental', season: 'fall', age: 'adult', intensity: 'light', occasion: 'romantic', origin: 'uae', image: 'Cologne4.png', description: 'Warm and sweet.' },
  { id: 5, name: 'Lattafa Yara', brand: 'Lattafa', price: 100.00, gender: 'women', scent: 'floral', season: 'spring', age: 'teen', intensity: 'light', occasion: 'daily', origin: 'uae', image: 'Cologne5.png', description: 'Fruity and powdery.' },
  { id: 6, name: 'Bleu Chanel', brand: 'Chanel', price: 190.00, gender: 'men', scent: 'woody', season: 'fall', age: 'adult', intensity: 'strong', occasion: 'formal', origin: 'france', image: 'Cologne6.png', description: 'Crisp and fresh.' },
  { id: 7, name: 'YSL Essence 7', brand: 'YSL', price: 135.50, gender: 'women', scent: 'floral', season: 'spring', age: 'young', intensity: 'medium', occasion: 'casual', origin: 'france', image: 'GenericCologne.png', description: 'Floral scent for spring use with a touch of casual notes.' },
  { id: 8, name: 'Lattafa Essence 8', brand: 'Lattafa', price: 120.99, gender: 'men', scent: 'woody', season: 'fall', age: 'adult', intensity: 'strong', occasion: 'formal', origin: 'uae', image: 'GenericCologne.png', description: 'Woody scent for fall use with a touch of formal notes.' },
  { id: 9, name: 'Tom Ford Essence 9', brand: 'Tom Ford', price: 199.99, gender: 'men', scent: 'fresh', season: 'summer', age: 'adult', intensity: 'medium', occasion: 'everyday', origin: 'italy', image: 'GenericCologne.png', description: 'Fresh scent for summer use with a touch of everyday notes.' },
  { id: 10, name: 'Versace Essence 10', brand: 'Versace', price: 145.00, gender: 'women', scent: 'oriental', season: 'winter', age: 'teen', intensity: 'light', occasion: 'romantic', origin: 'italy', image: 'GenericCologne.png', description: 'Oriental scent for winter use with a touch of romantic notes.' },
  { id: 11, name: 'Dior Essence 11', brand: 'Dior', price: 159.99, gender: 'women', scent: 'floral', season: 'spring', age: 'adult', intensity: 'medium', occasion: 'daily', origin: 'france', image: 'GenericCologne.png', description: 'Floral scent for spring use with a touch of daily notes.' },
  { id: 12, name: 'Kayali Essence 12', brand: 'Kayali', price: 110.00, gender: 'women', scent: 'fresh', season: 'summer', age: 'young', intensity: 'light', occasion: 'casual', origin: 'uae', image: 'GenericCologne.png', description: 'Fresh scent for summer use with a touch of casual notes.' },
  { id: 13, name: 'Chanel Essence 13', brand: 'Chanel', price: 185.00, gender: 'men', scent: 'woody', season: 'fall', age: 'adult', intensity: 'strong', occasion: 'formal', origin: 'france', image: 'GenericCologne.png', description: 'Woody scent for fall use with a touch of formal notes.' },
  { id: 14, name: 'Dior Bloom', brand: 'Dior', price: 145.00, gender: 'women', scent: 'floral', season: 'spring', age: 'young', intensity: 'medium', occasion: 'romantic', origin: 'france', image: 'GenericCologne.png', description: 'Floral bloom for youthful charm.' },
  { id: 15, name: 'Versace Gold', brand: 'Versace', price: 175.00, gender: 'men', scent: 'woody', season: 'fall', age: 'adult', intensity: 'strong', occasion: 'formal', origin: 'italy', image: 'GenericCologne.png', description: 'Luxurious woody scent for evening elegance.' },
  { id: 16, name: 'Tom Ford Aqua', brand: 'Tom Ford', price: 210.00, gender: 'men', scent: 'fresh', season: 'summer', age: 'adult', intensity: 'light', occasion: 'daily', origin: 'usa', image: 'GenericCologne.png', description: 'Crisp and refreshing aquatic notes.' },
  { id: 17, name: 'Kayali Blush', brand: 'Kayali', price: 130.00, gender: 'women', scent: 'oriental', season: 'winter', age: 'young', intensity: 'light', occasion: 'romantic', origin: 'uae', image: 'GenericCologne.png', description: 'Delicate oriental sweetness for cozy nights.' },
  { id: 18, name: 'Lattafa Musk', brand: 'Lattafa', price: 105.00, gender: 'men', scent: 'woody', season: 'spring', age: 'teen', intensity: 'medium', occasion: 'casual', origin: 'uae', image: 'GenericCologne.png', description: 'Soft musk blended with woody freshness.' },
  { id: 19, name: 'YSL Belle', brand: 'YSL', price: 145.00, gender: 'women', scent: 'floral', season: 'spring', age: 'adult', intensity: 'medium', occasion: 'daily', origin: 'france', image: 'GenericCologne.png', description: 'Bright floral bouquet for everyday elegance.' },
  { id: 20, name: 'Chanel Noir', brand: 'Chanel', price: 200.00, gender: 'men', scent: 'oriental', season: 'fall', age: 'adult', intensity: 'strong', occasion: 'formal', origin: 'france', image: 'GenericCologne.png', description: 'Bold and mysterious with deep oriental tones.' },
  { id: 21, name: 'Dior Velvet', brand: 'Dior', price: 165.00, gender: 'women', scent: 'oriental', season: 'winter', age: 'adult', intensity: 'strong', occasion: 'formal', origin: 'france', image: 'GenericCologne.png', description: 'Smooth oriental tones for luxury evenings.' },
  { id: 22, name: 'Versace Ice', brand: 'Versace', price: 150.00, gender: 'men', scent: 'fresh', season: 'winter', age: 'adult', intensity: 'medium', occasion: 'daily', origin: 'italy', image: 'GenericCologne.png', description: 'Fresh and cool with vibrant undertones.' },
  { id: 23, name: 'YSL Nuit', brand: 'YSL', price: 138.00, gender: 'men', scent: 'woody', season: 'fall', age: 'young', intensity: 'strong', occasion: 'romantic', origin: 'france', image: 'GenericCologne.png', description: 'Dark woody warmth for special nights.' },
  { id: 24, name: 'Tom Ford Black', brand: 'Tom Ford', price: 225.00, gender: 'women', scent: 'oriental', season: 'fall', age: 'adult', intensity: 'strong', occasion: 'formal', origin: 'usa', image: 'GenericCologne.png', description: 'Intense and mysterious scent for dramatic flair.' },
  { id: 25, name: 'Lattafa Amber', brand: 'Lattafa', price: 115.00, gender: 'women', scent: 'woody', season: 'winter', age: 'young', intensity: 'medium', occasion: 'daily', origin: 'uae', image: 'GenericCologne.png', description: 'Rich amber woody blend for cozy wear.' },
  { id: 26, name: 'Chanel Lumiere', brand: 'Chanel', price: 195.00, gender: 'women', scent: 'floral', season: 'spring', age: 'teen', intensity: 'light', occasion: 'casual', origin: 'france', image: 'GenericCologne.png', description: 'Bright floral tones for sunny mornings.' },
  { id: 27, name: 'Kayali Eden', brand: 'Kayali', price: 140.00, gender: 'women', scent: 'fresh', season: 'summer', age: 'adult', intensity: 'medium', occasion: 'everyday', origin: 'uae', image: 'GenericCologne.png', description: 'Fruity freshness with a tropical hint.' },
  { id: 28, name: 'Tom Ford Oud', brand: 'Tom Ford', price: 230.00, gender: 'men', scent: 'oriental', season: 'fall', age: 'adult', intensity: 'strong', occasion: 'formal', origin: 'usa', image: 'GenericCologne.png', description: 'Oud richness for signature presence.' },
  { id: 29, name: 'Versace Shine', brand: 'Versace', price: 158.00, gender: 'women', scent: 'floral', season: 'summer', age: 'young', intensity: 'light', occasion: 'casual', origin: 'italy', image: 'GenericCologne.png', description: 'Soft shimmer with radiant floral notes.' },
  { id: 30, name: 'Dior Aqua Femme', brand: 'Dior', price: 168.00, gender: 'women', scent: 'fresh', season: 'spring', age: 'adult', intensity: 'light', occasion: 'daily', origin: 'france', image: 'GenericCologne.png', description: 'Aqua coolness with subtle elegance.' }, 
  { id: 31, name: 'Lattafa Velvet', brand: 'Lattafa', price: 130.00, gender: 'women', scent: 'floral', season: 'spring', age: 'young', intensity: 'light', occasion: 'casual', origin: 'uae', image: 'GenericCologne.png', description: 'Soft floral blend with spring essence.' },
  { id: 32, name: 'Chanel Sport', brand: 'Chanel', price: 180.00, gender: 'men', scent: 'fresh', season: 'summer', age: 'adult', intensity: 'medium', occasion: 'daily', origin: 'france', image: 'GenericCologne.png', description: 'Energetic freshness for active days.' },
  { id: 33, name: 'YSL Dusk', brand: 'YSL', price: 142.00, gender: 'men', scent: 'woody', season: 'fall', age: 'adult', intensity: 'strong', occasion: 'evening', origin: 'france', image: 'GenericCologne.png', description: 'Woody dusk notes for strong presence.' },
  { id: 34, name: 'Dior Blooming', brand: 'Dior', price: 155.00, gender: 'women', scent: 'floral', season: 'spring', age: 'teen', intensity: 'medium', occasion: 'romantic', origin: 'france', image: 'GenericCologne.png', description: 'Vibrant blooming bouquet.' },
  { id: 35, name: 'Tom Ford Soleil', brand: 'Tom Ford', price: 215.00, gender: 'women', scent: 'fresh', season: 'summer', age: 'adult', intensity: 'light', occasion: 'beach', origin: 'usa', image: 'GenericCologne.png', description: 'Sun-kissed freshness for summer days.' },
  { id: 36, name: 'Versace Night', brand: 'Versace', price: 175.00, gender: 'men', scent: 'oriental', season: 'fall', age: 'adult', intensity: 'strong', occasion: 'evening', origin: 'italy', image: 'GenericCologne.png', description: 'Intense scent for evening allure.' },
  { id: 37, name: 'Kayali White', brand: 'Kayali', price: 135.00, gender: 'women', scent: 'floral', season: 'spring', age: 'adult', intensity: 'medium', occasion: 'wedding', origin: 'uae', image: 'GenericCologne.png', description: 'Pure floral blend for special days.' },
  { id: 38, name: 'Lattafa Dark', brand: 'Lattafa', price: 125.00, gender: 'men', scent: 'woody', season: 'winter', age: 'adult', intensity: 'strong', occasion: 'formal', origin: 'uae', image: 'GenericCologne.png', description: 'Bold woody aroma for cold nights.' },
  { id: 39, name: 'Chanel Rose', brand: 'Chanel', price: 190.00, gender: 'women', scent: 'floral', season: 'spring', age: 'adult', intensity: 'light', occasion: 'daily', origin: 'france', image: 'GenericCologne.png', description: 'Elegant rose with fresh layers.' },
  { id: 40, name: 'YSL Fire', brand: 'YSL', price: 160.00, gender: 'men', scent: 'oriental', season: 'fall', age: 'adult', intensity: 'strong', occasion: 'date', origin: 'france', image: 'GenericCologne.png', description: 'Intense oriental fire for special moments.' },
  { id: 41, name: 'Dior Innocence', brand: 'Dior', price: 148.00, gender: 'women', scent: 'floral', season: 'spring', age: 'teen', intensity: 'light', occasion: 'school', origin: 'france', image: 'GenericCologne.png', description: 'Innocent floral charm for everyday use.' },
  { id: 42, name: 'Versace Noir', brand: 'Versace', price: 178.00, gender: 'women', scent: 'oriental', season: 'winter', age: 'adult', intensity: 'strong', occasion: 'formal', origin: 'italy', image: 'GenericCologne.png', description: 'Noir sensuality in bold tones.' },
  { id: 43, name: 'Tom Ford White', brand: 'Tom Ford', price: 220.00, gender: 'men', scent: 'fresh', season: 'summer', age: 'adult', intensity: 'light', occasion: 'daytime', origin: 'usa', image: 'GenericCologne.png', description: 'Clean fresh notes for open air.' },
  { id: 44, name: 'Kayali Bloom', brand: 'Kayali', price: 145.00, gender: 'women', scent: 'floral', season: 'spring', age: 'adult', intensity: 'medium', occasion: 'romantic', origin: 'uae', image: 'GenericCologne.png', description: 'Romantic blooming florals.' },
  { id: 45, name: 'Lattafa Oud Mood', brand: 'Lattafa', price: 110.00, gender: 'men', scent: 'oriental', season: 'winter', age: 'adult', intensity: 'strong', occasion: 'evening', origin: 'uae', image: 'GenericCologne.png', description: 'Oud depth with spicy elegance.' },
  { id: 46, name: 'Chanel Shine', brand: 'Chanel', price: 185.00, gender: 'women', scent: 'fresh', season: 'summer', age: 'young', intensity: 'light', occasion: 'casual', origin: 'france', image: 'GenericCologne.png', description: 'Light and playful summer freshness.' },
  { id: 47, name: 'YSL Supreme', brand: 'YSL', price: 168.00, gender: 'men', scent: 'woody', season: 'fall', age: 'adult', intensity: 'strong', occasion: 'formal', origin: 'france', image: 'GenericCologne.png', description: 'Majestic woody composition for leaders.' },
  { id: 48, name: 'Dior Silk', brand: 'Dior', price: 158.00, gender: 'women', scent: 'floral', season: 'spring', age: 'adult', intensity: 'light', occasion: 'daily', origin: 'france', image: 'GenericCologne.png', description: 'Soft silky floral touch for delicate charm.' },
  { id: 49, name: 'Versace Aqua', brand: 'Versace', price: 165.00, gender: 'men', scent: 'fresh', season: 'summer', age: 'young', intensity: 'medium', occasion: 'beach', origin: 'italy', image: 'GenericCologne.png', description: 'Aqua vitality for sunny beach vibes.' },
  { id: 50, name: 'Tom Ford Noir Femme', brand: 'Tom Ford', price: 210.00, gender: 'women', scent: 'oriental', season: 'fall', age: 'adult', intensity: 'strong', occasion: 'evening', origin: 'usa', image: 'GenericCologne.png', description: 'Feminine intensity in dark elegance.' }
];


function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function addToCart(perfume) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const index = cart.findIndex(item => item.name === perfume.name);
  if (index > -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ ...perfume, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${perfume.name} added to cart!`);
}

function PerfumeCard({ perfume, onClick }) {
  return (
    <div className="card" onClick={() => onClick(perfume)}>
      <img src={perfume.image} alt={perfume.name} />
      <div>{perfume.name}</div>
      <div className="price">${perfume.price}</div>
    </div>
  );
}
function PerfumePopup({ perfume, onClose, onBuyNow }) {
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(item => item.id === perfume.id);
    if (index > -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...perfume, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${perfume.name} added to cart!`);
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button onClick={onClose} className="close">&times;</button>
        <h2>{perfume.brand} - {perfume.name}</h2>
        <div className="popup-content">
          <img src={perfume.image} alt={perfume.name} />
          <p className="description">{perfume.description}</p>
        </div>
        <div className="price">${perfume.price}</div>
        <div className="buttons">
          <button className="add-to-cart" onClick={() => addToCart(perfume)}>Add to cart</button>

          <button className="buy-now" onClick={onBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}


function NavBar({ toggleMenu, setSelectedGender, selectedGender, searchQuery, setSearchQuery }) {
  const [catalogDropdownOpen, setCatalogDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCatalogDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
    setCatalogDropdownOpen(false);
  };

  return (
    <nav className="navbar">
  <div className="navbar-logo">AURUM</div>

  <div className="navbar-center" ref={dropdownRef}>
  <button className="nav-button" onClick={() => window.location.href = './index2.html'}>Home</button>

  

  <div className="nav-item">
    <button className="nav-button" onClick={() => setCatalogDropdownOpen(prev => !prev)}>
      Catalog ▾
    </button>
    {catalogDropdownOpen && (
      <div className="dropdown-menu">
        <button onClick={() => handleGenderClick('men')} className={`dropdown-item ${selectedGender === 'men' ? 'active' : ''}`}>Men</button>
        <button onClick={() => handleGenderClick('women')} className={`dropdown-item ${selectedGender === 'women' ? 'active' : ''}`}>Women</button>
        <button onClick={() => handleGenderClick('all')} className={`dropdown-item ${selectedGender === 'all' ? 'active' : ''}`}>All</button>
      </div>
    )}
  </div>
</div>


  <div className="navbar-right">
    <input
      type="text"
      placeholder="Search fragrances"
      className="navbar-search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <span className="navbar-icon" onClick={() => window.location.href = './cart.html'}>🛒</span>
    {/* <span className="navbar-icon menu-toggle" onClick={toggleMenu}>☰</span> */}
  </div>
</nav>
  );
}

function SidePanel({
  selectedBrand, setSelectedBrand,
  brands, selectedScent, setSelectedScent,
  selectedSeason, setSelectedSeason,
  selectedAge, setSelectedAge,
  selectedIntensity, setSelectedIntensity,
  selectedOccasion, setSelectedOccasion,
  selectedOrigin, setSelectedOrigin
}) {
  return (
    <div className="side-panel">
      <div className="panel-section">
        <h4>Brand</h4>
        <select value={selectedBrand} onChange={e => setSelectedBrand(e.target.value)}>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>
      <div className="panel-section">
        <h4>Scent</h4>
        <select value={selectedScent} onChange={e => setSelectedScent(e.target.value)}>
          <option value="all">All</option>
          <option value="floral">Floral</option>
          <option value="woody">Woody</option>
          <option value="fresh">Fresh</option>
          <option value="oriental">Oriental</option>
        </select>
      </div>
      <div className="panel-section">
        <h4>Season</h4>
        <select value={selectedSeason} onChange={e => setSelectedSeason(e.target.value)}>
          <option value="all">All</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
          <option value="winter">Winter</option>
        </select>
      </div>
      <div className="panel-section">
        <h4>Age Group</h4>
        <select value={selectedAge} onChange={e => setSelectedAge(e.target.value)}>
          <option value="all">All</option>
          <option value="teen">Teen</option>
          <option value="young">Young Adult</option>
          <option value="adult">Adult</option>
        </select>
      </div>
      <div className="panel-section">
        <h4>Intensity</h4>
        <select value={selectedIntensity} onChange={e => setSelectedIntensity(e.target.value)}>
          <option value="all">All</option>
          <option value="light">Light</option>
          <option value="medium">Medium</option>
          <option value="strong">Strong</option>
        </select>
      </div>
      <div className="panel-section">
        <h4>Occasion</h4>
        <select value={selectedOccasion} onChange={e => setSelectedOccasion(e.target.value)}>
          <option value="all">All</option>
          <option value="casual">Casual</option>
          <option value="formal">Formal</option>
          <option value="romantic">Romantic</option>
          <option value="daily">Daily</option>
          <option value="everyday">Everyday</option>
        </select>
      </div>
      <div className="panel-section">
        <h4>Origin</h4>
        <select value={selectedOrigin} onChange={e => setSelectedOrigin(e.target.value)}>
          <option value="all">All</option>
          <option value="france">France</option>
          <option value="italy">Italy</option>
          <option value="uae">UAE</option>
        </select>
      </div>
    </div>
  );
}
export default function CatalogPage() {
  
  // const [selectedPerfume, setSelectedPerfume] = useState(null);
  // const [selectedGender, setSelectedGender] = useState('all');
  // const [selectedBrand, setSelectedBrand] = useState('all');
  // const [selectedScent, setSelectedScent] = useState('all');
  // const [selectedSeason, setSelectedSeason] = useState('all');
  // const [selectedAge, setSelectedAge] = useState('all');
  // const [selectedIntensity, setSelectedIntensity] = useState('all');
  // const [selectedOccasion, setSelectedOccasion] = useState('all');
  // const [selectedOrigin, setSelectedOrigin] = useState('all');
  // const [searchQuery, setSearchQuery] = useState('');
  // const [menuOpen, setMenuOpen] = useState(false);
  // const navigate = useNavigate();
  const query = useQuery();
const initialGender = query.get('gender') || 'all';
const initialQuery = query.get('query') || '';

const [selectedPerfume, setSelectedPerfume] = useState(null);
const [selectedGender, setSelectedGender] = useState(initialGender);
const [selectedBrand, setSelectedBrand] = useState('all');
const [selectedScent, setSelectedScent] = useState('all');
const [selectedSeason, setSelectedSeason] = useState('all');
const [selectedAge, setSelectedAge] = useState('all');
const [selectedIntensity, setSelectedIntensity] = useState('all');
const [selectedOccasion, setSelectedOccasion] = useState('all');
const [selectedOrigin, setSelectedOrigin] = useState('all');
const [searchQuery, setSearchQuery] = useState(initialQuery);
const [menuOpen, setMenuOpen] = useState(false);

const navigate = useNavigate();


  const toggleMenu = () => setMenuOpen(prev => !prev);

  const filteredBrandList = ['all', ...new Set(
    perfumes
      .filter(p => selectedGender === 'all' || p.gender === selectedGender)
      .map(p => p.brand)
  )];

  const filteredPerfumes = perfumes.filter(p => {
    return (
      (selectedGender === 'all' || p.gender === selectedGender) &&
      (selectedBrand === 'all' || p.brand === selectedBrand) &&
      (selectedScent === 'all' || p.scent === selectedScent) &&
      (selectedSeason === 'all' || p.season === selectedSeason) &&
      (selectedAge === 'all' || p.age === selectedAge) &&
      (selectedIntensity === 'all' || p.intensity === selectedIntensity) &&
      (selectedOccasion === 'all' || p.occasion === selectedOccasion) &&
      (selectedOrigin === 'all' || p.origin === selectedOrigin) &&
      (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const addToCart = (perfume) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.name === perfume.name);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        name: perfume.name,
        price: perfume.price,
        image: perfume.image,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${perfume.name} has been added to your cart.`);
  };
  

  return (
    <div>
      <NavBar
        toggleMenu={toggleMenu}
        setSelectedGender={setSelectedGender}
        selectedGender={selectedGender}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCartClick={() => navigate('/cart')}
      />
      <div className="catalog-wrapper">
        <div className="catalog-container">
          <div className="grid">
            {filteredPerfumes.map(p => (
              <PerfumeCard key={p.id} perfume={p} onClick={setSelectedPerfume} />
            ))}
          </div>
          {selectedPerfume && (
            <PerfumePopup
              perfume={selectedPerfume}
              onClose={() => setSelectedPerfume(null)}
              onBuyNow={() => navigate('/buy-now', { state: { perfume: selectedPerfume } })}
              onAddToCart={() => addToCart(selectedPerfume)}
            />
          )}
        </div>
        <SidePanel
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          brands={filteredBrandList}
          selectedScent={selectedScent}
          setSelectedScent={setSelectedScent}
          selectedSeason={selectedSeason}
          setSelectedSeason={setSelectedSeason}
          selectedAge={selectedAge}
          setSelectedAge={setSelectedAge}
          selectedIntensity={selectedIntensity}
          setSelectedIntensity={setSelectedIntensity}
          selectedOccasion={selectedOccasion}
          setSelectedOccasion={setSelectedOccasion}
          selectedOrigin={selectedOrigin}
          setSelectedOrigin={setSelectedOrigin}
        />
      </div>
    </div>
  );
}
