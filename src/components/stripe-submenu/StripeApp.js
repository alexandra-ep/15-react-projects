import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

export default function StripeApp() {
  return (
    <div className="stripeapp">
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </div>
  );
}
