import React, { useState } from 'react';
import './Register.css';
import logo from '../assets/AviwareLogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const RegisterBusinessForm = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    mobileNumber: '',
    email: '',
    businessName: '',
    businessType: 'retailer',
    gstRegistered: 'yes',
    pincode: '',
    district: '',
    companyLogo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, companyLogo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div id="register" className="form-container">
      <Link to='/'><img src={logo} alt="LocalWell Logo" className="form-logo" /></Link>
      <Link to="/" className="back-arrow"><FontAwesomeIcon icon={faHouse} style={{ color: "#3b82f6" }} /></Link>
      <h2 className="form-title">Register Your Business</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <label>
            <span className="label-inline">
              Owner's Name<span className="required">*</span>
            </span>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <span className="label-inline">
              Mobile Number<span className="required">*</span>
            </span>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label>
          <span className="label-inline">
            Email ID<span className="required">*</span>
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span className="label-inline">
            Business Name<span className="required">*</span>
          </span>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
        </label>

        <div className="radio-row">
          <span className="radio-title">Business Type<span className="required">*</span></span>
          <div className="radio-options">
            <label>
              <input type="radio" name="businessType" value="retailer" checked={formData.businessType === 'retailer'} onChange={handleChange} />
              Retailer
            </label>
            <label>
              <input type="radio" name="businessType" value="distributor" checked={formData.businessType === 'distributor'} onChange={handleChange} />
              Distributor
            </label>
          </div>
        </div>

        <div className="radio-row">
          <span className="radio-title">GST Registered?<span className="required">*</span></span>
          <div className="radio-options">
            <label>
              <input type="radio" name="gstRegistered" value="yes" checked={formData.gstRegistered === 'yes'} onChange={handleChange} />
              Yes
            </label>
            <label>
              <input type="radio" name="gstRegistered" value="no" checked={formData.gstRegistered === 'no'} onChange={handleChange} />
              No
            </label>
          </div>
        </div>


        <div className="input-row">
          <label className="half-width with-counter">
            <span className="label-inline">Area Pincode<span className="required">*</span></span>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              maxLength="6"
            />
            <span className="char-counter">{formData.pincode.length}/6</span>
          </label>

          <label className="half-width">
            <span className="label-inline">District Name</span>
            <input type="text" name="district" value={formData.district} onChange={handleChange} />
          </label>
        </div>


        <label className="file-upload">
          <span className="label-inline">
            Company Logo<span className="required">*</span>
          </span>
          <input
            type="file"
            name="companyLogo"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>

        <button type="submit" className="submit-button">
          Register Now
        </button>

        <p className="referral-text">
          Already Have An Account? <Link to='/register' className='link__login'>Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterBusinessForm;
