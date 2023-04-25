import { useSwiper } from "swiper/react";
import SwiperCore from "swiper";

export function Btn3({ text, handleClick, customCss }: { text: string; handleClick: () => void; customCss?: string }) {
  return (
    <button
      type="button"
      className={`p-4 rounded-lg cursor-pointer bg-primary text-white select-none ${customCss}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
