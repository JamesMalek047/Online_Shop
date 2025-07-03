import React, { useState } from 'react';
import './BuyNowPage.css';

const perfumes = [
  { id: 1, name: 'Aboland', brand: 'Versace', price: 139.99, gender: 'men', scent: 'woody', image: 'Cologne1.png', description: 'Description Description Description...' },
  { id: 2, name: 'Miss Dior', brand: 'Dior', price: 160.00, gender: 'women', scent: 'floral', image: 'Cologne2.png', description: 'Elegant and floral.' },
  { id: 3, name: 'Dior Sauvage', brand: 'Dior', price: 180.00, gender: 'men', scent: 'fresh', image: 'Cologne3.png', description: 'Bold and spicy.' },
  { id: 4, name: 'Kayali', brand: 'Kayali', price: 139.00, gender: 'women', scent: 'oriental', image: 'Cologne4.png', description: 'Warm and sweet.' },
  { id: 5, name: 'Lattafa Yara', brand: 'Lattafa', price: 100.00, gender: 'women', scent: 'floral', image: 'Cologne5.png', description: 'Fruity and powdery.' },
  { id: 6, name: 'Bleu Chanel', brand: 'Chanel', price: 190.00, gender: 'men', scent: 'woody', image: 'Cologne6.png', description: 'Crisp and fresh.' },
];

export default function BuyNowPage({ perfume }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Purchase confirmed!');
  };

  return (
    <div className="buy-now-page">
      <div className="buy-now-container">
        <h2 className="buy-now-title">Checkout</h2>
        <p className="buy-now-subtitle">
          You're buying <strong>{perfume?.brand} - {perfume?.name}</strong> for <strong>${perfume?.price}</strong>
        </p>

        <form className="buy-now-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input name="fullName" onChange={handleChange} type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input name="email" onChange={handleChange} type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input name="phone" onChange={handleChange} type="tel" placeholder="(123) 456-7890" required />
            </div>
            <div className="form-group full-width">
              <label>Shipping Address</label>
              <textarea name="address" onChange={handleChange} placeholder="123 Main St, City, Country" required></textarea>
            </div>
            <div className="form-group">
              <label>Credit Card Number</label>
              <input name="card" onChange={handleChange} type="text" placeholder="1234 5678 9012 3456" required />
            </div>
            <div className="form-group">
              <label>Expiration Date</label>
              <input name="expiry" onChange={handleChange} type="text" placeholder="MM/YY" required />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input name="cvv" onChange={handleChange} type="text" placeholder="123" required />
            </div>
          </div>

          <button type="submit" className="confirm-btn">Confirm Purchase</button>
        </form>
      </div>
    </div>
  );
}
