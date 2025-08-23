import ImageGallery from "@/components/ImageGallery";
import edu1 from "/education/edu-1.jpg";
import edu2 from "/education/edu-2.jpg";
import edu3 from "/education/edu-3.jpg";

const ShikshanikVikas = () => {
  const images = [edu1, edu2, edu3];
  const title = "શૈક્ષણિક વિકાસ";
  const altText = "શૈક્ષણિક વિકાસ";

  return <ImageGallery images={images} title={title} altText={altText} />;
};

export default ShikshanikVikas;