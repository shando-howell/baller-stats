import Link from 'next/link'
import React from 'react'

const HomeCategories = () => {
  return (
    <>
      <div className="flex justify-center p-1.5 bg-yellow-500 text-blue-500">
        <div className="px-2">
          <Link href="/">JERSEYS</Link>
        </div>
        <div className="px-2">
          <Link href="/">MEN</Link>
        </div>
        <div className="px-2">
          <Link href="/">WOMEN</Link>
        </div>
        <div className="px-2">
          <Link href="/">KIDS</Link>
        </div>
        <div className="px-2">
          <Link href="/">MORE</Link>
        </div>
      </div>
      <div className="flex justify-center p-1 text-gray-700">
        <p>Get 30% off all items. Use code 3POINTKING</p>
      </div>
    </>
  )
}

export default HomeCategories