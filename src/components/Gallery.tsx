import { useState } from "react"
import { motion } from "framer-motion"
import { ZoomIn } from "lucide-react"
import type { GalleryImage } from "@/data/gallery"
import { Lightbox } from "./Lightbox"

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`group relative overflow-hidden rounded-[22px] shadow-soft ${
              img.big ? "sm:row-span-2" : ""
            }`}
            style={{ aspectRatio: img.big ? "4/5.4" : "4/3" }}
            aria-label={`Ver em tela cheia: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/0 opacity-0 transition-all duration-300 group-hover:bg-navy-deep/30 group-hover:opacity-100">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy">
                <ZoomIn className="h-5 w-5" />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={images}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  )
}
