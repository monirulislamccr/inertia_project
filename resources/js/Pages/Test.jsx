// src/Test.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from '@inertiajs/react';

const products = [
  { id: 1, name: 'Product 1', category: 'Category A', price: 19.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Product 2', category: 'Category B', price: 29.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Product 3', category: 'Category A', price: 39.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 1, name: 'Product 1', category: 'Category A', price: 19.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Product 2', category: 'Category B', price: 29.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Product 3', category: 'Category A', price: 39.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 1, name: 'Product 1', category: 'Category A', price: 19.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Product 2', category: 'Category B', price: 29.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Product 3', category: 'Category A', price: 39.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 1, name: 'Product 1', category: 'Category A', price: 19.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Product 2', category: 'Category B', price: 29.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Product 3', category: 'Category A', price: 39.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 1, name: 'Product 1', category: 'Category A', price: 19.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Product 2', category: 'Category B', price: 29.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Product 3', category: 'Category A', price: 39.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 1, name: 'Product 1', category: 'Category A', price: 19.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Product 2', category: 'Category B', price: 29.99, imageUrl: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Product 3', category: 'Category A', price: 39.99, imageUrl: 'https://via.placeholder.com/300' },
  // Add more products here
];

const categories = ['All', 'Category A', 'Category B'];

const bannerImageUrl = 'https://via.placeholder.com/1200x300';

function Test() {
  const sliderSettings = {
    lazyLoad: 'ondemand',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024, // Medium-sized screens
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768, // Small-sized screens
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480, // Mobile-sized screens
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  };

  // Organize products by category
  const productsByCategory = categories.map((category) =>
    category === 'All' ? products : products.filter((product) => product.category === category)
  );

  return (
    <div className="bg-gray-100">
      <header className="bg-white py-4 shadow">
        <div className="container mx-auto px-4">
          <Link href={route('login')} className="text-2xl font-semibold">Simple E-commerce</Link>
        </div>
      </header>

      <nav className="bg-blue-500 py-4 text-white">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4">
            {categories.map((category) => (
              <li key={category}>
                <a href="#" className="hover:text-blue-200">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="w-full">
        <img src={bannerImageUrl} alt="Banner" className="w-full h-40 sm:h-80 object-cover" />
      </div>

      <main className="container mx-auto py-8 px-4">
        {productsByCategory.map((categoryProducts, index) => (
          <div className='mt-10' key={categories[index]}>
            <h2 className="text-2xl font-semibold mb-4">{categories[index]}</h2>
            <Slider {...sliderSettings}>
              {categoryProducts.map((product) => (
                <div key={product.id} className="bg-white shadow rounded-lg p-4">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4" />
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600">${product.price}</p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    Add to Cart
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </main>

      <footer className="bg-gray-800 py-4 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Simple E-commerce. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Test;
