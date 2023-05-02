import { useSwiper } from "swiper/react";
import SwiperCore from "swiper";

export function CustomButton({ text, handleClick, customCss }: { text: string; handleClick: () => void; customCss?: string }) {
  return (
    <button type="button" className={`cursor-pointer select-none rounded-lg p-4 text-white ${customCss}`} onClick={handleClick}>
      {text}
    </button>
  );
}
