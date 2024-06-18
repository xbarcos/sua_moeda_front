import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";
import Jumbotron from "./components/jumbotron";
import NavBar from "./components/navbar";
import Showcase from "./components/showcase";
import Timeline from "./components/timeline";

export default function Home() {
  return (
    <>
      <NavBar active="home"/>
      <Jumbotron />
      <div className="mx-auto max-w-screen-sm mt-8">
        <h1 className="text-3xl text-grey font-bold mb-8 text-center">
          Controle o caminho do dinheiro, até voltar como imposto!
        </h1>
        <Timeline />
      </div>
      <AboutUs />
      <Showcase />
      <Footer />
    </>
  );
}
