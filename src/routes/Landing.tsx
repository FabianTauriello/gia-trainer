import { useNavigate } from "react-router-dom";
import { CustomLink } from "components/common/CustomLink";
import { useAppSelector } from "hooks/useAppSelector";
import { Navbar } from "components/common/Navbar";

export function Landing() {
  const navigate = useNavigate();
  const { auth } = useAppSelector((state) => state);

  return (
    <>
      {/* TODO remove later */}
      {/* <div style={{ position: "fixed", top: 5, right: 5, color: "white", backgroundColor: "red", zIndex: 100 }}>
        <Link to={"/counter"}>Counter</Link>
      </div> */}
      <Navbar fixed />
      <div className="page-gutter relative w-screen h-screen overflow-y-scroll overflow-hidden bg-image-light object-cover bg-cover bg-center bg-no-repeat dark:bg-image-dark">
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
            <h1 className="mb-4 mr-8 ml-8 text-4xl font-extrabold">This website is still a work in progress</h1>
          </section>
          <section className="dark:text-white my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti veritatis, officia quia ad molestiae sed dolores est
            iusto qui odio, reprehenderit cum. Minus aspernatur explicabo recusandae, mollitia delectus similique eligendi fugit
            molestias cumque autem dolor incidunt molestiae reiciendis alias! Aut harum alias iure laborum voluptate ratione minus nisi
            placeat consectetur voluptatem odit enim, tenetur, maxime explicabo, molestiae provident quas debitis saepe iusto sit ipsa?
            Possimus amet eius excepturi perspiciatis error ipsum dolorum id ipsa, ut, voluptatem earum dignissimos facilis facere
            aliquid et assumenda as illum, voluptatibus ab nulla inventore, distinctio ullam molestias, a saepe amet ipsam libero?
            Magni, facere incidunt amet iste mollitia delectus, quas vel officia, quos consequatur ad quae optio porro minima
            obcaecati? Fuga debitis facilis repudiandae, temporibus accusamus maiores, consequuntur odio repellendus dolorem minus
            quas! Officia ullam enim modi minima, autem illum, repudiandae iure non voluptate rerum consl dolore mollitia animi quam
            itaque atque doloribus hic laboriosam? Deserunt iusto numquam repellat ad, quae porro quod corrupti velit libero, possimus
            aspernatur cumque! Omnis nisi iusto pariatur cumque nihil rem aspernatur facilis voluptas nemo harum minus quis velit
            dolorum exercitationem praesentium doloremque, accusamus cum eligendi veniam doloribus asperiores, deleniti a tenetur
            fugit. Veritatis nesciunt vitae alias, earum doloribus neque assumenda sed maxime totam quia ad recusandae beatae
            voluptates nobis odio accusamus distinctio iusto culpa adipisci deleniti rem, fuga, saepe itaque. Nihil enim voluptates
            ullam adipisci voluptatem incidunt aspernatur libero consectetur odio. Quasi, tempora consequatur eveniet incidunt quaerat
            repellendus accusamus architecto ipsam, provident pariatur fuga molestiae voluptates eius tenetur blanditiis voluptate
            maiores omnis, mollitia perspiciatis asperiores. Ducimus natus cupiditate, aspernatur debitis perspiciatis cum dolorem
            soluta voluptate voluptatem sit voluptatesre iusto quaerat iure ullam facere eaque ratione hic ex placeat assumenda modi
            unde sint error deserunt, quo non nostrum magnam voluptas! Animi aperiam sapiente blanditiis consectetur tenetur hic
            aliquam molestias omnis praesentium ea? Modi voluptatum deserunt iure quidem ipsa perferendis et! Nihil impedit
            exercitationem doloribus, necessitatibus, consequuntur quidem dolorem doloremque quos ex rem omnis ea id amet, autem aut
            placeat similique pariatur eius numquam. Labore ab aut, voluptate necessitatibus iure sequi explicabo magni reiciendis.
            Ducimus perferendis qui aspernatur assumenda odio impedit deserunt et eos aut, animi ipsa enim nemo sed illo illum aliquid
            repellendus voluptatibus fugiat nesciunt. Ullam, dolore alias, nisi consequuntur et recusandae assumenda cupiditate
            doloribus, laudantium dolorem molestias. Aperiam, saepe. Quae, hic eaque. Enim iste consequuntur dolorem in doloremque
            sapiente, mollitia neque ipsam aperiam molestiae molestias iure, suscipit facilis debitis. Saepe eveniet quis
            exercitationem suscipit aliquid vel aut qui delectus maiores aspernatur. Eveniet modi facere dicta tempore enim at!
            Repellendus odio quas id similique sapiente placeat natus maxime?
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
