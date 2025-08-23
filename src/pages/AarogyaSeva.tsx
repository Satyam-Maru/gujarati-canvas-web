import ImageGallery from "@/components/ImageGallery";
import seva1 from "/aarogya-seva/aarogya-1.jpg";
import seva2 from "/aarogya-seva/aarogya-2.jpg";
import seva3 from "/aarogya-seva/aarogya-3.jpg";
    
const AarogyaSeva = () => {
  const images = [seva1, seva2, seva3];
  const title = "આરોગ્ય અને માનવ સેવા";
  const altText = "Aarogya and Manav Seva";

  return <ImageGallery images={images} title={title} altText={altText} />;
};

export default AarogyaSeva;