import BestSellers from "./components/best-sellers/BestSellers";
import Header from "./components/header/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <BestSellers />
      </div>
    </div>
  );
}
