import BrandsBar from "../brands-bar/BrandsBar"

const Header = () => {
  return (
    <div className="py-3">
        <img 
            src="/photos/home-header-image.jpg"
            alt="Home page image"
        />
        <div 
          className="py-6 bg-gray-100"
        >
          <BrandsBar />
        </div>
    </div>
  )
}

export default Header