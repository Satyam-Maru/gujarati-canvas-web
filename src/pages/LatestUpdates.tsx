import React from "react";
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

const updates = [
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
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 7500,
          stopOnInteraction: true,
        }),
      ]}
      className="w-full max-w-lg mx-auto"
    >
      <CarouselContent>
        {updates.map((update, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardHeader>
                  <h3 className="text-base md:text-xl font-gujarati text-primary font-semibold">{update.header}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-base md:text-lg font-gujarati">{update.body}</p>
                </CardContent>
                <CardFooter>
                  <a href={update.footer} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button>Watch Now</Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default LatestUpdates;