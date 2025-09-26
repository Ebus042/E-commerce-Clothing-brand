// import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <header className="bg-[#f1f1f0]">
        <Header />
        <Hero />
      </header>
      <main className="pt-10">
        <Features />
        <Cart />
      </main>
    </>
  );
}

export default App;
