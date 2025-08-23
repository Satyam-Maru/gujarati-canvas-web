import React from 'react';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of Link
import { ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageGalleryProps {
  images: string[];
  title: string;
  altText: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title, altText }) => {

    const navigate = useNavigate(); // Initialize the navigate function
    const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex justify-between items-center mb-12">
        <Button variant="outline" onClick={() => navigate("/")} className="border border-green-700">
          <ArrowLeft className="mr-2 h-4 w-4" />
          પાછા જાઓ
        </Button>

        <h1 className="font-gujarati text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-primary text-center">
          {title}
        </h1>
        <div style={{ width: "88px" }} />{" "}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer border border-green-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedImage(src)}
            layoutId={`image-${src}`}
          >
            <img
              src={src}
              alt={`${altText} ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative"
              layoutId={`image-${selectedImage}`}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] rounded-lg"
              />
            </motion.div>
            <motion.button
              className="absolute top-4 right-4 text-white"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X size={32} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;