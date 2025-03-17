# Amazon Clone

A React-based Amazon clone application with shopping cart functionality built using React, Material UI, and TypeScript.

<img width="1440" alt="Screenshot 2025-03-18 at 2 00 52 AM" src="https://github.com/user-attachments/assets/f61c29b4-1baf-4a5c-804c-a711fe6cb362" />


## Features

- Responsive design that works across devices
- Product listing with images, prices, ratings, and discount information
- Prime shipping badges
- Functional shopping cart with add and remove capabilities
- Checkout page with order summary
- Interactive UI components including banners, product cards, and navigation
- Material UI theming for Amazon's distinctive look and feel

## Technologies Used

- React 18
- TypeScript
- Material UI (MUI)
- React Router
- Context API for state management
- CSS-in-JS styling with Emotion

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/amazon-clone.git
cd amazon-clone
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to http://localhost:3000

## Project Structure

```
src/
├── components/      # UI components
├── context/         # React Context for state management
├── pages/           # Page components
├── types/           # TypeScript type definitions
├── App.tsx          # Main app component with routing
└── index.tsx        # Entry point
```

## Key Components

- **Header**: Navigation and cart badge
- **Product**: Card component for displaying products
- **CheckoutPage**: Display cart items and order summary
- **CartContext**: Context API for managing the shopping cart state

## Future Enhancements

- User authentication
- Product search functionality
- Product detail pages
- Persistent cart (localStorage)
- Payment processing integration
- User reviews and ratings
- Order history

## License

MIT

## Acknowledgments

- Design inspired by Amazon.com
- Images sourced from various public repositories for demonstration purposes
