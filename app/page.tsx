import Header from "./components/header/Header"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <h1>Baller Stats</h1>
      </div>
    </div>
  );
}
