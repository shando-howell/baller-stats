import Link from 'next/link'
import React from 'react'

import { categories } from '@/data'

const HomeCategories = () => {
  return (
    <>
      <div className="flex justify-center p-3 bg-yellow-500 text-blue-500">
        {categories.map((category) => (
          <div key={category.id} className="px-2">
            <Link href={`/shop/${category.slug}`}>
              {category.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center p-1 text-gray-700">
        <p>Get 30% off all items. Use code 3POINTKING</p>
      </div>
    </>
  )
}

export default HomeCategories