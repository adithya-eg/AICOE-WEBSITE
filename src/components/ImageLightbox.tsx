import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageLightbox = ({ src, alt, className = "" }: ImageLightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail with hover zoom hint */}
      <div
        className={`relative cursor-zoom-in group overflow-hidden rounded-lg ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg">
            <ZoomIn className="w-7 h-7 text-white drop-shadow" />
          </div>
        </div>
        <p className="absolute bottom-2 right-3 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none">
          Click to expand
        </p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-black/92 flex items-center justify-center p-4 lg:p-10"
            onClick={() => setIsOpen(false)}
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-10 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Expanded image */}
            <motion.img
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              src={src}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageLightbox;
