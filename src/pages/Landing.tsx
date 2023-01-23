import { useNavigate } from "react-router-dom";
import Btn1 from "../components/Btn1";
import Button from "../components/Button";
import Page from "../components/Page";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>{/* TODO */}</header>
      <div className="flex flex-col">
        <main>
          <section className="text-center intro-section text-white">
            <h1 className="text-4xl font-extrabold mb-4 mr-4 ml-4">
              Behold, your best chance to ace your next GIA test is right here.
            </h1>
            <div className="text-xl font-medium mr-2 ml-2">
              GIA Practice is the perfect place to practice and compete against others in the GIA test. Hone your skills
              by competing against others or against by simply trying to improve your high score.
            </div>
            <div>
              <Btn1 text="Sign In" handleClick={() => {}} />
              <Btn1 text="Try Now" handleClick={() => {}} />
            </div>
          </section>
          <section>{/* TODO description about the what the app is about/offers and maybe a bio about me */}</section>
        </main>
      </div>
    </>
  );
};

export default Home;

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
        <h2 className="text-xl">Sections:</h2>
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
        <Button text="Let's Go!" handleClick={() => navigate(`/section-${1}-reasoning`)} />
      </div> */
}
