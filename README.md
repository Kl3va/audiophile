# Audiophile E-commerce web app

Audiophile E-Commerce Store is a web application that allows users to browse and purchase gadgets ranging from speakers, headphones and earphones online. The application features a user-friendly interface that makes it easy to find and purchase products.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Screenshot](#screenshot)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Author](#author)

## Installation

To install and run the application locally, follow these below steps:

Clone the project

`git clone https://github.com/Kl3va/audiophile.git`

Navigate to the project directory

`cd audiophile`

Install all dependencies

`npm install`

Start the development server

`npm run dev`

## Usage

Once the application is up and running, it can be accessed by navigating to http://127.0.0.1:5173/ in your favourite web browser. From there, browse products, add items to your cart, remove, increase/decrease product amount and complete the entire checkout process.

## Technologies

- React
- TypeScript
- Scss
- Redux/ReduxToolKit
- Yup
- Formik
- Toastify

## Screenshot

![screen-gif](./audiophile.gif)

## What I learned

- This Project was very challenging in terms of planning how to structure the components and which component requires reusability. At the end of it all, I like how it turned out.
- Learnt the key fundamentals of TypeScript while building it... Would certainly explore more features like the Generic Props, Polymorphic components(React + TypeScript)...
- The toughest part of the project was the form validation. Getting formik to work with the defined interface was a pain in the ass. Ensuring the values are passed down to the components needing it was indeed also difficult. I finally settled with creating a Hooks, importing it into a single form component as against my other option of importing it into the parent container(Checkout) and passing it down to all the children(form, summary). This would ve been tedious(having to define all the types for the formik functions again) and leading to more prop drilling.

# Continued development

Performance Optimization.

## Author

- Kl3va - [Kl3va](https://github.com/Kl3va)
- Design - [Frontend Mentor](https://www.frontendmentor.io)
