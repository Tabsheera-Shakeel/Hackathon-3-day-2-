// Sanity Schema for Products
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      { 
        name: 'name', 
        type: 'string', 
        title: 'Product Name' 
      },
      { 
        name: 'price', 
        type: 'number', 
        title: 'Price' 
      },
      { 
        name: 'stock', 
        type: 'number', 
        title: 'Stock Level' 
      },
      { 
        name: 'category', 
        type: 'string', 
        title: 'Category' 
      },
      { 
        name: 'image', 
        type: 'image', 
        title: 'Product Image',
        options: {
          hotspot: true // Allows you to adjust the focus area of the image
        }
      },
    ],
  };
  