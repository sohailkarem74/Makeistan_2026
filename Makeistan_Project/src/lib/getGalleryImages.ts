import fs from 'fs';
import path from 'path';

export function getGalleryImages() {
  const dir = path.join(process.cwd(), 'public', 'images', 'gallary');
  try {
    const files = fs.readdirSync(dir);
    const images = files
      .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .map((f) => `/images/gallary/${encodeURIComponent(f)}`);

    for (let i = images.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }

    return images;
  } catch (err) {
    return [];
  }
}
