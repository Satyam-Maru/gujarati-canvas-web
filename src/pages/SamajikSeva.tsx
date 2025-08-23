import ImageGallery from "@/components/ImageGallery";
import seva1 from "/samajik-seva/samajik-1.jpg";
import seva2 from "/samajik-seva/samajik-2.jpg";
import seva3 from "/samajik-seva/samajik-3.jpg";
import seva4 from "/samajik-seva/samajik-4.jpg";
    
const ShikshanikVikas = () => {
  const images = [seva1, seva2, seva3, seva4];
  const title = "સામાજિક અને સાંસ્કૃતિક સેવા";
  const altText = "Samajik and Sanskritik Seva";

  return <ImageGallery images={images} title={title} altText={altText} />;
};

export default ShikshanikVikas;