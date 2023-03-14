import { Link, useNavigate } from "react-router-dom";
import Btn1 from "components/Btn1";
import mySvg from "assets/svgs/cv.svg";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* remove later */}
      <div style={{ position: "fixed", top: 5, right: 5, color: "white", backgroundColor: "red", zIndex: 100 }}>
        <Link to={"/counter"}>Counter</Link>
      </div>
      <header style={{}}>{/* TODO */}</header>
      <div className="wrapper">
        <div style={{ border: "solid 1px black" }} className="bg">
          <picture>
            <img
              style={{ backgroundImage: `url(${mySvg})` }}
              width={2560}
              height={2197}
              src="/assets/images/bg-home-desktop"
              alt="some alt text"
            />
          </picture>
        </div>
        <div className="flex flex-col">
          <main>
            <section className="text-center intro-section text-white">
              <h1 className="text-5xl font-extrabold mb-4 mr-8 ml-8">Prepare to ace your next GIA test now</h1>
              <div className="text-2xl font-medium mr-8 ml-8">
                Practice and compete against others in the GIA test. Hone your skills by competing against others or
                trying to beat your high score.
              </div>
              <div className="flex justify-center mt-6">
                <Btn1 text="Sign In" handleClick={() => {}} customCss="mr-6 bg-green text-white" />
                <Btn1 text="Try Now" handleClick={() => {}} customCss="bg-white text-black" />
              </div>
            </section>
            <section>
              {/* TODO description about the what the app is about/offers and maybe a bio about me */}
              <div>
                {/* <img
                  width={"250px"}
                  src="src/assets/images/profile-pic-bw.png"
                  style={{ borderRadius: "200px" }}
                  alt="profile picture"
                /> */}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

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
