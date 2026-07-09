import { Link } from 'react-router-dom';

export default function CategoryCard({ name, icon, slug }) {
  return (
    <Link to={`/products?category=${slug}`} className="glass-card p-4 flex flex-col items-center hover:scale-[1.02] transition">
      <span className="text-4xl">{icon}</span>
      <span className="text-sm font-medium mt-2">{name}</span>
    </Link>
  );
}