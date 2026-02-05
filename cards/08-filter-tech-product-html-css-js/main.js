// Data
const buttons = ['all', 'phones', 'watches', 'keyboards', 'headphones'];

const products = [
  {
    id: 1,
    category: 'phones',
    title: 'iPhone 15 Pro',
    description:
      'Latest iPhone with A17 Pro chip, 48MP camera system, and titanium design.',
    price: '$999',
    img: 'https://i.ibb.co.com/BKQBTWZn/iphone-phone.png',
  },
  {
    id: 2,
    category: 'headphones',
    title: 'AirPods Max',
    description:
      'Premium over-ear headphones with spatial audio and active noise cancellation.',
    price: '$549',
    img: 'https://i.ibb.co.com/DfdJdKvc/apple-headphone.png',
  },
  {
    id: 3,
    category: 'watches',
    title: 'Apple Watch Series 9',
    description:
      'Advanced health monitoring, always-on display, and seamless iPhone integration.',
    price: '$399',
    img: 'https://i.ibb.co.com/CGCPNcr/apple-watch.png',
  },
  {
    id: 4,
    category: 'keyboards',
    title: 'Mechanical Pro X',
    description:
      'RGB backlit mechanical keyboard with Cherry MX switches and programmable keys.',
    price: '$159',
    img: 'https://i.ibb.co.com/4RS1JgdG/pro-x-keyboard.png',
  },
  {
    id: 5,
    category: 'watches',
    title: 'Samsung Galaxy Watch',
    description:
      'Comprehensive fitness tracking, long battery life, and premium build quality.',
    price: '$329',
    img: 'https://i.ibb.co.com/3m35Bx7W/samsung-watch.png',
  },
  {
    id: 6,
    category: 'phones',
    title: 'Samsung Galaxy S24',
    description:
      'Flagship Android phone with AI features, 200MP camera, and S Pen support.',
    price: '$899',
    img: 'https://i.ibb.co.com/6RDZnMyd/galaxy-phone.png',
  },
  {
    id: 7,
    category: 'keyboards',
    title: 'Wireless Elite',
    description:
      'Ultra-slim wireless keyboard with excellent battery life and quiet typing.',
    price: '$89',
    img: 'https://i.ibb.co.com/kgyXR04T/wireless-keyboard.png',
  },

  {
    id: 8,
    category: 'headphones',
    title: 'Sony WH-1000XM5',
    description:
      'Industry-leading noise cancellation with exceptional sound quality and comfort.',
    price: '$399',
    img: 'https://i.ibb.co.com/4wRvb6fV/sony-headphone.png',
  },
  {
    id: 9,
    category: 'phones',
    title: 'Google Pixel 8',
    description:
      'Pure Android experience with exceptional camera AI and real-time translation.',
    price: '$699',
    img: 'https://i.ibb.co.com/Cs8MryY2/pixel-phone.png',
  },
  {
    id: 10,
    category: 'keyboards',
    title: 'Gaming Beast RGB',
    description:
      'Professional gaming keyboard with optical switches and customizable RGB lighting.',
    price: '$199',
    img: 'https://i.ibb.co.com/MyXW1jqq/gaming-keyboard.png',
  },
];

// DOM elements
const filterContainer = document.getElementById('filterContainer');
const productsGrid = document.getElementById('productsGrid');

// Render buttons
const renderButtons = () => {
  filterContainer.innerHTML = buttons
    .map(
      (button, inx) =>
        `
    <button class="filter-btn ${
      inx === 0 && 'active'
    }" data-filter="${button}">${button}</button>
    `
    )
    .join('');
};

// Render products
const renderProducts = (productsToShow) => {
  productsGrid.innerHTML = productsToShow
    .map(
      (product) => `
        <div class="product-card show" data-category="${product.category}">
          <div class="product-image">
            <img src="${product.img}" alt="${product.title}" />
            <button><i class="${
              product.id === 2 ? 'fa-solid' : 'fa-regular'
            } fa-heart"></i></button>
          </div>

          <div class="product-info">
            <span class="category">${product.category}</span>
            <h3 class="title">${product.title}</h3>
            <p class="description">
              ${product.description}
            </p>
            <p class="price">${product.price}</p>
            <div class="actions">
              <button class="btn">shop now</button>
              <button class="rounded-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
        `
    )
    .join('');
};

// Filter products
const filterProducts = (category) => {
  const productCards = document.querySelectorAll('.product-card');

  // Hide all product cards first
  productCards.forEach((card) => {
    card.classList.add('hidden');
    card.classList.remove('show');
  });

  // Show filtered products
  setTimeout(() => {
    if (category === 'all') {
      renderProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      renderProducts(filteredProducts);
    }
    heartEventListener();
  }, 500);
};

// Event listener for filter buttons
const filterEventListener = () => {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove active class
      filterButtons.forEach((btn) => btn.classList.remove('active'));

      // Add active class to clicked button
      button.classList.add('active');

      // Filter products
      const filterValue = button.getAttribute('data-filter');
      filterProducts(filterValue);
    });
  });
};

// Event listener for heart buttons
const heartEventListener = () => {
  const heartButtons = document.querySelectorAll('.product-image button');

  heartButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');

      const icon = btn.querySelector('i');

      if (btn.classList.contains('active')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
      } else {
        icon.classList.add('fa-regular');
        icon.classList.remove('fa-solid');
      }
    });
  });
};

// Initiate the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderButtons();
  renderProducts(products);
  filterEventListener();
  heartEventListener();
});
