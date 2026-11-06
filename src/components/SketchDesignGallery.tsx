import React, { useState } from 'react';
import { Pause, Play, ZoomIn } from 'lucide-react';

interface SketchDesignGalleryProps {
  onOpenImage: (src: string, title: string) => void;
}

const sketches = [
  'IMG20261105220701.jpg',
  'IMG20261105220706.jpg',
  'IMG20261105220711.jpg',
  'IMG20261105220716.jpg',
  'IMG20261105220720.jpg',
  'IMG20261105223252.jpg',
  'IMG20261105223316.jpg',
  'IMG20261105223322.jpg',
  'IMG20261105223326.jpg'
];

export const SketchDesignGallery: React.FC<SketchDesignGalleryProps> = ({ onOpenImage }) => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="sketch-design-section" aria-labelledby="sketch-design-title">
      <div className="sketch-design-heading">
        <div>
          <span className="text-xs font-mono tracking-[0.18em] uppercase text-purple-300">แนวคิดและภาพร่าง</span>
          <h3 id="sketch-design-title" className="mt-1 text-2xl sm:text-3xl font-bold font-display text-white">03 Sketch Design</h3>
          <p className="mt-1 text-sm text-neutral-400">รวมแบบอาวุธในเกม บันทึกเรียนภาษาเยอรมัน ความคิดทั่วไป และไอเดียธุรกิจ</p>
        </div>
        <button
          type="button"
          className="sketch-motion-toggle"
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
          aria-label={paused ? 'เล่นแกลเลอรีภาพร่าง' : 'หยุดแกลเลอรีภาพร่าง'}
        >
          {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
          <span>{paused ? 'เล่น' : 'หยุด'}</span>
        </button>
      </div>

      <div className={`sketch-marquee ${paused ? 'is-paused' : ''}`}>
        <div className="sketch-track">
          {[0, 1].map((copy) => (
            <div className="sketch-lane" key={copy} aria-hidden={copy === 1}>
              {sketches.map((filename, index) => {
                const src = `/portfolio-assets/sketch-design/${filename}`;
                return (
                  <button
                    type="button"
                    className="sketch-frame image-caption-frame"
                    key={filename}
                    tabIndex={copy === 1 ? -1 : 0}
                    aria-label={`เปิดภาพร่างลำดับที่ ${index + 1}`}
                    onClick={() => onOpenImage(src, `Sketch Design · ${index + 1}`)}
                  >
                    <img src={src} alt={`ภาพร่างแนวคิด ลำดับที่ ${index + 1}`} loading="lazy" />
                    <span className="sketch-index">SKETCH {String(index + 1).padStart(2, '0')}</span>
                    <span className="sketch-zoom"><ZoomIn aria-hidden="true" /> ดูภาพเต็ม</span>
                    <span className="image-caption-pop">ภาพร่างแนวคิด · ลำดับที่ {index + 1}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <p className="sketch-gallery-hint">ชี้เมาส์เพื่อหยุดภาพ · เลือกภาพเพื่อขยาย</p>
    </section>
  );
};
