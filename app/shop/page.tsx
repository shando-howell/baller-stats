import Link from 'next/link';
import { categories } from '@/data';

export default function Shop() {
  return (
    <div className="flex flex-col">
      {categories.map((category) => (
        <div key={category.id} className="p-6 mb-2 bg-blue-400">
          <Link href={`/shop/${category.slug}`}>
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  )
  
}