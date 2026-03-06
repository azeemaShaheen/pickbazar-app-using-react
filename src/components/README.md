# PickBazar React Grocery Store UI

A modern grocery store interface built using React, Redux Toolkit and Tailwind CSS.

This project demonstrates how a real e-commerce cart system works including product filtering and dynamic cart management.

## Features

• Product filtering by categories  
• Add products to cart  
• Increase / decrease quantity  
• Remove items from cart  
• Dynamic cart total calculation  
• Cart drawer UI  
• Responsive layout

## State Management

Redux Toolkit is used for managing application state.

A productSlice handles:

• Cart items  
• Quantity updates  
• Item removal  
• Automatic total price calculation

## Tech Stack

React  
Redux Toolkit  
Tailwind CSS  
Lucide Icons

## Project Structure

src
 ├── components
 │   ├── auth
 │   ├── header
 │   ├── hero-section
 │   ├── products
 │   └── promotion-section
 │
 ├── store
 │   └── slices
 │       └── productSlice.js

## Installation

Clone the repository

git clone https://github.com/azeemaShaheen/pickbazar-app-using-react.git

Install dependencies

npm install

Run project

npm run dev
