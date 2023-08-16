import React from "react";
import Image1 from "../assets/Faveur.png";
import Image2 from "../assets/three pink flowers.png";
import Image3 from "../assets/big pink hibiscus flower.png";
import Image4 from "../assets/purpleflower.png";
import Image5 from "../assets/red_blooming_flower.png";
import WeddingImage from "../assets/wedding.jpg";
import ValentineImage from "../assets/Valentine Catagories.jpg";
import GraduationImage from "../assets/florist-graduation.jpg";
import FlowerMarketImage from "../assets/ceritanya-gedungfloracare.jpg";

import { useState } from "react";

function LandingPage() {
  const flowers = [
    {
      id: 1,
      image: Image1,
      icon: "📍",
      title: "Faveur Florist Jakarta",
      location: "Kota Jakarta Timur",
      description:"Perumahan billy and moon, Jl. Kelapa Sawit II No.5, Pd. Klp., Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13450",
      rating: 4.5,
      },
    { id: 2, image: Image2, title: "Elegant Tulip", price: 99900 },
    { id: 3, image: Image3, title: "Hibiscus Bloom", price: 199900 },
    { id: 4, image: Image4, title: "Purple Delight", price: 299900 },
    { id: 5, image: Image5, title: "Radiant Red", price: 59900 },
  ];

  const collections = [
    {
      id: "wedding",
      image: WeddingImage,
      title: "Wedding Flowers",
      description: "Elegant floral arrangements for your special day.",
    },
    {
      id: "valentine",
      image: ValentineImage,
      title: "Valentine's Day Flowers",
      description: "Express your love with our romantic flower arrangements",
    },
    {
      id: "graduation",
      image: GraduationImage,
      title: "Graduation Flowers",
      description: "Celebrate academic achievements with our flowers",
    },
  ];

  const services = [
    {
      id: 1,
      icon: "🌸",
      title: "Custom Flower Arrangements",
      description: "Create unique flower arrangements for any occasion.",
    },
    {
      id: 2,
      icon: "💐",
      title: "Bouquet Customization",
      description:
        "Personalize your bouquet with your favorite flowers and colors.",
    },
    {
      id: 3,
      icon: "🌷",
      title: "Same-Day Delivery",
      description: "Enjoy fast and reliable same-day flower delivery services.",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I place an order?",
      answer:
        "You can place an order by visiting our website and selecting the flowers you want. Then, proceed to checkout and follow the prompts.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards and PayPal for online payments.",
    },
    {
      id: 3,
      question: "Can I customize flower arrangements?",
      answer:
        "Yes, you can customize your flower arrangements by contacting our customer support team.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <>
      <section className="h-[700px] flex items-center overflow-x-hidden bg-gradient-to-tr from-stone-300 via-red-300 to-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center lg:gap-y-8 lg:gap-x-56 h-full">
            {/* welcome text */}
            <h1 className="text-7xl lg:text-8xl text-white drop-shadow-md shadow-black-600/50">
              Welcome <span /> to floracare
            </h1>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row justify-center lg:gap-y-8 lg:gap-x-56 h-full">
        {/* Flower Market */}
        <section className="py-16 px-36 bg-pink-100">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 md:mr-8">
                <img
                  src={FlowerMarketImage}
                  alt="Flower Market"
                  className="w-full lg:w-full lg:h-[570px] rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/3 lg:py-0 py-6">
                <h2 className="text-3xl font-semibold mb-6 uppercase text-pink-600">
                  Introducing <span />
                  Floracare
                </h2>
                <p className="text-gray-600 mb-6">
                  Explore a variety of beautiful flowers in our marketplace.
                  From vibrant roses to elegant tulips, you'll find the perfect
                  blooms for any occasion.
                </p>
                <p className="text-gray-600 mb-6">
                  "Express Emotions with Elegance:
                  <br />
                  Your Blooms, Your Way, Anywhere in Jakarta!"
                </p>
                <button className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600">
                  Learn More
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
              {flowers.map((flower) => (
                <div
                  key={flower.id}
                  className="bg-white rounded-lg shadow-md p-4 overflow-hidden relative"
                >
                  <div className="relative">
                    <img
                      src={flower.image}
                      alt={flower.title}
                      className="w-full h-48 object-cover mb-4 rounded-lg"
                    />
                    <div className="absolute inset-0"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black opacity-0 transition-opacity hover:rounded-lg rounded-lg hover:opacity-80 p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {flower.title}
                      </h3>
                      {/* Placeholder for Rating */}
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">&#9733;</span>
                        <span className="text-white">{flower.rating}</span>{" "}
                       
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg text-pink-600 font-semibold mb-2">
                    {flower.title}
                  </h3>
                  <p className="font-semibold text-gray-800 transition-colors">
                    {flower.location}                        {flower.icon}
                  </p>
                  <p className="text-gray-600 text-[11px]">
                    {flower.description}
                  </p>
                  <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600">
                    Order Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Featured Collections */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 uppercase text-gray-800">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="bg-white rounded-lg shadow-md p-0 flex flex-col justify-center items-center mt-2 overflow-hidden"
                style={{ margin: 0 }} // Remove margin
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-48 object-cover mb-0 rounded-lg "
                  style={{ margin: 0, objectFit: "cover" }} // Add objectFit property
                />
                <h3 className="text-lg font-semibold mb-2 py-2 text-pink-600">
                  {collection.title}
                </h3>
                <h4 className="text-base text-gray-600 font-medium mb-2">
                  {collection.description}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services or Products Overview */}
      <section className="py-16 bg-pink-100 p-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 uppercase text-gray-800">
            Services or Products Overview
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <span className="text-2xl mb-2">{service.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs with Accordion */}
      <section className="py-4 bg-gray-100 p-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 uppercase text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className=" rounded-lg shadow-md p-4 bg-pink-200"
              >
                <button
                  className="flex items-center w-full text-left text-lg font-semibold mb-2 focus:outline-none"
                  onClick={() =>
                    setActiveFaq(faq.id === activeFaq ? null : faq.id)
                  }
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`ml-auto transform transition-transform ${
                      faq.id === activeFaq ? "rotate-0" : "rotate-180"
                    }`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66669 4.66669L8.00002 10L13.3334 4.66669"
                      stroke="#374151"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {faq.id === activeFaq && (
                  <p className="text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
