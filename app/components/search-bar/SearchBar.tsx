'use client';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const SearchBar = () => {
  const handleSearch = () => {
    console.log('Search button works')
  }

  return (
    <div className="flex py-2">
        <Input className="mr-1" />
        <Button 
          variant="outline" 
          className="text-blue-700 hover:text-yellow-700"
          onClick={() => handleSearch()}
        >
          Search
        </Button>
    </div>
  )
}

export default SearchBar