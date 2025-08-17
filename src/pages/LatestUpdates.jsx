import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// --- IMPORTANT ---
// PASTE YOUR YOUTUBE VIDEO ID HERE
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Example ID, replace with your actual video ID

const LatestUpdates = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-8">
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            પાછા જાઓ
          </Button>
        </Link>
        <h1 className="font-gujarati text-4xl md:text-5xl font-extrabold text-primary text-center">
          Latest Updates
        </h1>
        <div style={{ width: "88px" }} />
      </div>

      <Card className="overflow-hidden shadow-lg">
        <CardContent className="p-0">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <a
          href={`https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <Youtube className="mr-2 h-5 w-5" />
            Watch on YouTube
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default LatestUpdates;