import React, { useState } from 'react';
import './Hero.css';
import Header from './Header';
import sec2img from '../assets/sec2.jpg';
import sec2rating from '../assets/rating.svg';
import sec2Google from '../assets/googleplay.svg'
import toatal_health from '../assets/totalhealth.png';
import mobBanner from '../assets/banner_mobile.png';
import rightArrow from '../assets/arrowRight.svg';
import report1 from '../assets/report2.jpg';
import report2 from '../assets/report1.jpg';
import sec5img from '../assets/sec4.png';
import propietor from '../assets/propietor.webp';
import med1 from '../assets/med1.webp';
import med2 from '../assets/med2.webp';
import med3 from '../assets/med3.webp';
import Card from './Card';
import successStars from '../assets/stars.svg';
import sec6img from '../assets/anydevice.png';
import FAQItem from './Faqs';
import SupportedBy from '../assets/supportedby.svg';
import PricingPlans from './pricingCard';
import Slider from './Slider';
import mobMain from '../assets/main_mobile.jpg';

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };


  const cardsData = [
    {
      image: med1,
      title: 'Medicare Plus Medical & General Stores',
      subtitle: 'Kaikaluru, Dist. Krishna (A.P.)',
      description: 'This pharmacy is located in the small town of Kaikaluru set on the banks of the river Krishna. It is part of the Medicare Group of Hospitals. The major challenge was to cater to the high footfall keeping the customer wait time manageable. The feature of having multiple logins for the same account and the ability of billing from smartphones turned out to be a panacea for them at no additional cost'
    },
    {
      image: med2,
      title: 'Navjivan Chemist',
      subtitle: 'New CG Road, Ahmedabad (G.J.)',
      description: 'Mr Rajendra Patel, the owner, believes in an aggressive procurement strategy to stay ahead of the competition. They were doing 35-50 purchases on a daily basis. The issue was the enormous load from feeding purchases into the pharmacy software. To remedy this, we introduced them to the feature of importing purchase bills via CSVs which saved them time and errors'
    },
    {
      image: med3,
      title: 'Ashirvad Medical & General Stores',
      subtitle: 'Ambad, Dist. Jalna (M.H.)',
      description: 'There were a series of challenges before the owner, catering to a high footfall, attrition among employees, repetitive need to train & monitor the new ones. The problem was aggravated by the limited digital literacy of employees and the complex nature of the software used previously. Aviware’s user-friendly interface & remote monitoring over the cloud made it a lot easier for them'
    }
  ];

  const faqData = [
    {
      question: "Why should I choose Aviware over the other billing softwares available for pharmacies?",
      answer:
        "The single biggest reason is that, unlike other billing softwares, Aviware serves Pharma businesses only. We work very hard on the software backend to make sure that the frontend is simple for the users, with no training required whatsoever. It is cloud-based, so you could run it on multiple mobiles and desktops at the same time. No download is required, try for free. Besides being perfect for billing or management of pharmacy, Aviware does a lot more to bring in business for retailers. It identifies the best customers and helps you engage more with them. It tells you which product to buy and which one to sell. It also presents data insights to help a medical store plan its purchases. Thus, Aviware is not just a software but more of a virtual assistant for pharma retailers.",
    },
    {
      question: "‘Aviware runs on Cloud’. What does it mean and why does it matter for my pharmacy business?",
      answer:
        "Aviware doesn’t rely on the computing power of your local machine for performance. It runs on big computers called Cloud servers located at a central location. This helps the software perform a lot of operations parallely in a very short span of time. This also makes it possible to run this medical store software online from anywhere on a device of your choice. Data stored on Cloud is like valuables stored in a Bank Locker which can only be accessed by you with your key or a ‘User Authentication token’, making this medical store software 100% secure. A lot of activities take place at a pharmacy at a given time such as billing, uploading purchases, stock verification, accounting, etc. Having the ability to run the software on multiple devices within the shop can really make the job of managing a pharmacy a lot easier.",
    },
    {
      question: "Aviware is GST-ready software and our business is Non-GST registered. Can we still use it?",
      answer:
        "Aviware supports all three types of businesses, i.e., GST Registered, Non-GST registered and composition dealers. Hence, GST registration is not mandatory for using this software. If, at a later stage, you choose to register your medical store business for GST, you can always update the status and the software will take care of the rest for you. In fact, we designed the software as a sort of GST playground for pharmacies to get comfortable with the GST structure even before getting registered. For the GST registered businesses, it does everything from tax calculation to compiling your GST Returns. We have strictly followed the GST guidelines on billing, returns and invoice formats. But at the same time, we have also built in certain flexibilities for the retailer’s convenience such as provisions for Cash Sale, Delivery Challan, Non-GST purchases, etc.",
    },
    {
      question: "How does Aviware manage to offer the same technology from big retail chains at such affordable rates?",
      answer:
        "Aviware is at par or in some sense, even better than the retail technology used by the big pharmacy chains such as Apollo, Medlife, etc. They have spent a huge sum of money to develop the technology that they use, but by spreading the overall development cost over a large number of medical stores, we have managed to bring down the individual cost of software for a pharmacy. Because of this, even the smallest of retail pharmacies get to use the latest technology at a fraction of the total cost. Also, we have kept our costs lower by selling to the pharmacies directly, so there are no sale commissions involved. For us, the pharmacy owner should be the ultimate winner.",
    },
    {
      question: "What are some of your advanced features that will take our pharmacy business to the next level?",
      answer:
        "Besides the common features that you find among all the pharmacy softwares such as billing, inventory, accounting, payments, Aviware has some advanced features. It is said that 80% revenue comes from the top 20% customers of a business. Aviware helps a medical store identify such customers so that they can engage more with them for their business. It looks at the medicines and buying pattern for each customer to forecast their refill date accurately. Also, the software analyzes the stock and sales data to forecast the retail demand for a period of time. This feature is very helpful for medical stores to plan their purchases beforehand so that there are minimal losses due to non-availability of drugs.",
    },
  ];


  return (
    <div>
      <Header />
      <div className="hero">
        <img className="hero__mobMain" src={mobMain} alt="Aviware Logo" />
        <div className="hero__content">
          <p className="hero__title">
            Everything<br className='section3__break'/> you need to excel<br className='section3__break'/> in Pharmacy Business
          </p>
          <div className="hero__description">
            {isExpanded
              ? (
                <>
                  Do us a favour. Just focus on growing your retail pharmacy business and leave the rest to us. Aviware is probably the only billing software developed exclusively for pharmacies and medical store owners. This has helped Aviware become the best at what it does. Retail billing is super easy and with Aviware, the retailers can now achieve far more by doing far less. Whether you have an already running pharmacy business or you may have just applied for a drug licence, it is equally useful in both the cases. In today’s times, just having a software for billing doesn’t guarantee success in business. What you need is a software that is intelligent and can do much more than billing with utmost simplicity and ease
                  <button className="hero__toggle-btn" onClick={toggleReadMore}>
                    Read Less
                  </button>
                </>
              )
              : (
                <>
                  Do us a favour. Just focus on growing your retail pharmacy business and leave the rest to us. Aviware is probably the only...
                  <button className="hero__toggle-btn" onClick={toggleReadMore}>
                    Read More
                  </button>
                </>
              )}
          </div>
          <button className="hero__button">TRY FOR FREE</button>
        </div>
      </div>
      <div className="section2">   
        <div className="section2__img">
              <img src={sec2img} alt="" />
        </div>        
        <div className="section2__content">
            <div className="section__rating">
                <h1>4.7</h1>
                <img src={sec2rating} alt='ratings'></img>
            </div>
            <p>The Highest-Rated Pharmacy Software on Google Playstore</p>
            <div className="section2__buttons">
                <button className="section2__button">SEE ALL FEATURES</button>
                <button className="section2__googleButton"><img src={sec2Google}></img></button>
            </div>
        </div>
      </div>
      <div className="section3">
        <div className="section3__content">
            <p className='section3__title'>Trusted by 5,000+ Retail Pharmacies<br className='section3__break'/> Across 490+ Cities with Aviware <br className='section3__break'/>Pharmacy Billing Software</p>
            <img className='section3__img__mob' src={mobBanner} alt="total_health" />
            <p className='section3__para'>Aviware is a boon for retailers like us. Management of the pharmacy business has become very simple and easy with this software. It is user-friendly and their support team is really dedicated. Medical store billing is fast, and the customer gets notified on WhatsApp upon sale. Search for any medicine, and the software will suggest you substitutes from your stock.</p>
            <img className='section3__img' src={toatal_health} alt="total_health" />
            <p className='section3__name'>Animesh Agrawal</p>
            <p className='section3__nameAddress'>Proprietor, Total Health, Ahmedabad</p>
            <div className='section3__content__link'>
                <a className='section3__link' href="https://play.google.com/store">Let me see what the hype is all about </a>
                <img className='arrowRight' src={rightArrow} alt='arrow'></img>
            </div>
        </div>
      </div>
      <div className="section4">
        <div className="section4__content">
            <p className='section4__title'>Not just another piece of<br className='section4__break'/> paper!</p>
            <div className="hero__description">
            {isExpanded
              ? (
                <>
                  Invoices are an accurate reflection of how you run your business. With Aviware, you can customize the customer invoice for free. Just fill in the details of your retail pharmacy, upload a business logo and the pharmacist’s signature to get started. You can also fill in some additional info such as the drug licence number for the medical store, HSN Code & GST rates for products. The invoice link gets sent to the customer directly over SMS or WhatsApp. He can choose to print, share or download his invoice from this billing software for free. Aviware then analyzes the generated invoice and compares the medicines bought by the customer with his pharmacy buying pattern. It then gives the customer an importance score and automatically sets a refill reminder for him for his frequently bought medicines. The medical store can then follow up with him in due time for maximum conversion.
                  <button className="hero__toggle-btn" onClick={toggleReadMore}>
                    Read Less
                  </button>
                </>
              )
              : (
                <>
                  Invoices are an accurate reflection of how you run your business. With Aviware, you can customize the customer invoice for free. Just fill in the details of your retail pharmacy, upload...
                  <button className="hero__toggle-btn" onClick={toggleReadMore}>
                    Read More
                  </button>
                </>
              )}
            </div>
            <button className="hero__button">TRY FOR FREE</button>
        </div>
        <img className='section4__img' src={report1} alt="total_health" />
        <img className='section4__img2' src={report2} alt="total_health" />
      </div>
      <div className="section5">
        <div className="section5__image">
            <img src={sec5img} alt="section5 Image" />
        </div>
        <div className="section5__content">
            <p className='section5__title'>Perfect for Product <br/>Distributors and <br/>Pharmacies Alike</p>
            <div className="hero__description">
            {isExpanded
              ? (
                <>
                  The thing that makes us probably the best retail billing software for pharmacies is the Largest Verified Products Library that comes with it. Simply search for any product and the software will tell you everything from its company name to its medicine composition to the HSN Code, GST rate and a lot more. It will tell you about the availability in stock and will also suggest substitutes in case of non-availability. It also makes note of the out of stock or expired medicines in the store and adds them to the in-built pharmacy shortbook for the purpose of ordering. This brings down the loss in the pharma business significantly. You can search for local pharma wholesalers or distributors for a product and also do a rate comparison
                  <button className="hero__toggle-btn" onClick={toggleReadMore}>
                    Read Less
                  </button>
                </>
              )
              : (
                <>
                  The thing that makes us probably the best retail billing software for pharmacies is the Largest Verified Products Library that comes with it. Simply search for any...
                  <button className="hero__toggle-btn" onClick={toggleReadMore}>
                    Read More
                  </button>
                </>
              )}
            </div>
            <div className='section5__content__link'>
                <a className='section5__link' href="https://play.google.com/store">Don’t believe us? See for yourself </a>
                <img className='arrowRight__section5' src={rightArrow} alt='arrow'></img>
            </div>
            <img className='section5__propietor' src={propietor} alt="total_health" />
            <p className='section5__name'>I was looking for such software for my medical store for a very long time. Ideal for businesses that are just starting up and in need of good pharmacy billing software but cannot afford the heavy cost of a computer.</p>
            <div className="section5__propietor__name">
                <p className='section5__name1'><b>Pravat Kumar</b></p>
                <p className='section5__nameaddress'>Proprietor, Tirupati Medicare, Vishakhapatnam</p>
            </div>
        </div>
      </div>
      <div className="section6">
        <div className="section6_anytime">
            <img className='section6__image' src={sec6img}></img>
            <div className="section6__content">
                <p className='section6__title'>Anytime,<br/>Anywhere,<br/>Any Device!</p>
                <div className="hero__description">
                {isExpanded
                  ? (
                    <>
                      Aviware is one of the only Pharmacy softwares which offers the freedom and convenience of managing your medical store business not just from a computer but also from a mobile phone. Unlike others, Aviware is a cloud-based pharmacy software. This enables medical store businesses to download and run the software on multiple devices at the same time. It will bring down the customer wait time and the overall workload significantly. One other advantage of having a cloud-based software is that the pharmacy data is backed up in real-time to avoid any data loss and also, the software gets updated automatically, so no download or installation is required.
                      <button className="hero__toggle-btn" onClick={toggleReadMore}>
                        Read Less
                      </button>
                    </>
                  )
                  : (
                    <>
                      Aviware is one of the only Pharmacy softwares which offers the freedom and convenience
                      <button className="hero__toggle-btn" onClick={toggleReadMore}>
                        Read More
                      </button>
                    </>
                  )}
                </div>
                <button className="hero__button">TRY FOR FREE</button>
            </div>
        </div>
        <div className='section6__slider'>
          <h1>Pharmacy Software Features</h1>
          <Slider />
        </div>
      </div>

      <div className="section7">
          <div className="plan__suits">
              <h1>Which Plan Suits You?</h1>
              <p className='plan__suits__para'>Start using Aviware for free and we'll be with you as you grow</p>
              <PricingPlans />
          </div>
          <div className="faqs">
              <div className="faqs__content">
                  <h1>Frequently Asked Questions</h1>
                  <p className='faqs__para'>Don’t satiate your curious soul here. We love answering questions as much as you love asking them, we promise!</p>
                  <button className='faqs__button'>TALK TO SALES</button>

                <img className='faqs__supportedby' src={SupportedBy} alt="supported by" />
              </div>
              <div className="faqs__container">
                  {faqData.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === index} // Check if the current index matches the openIndex
                      onToggle={() => toggleFAQ(index)} // Pass the toggle logic
                    />
                  ))}
              </div>
          </div>
      </div>
      <div className="success__stories">
        <h1>Success Stories</h1>
        <img className='success__stories__img' src={successStars} alt="section5 Image" />
          <div className='success_stories_cards'>
          {cardsData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <div className="elevate">
        <p className='elevate__title1'>Elevate Your Pharmacy Business with Aviware</p>
        <p className='elevate__title2'>latest innovation in pharmacy softwares</p>
        <div className='elevate__buttons'>
            <button className=' elevate__button1'>TRY FOR FREE</button>
            <button className="section2__button">TALK TO SALES</button>
        </div>
      </div>
    </div>
  );
} 