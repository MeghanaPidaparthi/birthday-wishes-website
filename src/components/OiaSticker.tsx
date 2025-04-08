import { useEffect } from 'react';

export const OiaSticker = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="max-w-sm mx-auto">
      <div className="tenor-gif-embed" data-postid="12805916815008299407" data-share-method="host" data-aspect-ratio="1" data-width="100%">
        <a href="https://tenor.com/view/oia-uia-oia-cat-uia-cat-catcultclassics-gif-12805916815008299407">
          Oia Uia Sticker
        </a> from <a href="https://tenor.com/search/oia-stickers">Oia Stickers</a>
      </div>
      <audio src="/uia-cat-birthday.mp3" autoPlay loop />
    </div>
  );
};
