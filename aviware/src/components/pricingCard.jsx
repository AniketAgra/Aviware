import React, { useState } from 'react';
import './pricingCard.css';
import TickIcon from '../assets/tick.svg'; // Import your tick mark SVG file

const plans = {
  monthly: [
    {
      title: 'Free',
      subtitle: '< 25 Daily Customers',
      price: 0,
      originalPrice: 299,
      accountText: 'Create Account',
      features: [
        'Sales, Purchase, Returns',
        'Stock, Alternatives search',
        'Party, Outstanding',
        'Expiry & Low Stock Alerts',
        '4.5 Lac+ Products Library',
        'Extensive Dashboard',
        'Import Purchase via CSVs',
        'Business Reports',
        'AI-enabled Refill Reminders',
      ],
      included: [0, 1, 2, 3, 4], // Features indexes included
      access: '1 Mobile App Login',
    },
    {
      title: 'Growth',
      subtitle: '25 - 50 Daily Customers',
      price: 249,
      originalPrice: 249,
      trial: true,
      access: '1 Mobile App Login + 1 Mobile App Login FREE',
      features: [
        'Sales, Purchase, Returns',
        'Stock, Alternatives search',
        'Party, Outstanding',
        'Expiry & Low Stock Alerts',
        '4.5 Lac+ Products Library',
        'Extensive Dashboard',
        'Import Purchase via CSVs',
        'Business Reports',
        'AI-enabled Refill Reminders',
      ],
      included: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      title: 'Essential',
      subtitle: '50 - 150 Daily Customers',
      price: 499,
      originalPrice: 499,
      trial: true,
      access: '1 Desktop App Login + 2 Mobile App Logins FREE',
      features: [
        'Sales, Purchase, Returns',
        'Stock, Alternatives search',
        'Party, Outstanding',
        'Expiry & Low Stock Alerts',
        '4.5 Lac+ Products Library',
        'Extensive Dashboard',
        'Import Purchase via CSVs',
        'Business Reports',
        'AI-enabled Refill Reminders',
      ],
      included: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
  ],
};

const PricingPlans = () => {
  const [activePlan, setActivePlan] = useState('monthly');
  const [desktopLogins, setDesktopLogins] = useState(4);
  const [mobileLogins, setMobileLogins] = useState(2);

  const handleLoginChange = (type, direction) => {
    if (type === 'desktop') {
      setDesktopLogins((prev) => Math.max(1, prev + direction));
    } else {
      setMobileLogins((prev) => Math.max(1, prev + direction));
    }
  };

  const calculateCustomPrice = () => {
    const basePrice = 1996;
    const desktopPrice = desktopLogins * 500;
    const mobilePrice = mobileLogins * 250;
    let totalPrice = basePrice + desktopPrice + mobilePrice;

    if (activePlan === 'yearly') {
      totalPrice *= 10;
    }

    return totalPrice;
  };

  return (
    <div className="pricing-container">
      <div className="plan-toggle">
        <span
          className={activePlan === 'monthly' ? 'active' : ''}
          onClick={() => setActivePlan('monthly')}
        >
          1-Month Plan
        </span>
        <span
          className={activePlan === 'yearly' ? 'active' : ''}
          onClick={() => setActivePlan('yearly')}
        >
          12-Months Plan
        </span>
      </div>

      <div className="pricing-cards">
        {plans.monthly.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3>{plan.title}</h3>
            <p className="subtitle">{plan.subtitle}</p>
            <p className="original-price">Original Price ₹ {plan.originalPrice}</p>
            <p className="price">₹ {activePlan === 'yearly' ? plan.price * 10 : plan.price} {activePlan === 'yearly' ? '/ year' : '/ month'}</p>
            {plan.trial ? (
              <button className="trial-btn">7-days Free Trial</button>
            ) : (
              <button className="trial-btn">Create Account</button>
            )}
            <p className="access">{plan.access}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={plan.included.includes(i) ? '' : 'disabled'}
                >
                  <img
                    src={TickIcon}
                    alt="Tick Icon"
                    className={`tick-icon ${plan.included.includes(i) ? '' : 'tick-disabled'}`}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Custom Plan */}
        <div className="pricing-card">
          <h3>Custom</h3>
          <p className="subtitle">150+ Daily Customers</p>
          <p className="original-price">Original Price ₹1996+</p>
          <p className="price">₹ {calculateCustomPrice()} {activePlan === 'yearly' ? '/ year' : '/ month'}</p>
          <button className="trial-btn">7-days Free Trial</button>
          <p className="access">{desktopLogins} Desktop Logins + {mobileLogins} Mobile Logins</p>
          <div className="counter-group">
            <p>Select number of devices:</p>
            <div className="counter">
              <span onClick={() => handleLoginChange('desktop', -1)}>-</span>
              <span>{desktopLogins} Desktop Logins</span>
              <span onClick={() => handleLoginChange('desktop', 1)}>+</span>
            </div>
            <div className="counter">
              <span onClick={() => handleLoginChange('mobile', -1)}>-</span>
              <span>{mobileLogins} Mobile Logins</span>
              <span onClick={() => handleLoginChange('mobile', 1)}>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;