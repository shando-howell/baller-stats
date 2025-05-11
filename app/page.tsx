import BestSellers from "./components/best-sellers/BestSellers";
import Header from "./components/header/Header"
import HomeCategories from "./components/home-categories/HomeCategories";

export default function Home() {
  return (
    <div>
      <HomeCategories />
      <Header />
      <div>
        <BestSellers />
      </div>
    </div>
  );
}
