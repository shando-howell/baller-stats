import React from 'react'

import Image from 'next/image'

const AnnounceBar = () => {
  return (
    <div className="flex p-1">
        <div className="mr-3">
            <Image 
                src="/photos/gsw-logo.webp" 
                alt="GSW Logo" 
                height="20"
                width="20"
            />
        </div>
        <div className="flex-1 text-gray-700">
            <p>
                Warrior News: Steph officially crowned 3 Point King.
            </p>
        </div>
    </div>
  )
}

export default AnnounceBar