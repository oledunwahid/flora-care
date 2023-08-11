import React from "react";
import Image1 from "../assets/flower.png";
import Image2 from "../assets/three pink flowers.png";
import Image3 from "../assets/big pink hibiscus flower.png";
import Image4 from "../assets/purpleflower.png";
import Image5 from "../assets/red_blooming_flower.png";
import WeddingImage from "../assets/wedding.jpg";
import ValentineImage from "../assets/Valentine Catagories.jpg";
import GraduationImage from "../assets/florist-graduation.jpg";

function LandingPage() {
  const flowers = [
    { id: 1, image: Image1, title: "Lovely Rose", price: 49900 },
    { id: 2, image: Image2, title: "Elegant Tulip", price: 99900 },
    { id: 3, image: Image3, title: "Hibiscus Bloom", price: 199900 },
    { id: 4, image: Image4, title: "Purple Delight", price: 299900 },
    { id: 5, image: Image5, title: "Radiant Red", price: 59900 },
  ];
  

  const collections = [
    { id: "wedding", image: WeddingImage, title: "Wedding Flowers" },
    { id: "valentine", image: ValentineImage, title: "Valentine's Day Flowers" },
    { id: "graduation", image: GraduationImage, title: "Graduation Flowers" },
  ];

  const services = [
    { id: 1, icon: "🌸", title: "Custom Flower Arrangements", description: "Create unique flower arrangements for any occasion." },
    { id: 2, icon: "💐", title: "Bouquet Customization", description: "Personalize your bouquet with your favorite flowers and colors." },
    { id: 3, icon: "🌷", title: "Same-Day Delivery", description: "Enjoy fast and reliable same-day flower delivery services." },
  ];

  const faqs = [
    { id: 1, question: "How do I place an order?", answer: "You can place an order by visiting our website and selecting the flowers you want. Then, proceed to checkout and follow the prompts." },
    { id: 2, question: "What payment methods do you accept?", answer: "We accept major credit cards and PayPal for online payments." },
    { id: 3, question: "Can I customize flower arrangements?", answer: "Yes, you can customize your flower arrangements by contacting our customer support team." },
  ];


  return (
    <>
      <section className="h-[700px] flex items-center overflow-x-hidden bg-gradient-to-tr from-stone-300 via-red-300 to-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center lg:gap-y-8 lg:gap-x-56 h-full">
            {/* curved text */}
            <h1 className="text-7xl lg:text-8xl text-white drop-shadow-md shadow-black-600/50">
              Welcome <span /> to floracare
            </h1>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row justify-center lg:gap-y-8 lg:gap-x-56 h-full">
        {/* Catalog section */}
        <section className="py-16 px-24 bg-pink-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8 uppercase text-pink-600">
              Featured Flowers
            </h2>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {flowers.map((flower) => (
                <div
                  key={flower.id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <img
                    src={flower.image}
                    alt={flower.title}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mb-2">{flower.title}</h3>
                  <p className="text-gray-600">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(flower.price)}
                  </p>
                  <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600">
                    Add to Cart
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold mb-2">{collection.title}</h3>
                <button className="mt-2 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600">
                  Explore Collection
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Services or Products Overview */}
       <section className="py-16 bg-pink-100">
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
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs nanti pake accordion*/}
      <section className="py-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 uppercase text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-8">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
