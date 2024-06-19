import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";
import Jumbotron from "./components/jumbotron";
import NavBar from "./components/navbar";
import Timeline from "./components/timeline";
import Vantagens from "./components/vantagens";

export default function Home() {
  return (
    <>
      <NavBar active="home"/>
      <Jumbotron />
      <div className="mx-auto max-w-screen-sm mt-8">
        <h1 className="text-3xl text-grey font-bold mb-8 text-center">
        Centralize e antecipe o seu faturamento em forma de moeda digital.
        </h1>
        <Timeline />
      </div>
      <AboutUs />
      <Vantagens />
      <Footer />
    </>
  );
}
