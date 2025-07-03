import React, { useState } from 'react';
import './SurveyPage.css';

export default function SurveyPage() {
  const [form, setForm] = useState({
    satisfaction: '',
    favorite: '',
    missing: '',
    recommend: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Survey submitted:', form);
    alert('Thank you for your feedback!');
  };

  return (
    <div className="survey-container">
      <h1>We Value Your Feedback</h1>
      <form className="survey-form" onSubmit={handleSubmit}>
        <label>
          How satisfied were you with your visit?
          <select name="satisfaction" value={form.satisfaction} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="1">1 - Very Dissatisfied</option>
            <option value="2">2</option>
            <option value="3">3 - Neutral</option>
            <option value="4">4</option>
            <option value="5">5 - Very Satisfied</option>
          </select>
        </label>

        <label>
          What did you enjoy most?
          <input type="text" name="favorite" value={form.favorite} onChange={handleChange} />
        </label>

        <label>
          Was anything missing or disappointing?
          <input type="text" name="missing" value={form.missing} onChange={handleChange} />
        </label>

        <label>
          Would you recommend us?
          <div>
            <label><input type="radio" name="recommend" value="yes" onChange={handleChange} required /> Yes</label>
            <label><input type="radio" name="recommend" value="no" onChange={handleChange} /> No</label>
          </div>
        </label>

        <label>
          Additional comments:
          <textarea name="comments" value={form.comments} onChange={handleChange} rows={4} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
