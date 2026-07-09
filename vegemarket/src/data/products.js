export const categories = [
  { id: 1, name: 'Fruits', icon: '🍎', slug: 'fruits' },
  { id: 2, name: 'Vegetables', icon: '🥦', slug: 'vegetables' },
  { id: 3, name: 'Nuts & Dates', icon: '🥜', slug: 'nuts' },
  { id: 4, name: 'Bakery', icon: '🍞', slug: 'bakery' },
  { id: 5, name: 'Dairy', icon: '🥛', slug: 'dairy' },
  { id: 6, name: 'Pantry', icon: '🍚', slug: 'pantry' },
  { id: 7, name: 'Beverages', icon: '🧃', slug: 'beverages' },
  { id: 8, name: 'Frozen', icon: '❄️', slug: 'frozen' },
];

const productNames = ['Apple', 'Banana', 'Orange', 'Mango', 'Potato', 'Tomato', 'Onion', 'Garlic', 'Broccoli', 'Spinach', 'Carrot', 'Milk', 'Cheese', 'Butter', 'Bread', 'Cake', 'Coffee', 'Tea', 'Frozen Pizza', 'Baby Cereal', 'Almonds', 'Cashews', 'Dates', 'Rice', 'Flour', 'Oil', 'Honey', 'Juice', 'Soft Drink'];
const images = [
  'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop'
];
const categoriesList = ['fruits','vegetables','nuts','bakery','dairy','pantry','beverages','frozen'];

export const products = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: productNames[i % productNames.length] + (i > 20 ? ' Premium' : ''),
  price: (2.99 + (i % 10) * 0.5).toFixed(2),
  discount: i % 3 === 0 ? Math.floor(Math.random() * 20 + 5) : 0,
  rating: (3.5 + (i % 5) * 0.3).toFixed(1),
  image: images[i % images.length],
  organic: i % 2 === 0,
  stock: i % 5 === 0 ? 0 : Math.floor(Math.random() * 50 + 10),
  category: categoriesList[i % categoriesList.length],
  description: 'Fresh and organic, straight from the farm.',
}));