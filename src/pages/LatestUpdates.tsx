import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const updates = [
  {
    header: "પુસ્તક મહોત્સવ",
    body: "વિદ્યાનો ઉત્સવ અને નવા પુસ્તકોની રચના સાથે આપનું હાર્દિક સ્વાગત છે.",
    image: "/book-mahotsav.jpeg",
  },
  {
    header: "ગ્રંથમંદિરનું ઉદ્ઘાટન",
    body: "આ અમારું પ્રથમ ગ્રંથમંદિરનું ઉદ્ઘાટન હતું અને ધ્રુવ દાદાએ પોતે ગીત ગાઈને શુભારંભ કર્યો હતો.",
    footer: "https://youtube.com/shorts/XVjlOp_1Omg?si=2y7KhPGjT0AGCy77",
  },
  {
    header: "મહુડીયાપુરા સાર્વજનિક ગ્રંથમંદિર બ્રહ્માર્પણ ઉત્સવ",
    body: "સુખ્યાત RJ ધ્વનિત અને જમાવટ મીડિયાના બાહોશ પત્રકાર દેવાંશી જોશીના આણંદ જિલ્લાના મહુડીયાપુરા ગામે સાર્વજનિક ગ્રંથમંદિર નામનું પુસ્તકાલય ઉદ્ઘાટિત થયું.",
    footer: "https://www.youtube.com/watch?v=C4zVBxHoef0",
  },
];

const LatestUpdates: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 7500,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
      >
        <CarouselContent>
          {updates.map((update, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <h3 className="text-sm sm:text-base md:text-xl font-gujarati text-primary font-semibold">{update.header}</h3>
                  </CardHeader>
                  <CardContent className="flex-1">
                    {update.image && (
                      <div
                        className="mb-4 overflow-hidden rounded-lg border border-slate-200 cursor-pointer"
                        onClick={() => setSelectedImage(update.image)}
                      >
                        <img
                          src={update.image}
                          alt={update.header}
                          className="w-full h-48 sm:h-56 object-cover"
                        />
                      </div>
                    )}
                    {update.body && (
                      <p className="text-sm sm:text-base md:text-lg font-gujarati">{update.body}</p>
                    )}
                  </CardContent>
                  {update.footer && (
                    <CardFooter className="mt-auto">
                      <a href={update.footer} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button>Watch Now</Button>
                      </a>
                    </CardFooter>
                  )}
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <Button
              variant="outline"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4"
            >
              <X className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LatestUpdates;