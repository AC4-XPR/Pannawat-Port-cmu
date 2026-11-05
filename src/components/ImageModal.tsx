import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ExternalLink } from 'lucide-react';

interface ImageModalProps {
  src: string | null;
  title: string | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ src, title, onClose }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (src) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setScale(1);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-neutral-800 bg-neutral-950 shrink-0">
          <div className="text-xs sm:text-sm font-semibold text-white truncate max-w-[70%]">
            {title || 'Image Preview'}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setScale((s) => Math.min(s + 0.25, 3))}
              className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setScale((s) => Math.max(s - 0.25, 0.5))}
              className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setScale(1)}
              className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
              title="Open full image in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors ml-1"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Content Container */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-neutral-950/80">
          <img
            src={src}
            alt={title || 'Preview'}
            referrerPolicy="no-referrer"
            style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
            className="max-h-[75vh] max-w-full object-contain transition-transform duration-200 select-none rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
