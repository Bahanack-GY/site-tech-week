import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { FaTimes } from 'react-icons/fa';

// Import images from Hackathom2025
import img1 from '../assets/Hackathom2025/image.png';
import img2 from '../assets/Hackathom2025/image copy.png';
import img3 from '../assets/Hackathom2025/image copy 2.png';
import img4 from '../assets/Hackathom2025/image copy 3.png';
import img5 from '../assets/Hackathom2025/image copy 4.png';
import img6 from '../assets/Hackathom2025/image copy 5.png';

const images = [
  { src: img1, alt: "Hackathon Moment 1" },
  { src: img2, alt: "Hackathon Moment 2" },
  { src: img3, alt: "Hackathon Moment 3" },
  { src: img4, alt: "Hackathon Moment 4" },
  { src: img5, alt: "Hackathon Moment 5" },
  { src: img6, alt: "Hackathon Moment 6" },
];

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section id="gallery" className="">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          {t('gallery.title')}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          {t('gallery.subtitle')}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-video cursor-pointer group overflow-hidden rounded-xl border border-white/10"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-neon-cyan transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes size={32} />
            </button>
            
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Full screen"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
