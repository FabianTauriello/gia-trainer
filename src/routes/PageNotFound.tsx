import { CustomLink } from "components/common/CustomLink";
import logo from "../assets/svgs/logo.svg";

export function PageNotFound() {
  return (
    <div className="h-screen dark:text-white flex justify-center items-center flex-col">
      <img src={logo} width={250} height={250} />
      <h1 className="font-lg text-3xl text-center">Our apologies, but an error has occurred or this page does not exist.</h1>
      <CustomLink to="/" text="Take me home!" cta withoutBackground customCss="text-2xl mt-8" />
    </div>
  );
}
