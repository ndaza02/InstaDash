# Product Catalog

A simple, responsive product catalog website built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Category-based product filtering
- Product details modal
- Clean and modern UI
- Easy to add new products and categories

## Folder Structure

```
product-catalog/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── products/
│   ├── category1/
│   │   ├── product1/
│   │   │   ├── images/
│   │   │   └── description.txt
│   │   └── product2/
│   │       ├── images/
│   │       └── description.txt
│   └── category2/
│       └── ...
├── index.html
└── README.md
```

## How to Add Products

1. Create a new folder for your category in the `products` directory if it doesn't exist
2. Inside the category folder, create a new folder for your product
3. Add your product images to the product folder
4. Update the `productsData` object in `js/script.js` to include your new product:

```javascript
"category-name": [
    {
        id: "unique-id",
        name: "Product Name",
        price: 99.99,
        image: "products/category-name/product-folder/image.jpg",
        description: "Product description goes here.",
        specs: ["Spec 1", "Spec 2", "Spec 3"]
    }
]
```

## How to Run

Simply open the `index.html` file in your web browser. No server required for local development.

## Customization

- Update the color scheme in `css/style.css` by modifying the color variables at the top of the file
- Adjust the grid layout in the `.products-container` class to change how many products appear per row
- Modify the breakpoints in the media queries to adjust the responsive behavior

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (latest)
