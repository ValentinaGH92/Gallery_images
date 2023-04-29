import CardImage from "./Components/Card/Card";
import CardsImages from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import Headers from "./Components/Headers/Headers";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  {
    title: "Paisaje 1",
    description: "Flores",
    url: "https://cdn.pixabay.com/photo/2015/05/08/08/49/mountains-757731_640.jpg",
  },
  {
    title: "Paisaje 2",
    description: "Trekking",
    url: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/gfuvmfczfyosqs1k4ema",
  },
  {
    title: "Paisaje 3",
    description: "Montaña",
    url: "https://imagenes.elpais.com/resizer/gquIGjG-jSXxz_b4mFycP721PIs=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/C7O55Z2XJWLAAHQ6M45IBTKRHU.jpg",
  },
];

function App() {
  return (
    <center>
      <Headers title={"Galeria de Imagenes de React"} />
      <CardsImages images={images} />
      <Footer />
    </center>
  );
}

export default App;
