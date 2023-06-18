import { useNavigate } from "react-router-dom";
import { CustomLink } from "components/CustomLink";
import { useAppSelector } from "hooks/useAppSelector";
import { Navbar } from "components/Navbar";
import logo from "../assets/svgs/logo.svg";
import { useEffect } from "react";

export function Landing() {
  const navigate = useNavigate();
  const { auth } = useAppSelector((state) => state);

  return (
    <>
      {/* TODO remove later */}
      {/* <div style={{ position: "fixed", top: 5, right: 5, color: "white", backgroundColor: "red", zIndex: 100 }}>
        <Link to={"/counter"}>Counter</Link>
      </div> */}
      <Navbar landingVersion />
      <div className="relative w-full h-screen overflow-scroll bg-image-light bg-cover bg-center bg-no-repeat dark:bg-image-dark">
        <main className="">
          <section className="mt-16 py-20 text-center text-black dark:text-white">
            <h1 className="mb-4 mr-8 ml-8 text-5xl font-extrabold">Prepare to ace your next GIA test</h1>
            <div className="mx-8 mt-4 text-2xl font-medium">
              Practice and compete against others in the GIA test. Hone your skills by competing against others or trying to beat your
              high score.
            </div>
            {!auth.user && (
              <div className="mt-8 flex justify-center">
                <CustomLink text="Sign In" to="/sign-in" customCss="mr-6" cta />
                <CustomLink text="Try Now" to="/quiz" />
              </div>
            )}
          </section>
          <section className="text-center text-red-700">
            <h1 className="mb-4 mr-8 ml-8 text-4xl font-extrabold">Note that this website is still a work in progress</h1>
          </section>
        </main>
      </div>
    </>
  );
}

{
  /* <div className="h-full flex flex-col justify-center p-6 md:w-2/4 m-auto">
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <div className="gutter-lg" />
        <p>
          The Thomas International General Intelligence Assessment (GIA) is a speed test that measures your ability to
          quickly learn, comprehend and retain information.
        </p>
        <p>The test has 5 sections, each taking 2-3 minutes:</p>
        <div className="gutter-sm" />
        <h2 className="text-xl">Categories:</h2>
        <ol>
          <li>1. Reasoning</li>
          <li>2. Perceptual Speed</li>
          <li>3. Number Speed and Accuracy</li>
          <li>4. Word Meaning</li>
          <li>5. Spatial Visualisation</li>
        </ol>
        <div className="gutter-sm" />
        <p>Tap the button below to start your training.</p>
        <div className="gutter-lg" />
        <Button type="button" text="Let's Go!" handleClick={() => navigate(`/section-${1}-reasoning`)} />
      </div> */
}
