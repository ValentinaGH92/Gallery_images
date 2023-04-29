import CardImage from "../Card/Card";

const CardsImages = ({ images }) => {
  return images.map((image) => {
    const { title, description, url } = image;

    return <CardImage title={title} description={description} urlImage={url} />;
  });
};

export default CardsImages;
