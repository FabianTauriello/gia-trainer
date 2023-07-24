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
            <h1 className="mb-4 mr-8 ml-8 text-4xl font-extrabold">Note that this website is still a work in progress</h1>
          </section>
          <section className="dark:text-white my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti veritatis, officia quia ad molestiae sed dolores est
            iusto qui odio, reprehenderit cum. Minus aspernatur explicabo recusandae, mollitia delectus similique eligendi fugit
            molestias cumque autem dolor incidunt molestiae reiciendis alias! Aut harum alias iure laborum voluptate ratione minus nisi
            placeat consectetur voluptatem odit enim, tenetur, maxime explicabo, molestiae provident quas debitis saepe iusto sit ipsa?
            Possimus amet eius excepturi perspiciatis error ipsum dolorum id ipsa, ut, voluptatem earum dignissimos facilis facere
            aliquid et assumenda asperiores exercitationem labore minus fugiat, nesciunt odit ab blanditiis consequatur? Consequuntur
            cumque veniam ut laudantium. Eveniet fugit nulla quod suscipit voluptatum officiis tempora eos, nisi expedita consectetur
            ex unde beatae voluptates accusantium. Ad temporibus distinctio officia accusamus ab eveniet a culpa libero amet architecto
            sunt recusandae adipisci voluptate facilis neque dignissimos corrupti sit, eum ea odit beatae? Ad similique accusamus sequi
            amet id! Est earum commodi corporis maiores laudantium non aperiam repellat incidunt repellendus omnis, placeat perferendis
            voluptate, necessitatibus sit quae consectetur nulla qui id iste doloribus consequuntur dolorum. Impedit incidunt ipsam
            dolorem possimus ipsa cumque. Totam corrupti, fuga debitis ab nisi in architecto sequi veritatis? Quasi modi aliquam
            officiis magni eum consequatur ipsam animi, inventore iusto veniam, adipisci dolore alias perspiciatis natus placeat
            assumenda autem, tempora aliquid nemo aspernatur dolores laboriosam pariatur iure? Quibusdam fuga unde soluta impedit nemo
            accusamus perspiciatis vero vitae sunt, ad mollitia distinctio itaque esse tempora, error consequuntur expedita non cumque.
            Harum incidunt nostrum maxime blanditiis rem omnis nam exercitationem illum, voluptatibus ab nulla inventore, distinctio
            ullam molestias, a saepe amet ipsam libero? Magni, facere incidunt amet iste mollitia delectus, quas vel officia, quos
            consequatur ad quae optio porro minima obcaecati? Fuga debitis facilis repudiandae, temporibus accusamus maiores,
            consequuntur odio repellendus dolorem minus quas! Officia ullam enim modi minima, autem illum, repudiandae iure non
            voluptate rerum consequuntur saepe reprehenderit. Quasi nam cumque adipisci quis itaque expedita, sit tenetur iure
            voluptatem quidem corporis magnam doloribus ullam soluta. Accusamus, pariatur quisquam praesentium soluta quibusdam magni
            doloribus iste aliquid tempora ullam fugiat reprehenderit eveniet voluptate quam facere odit explicabo ab consequatur minus
            vero eius dolorem nemo unde quasi? Eaque suscipit odio neque maiores amet totam dolores pariatur doloribus? Labore officia
            reprehenderit explicabo veritatis quidem cum eos numquam voluptates. Iure animi, aliquam saepe magnam necessitatibus,
            numquam nihil quae culpa nobis beatae quis porro qui sapiente fugit hic officiis minus est. Pariatur at commodi tempora,
            expedita odit soluta ad ducimus, suscipit iusto minus quo? Cumque deleniti, repellat quae consectetur rem voluptate
            delectus assumenda pariatur dolorum tempore eos velit culpa voluptatum consequuntur neque ducimus dolorem beatae ullam est
            animi reprehenderit magnam aspernatur temporibus possimus! In eos odio veritatis voluptas dolore tenetur voluptatibus
            tempora modi facilis et consequuntur quibusdam, mollitia ad dolorem animi magnam iure ipsum deleniti! Blanditiis nisi
            temporibus quis minus unde maiores tempore alias ipsa qui in impedit, nesciunt vero eveniet assumenda. Qui ex voluptatum
            tempora, ducimus laudantium quis debitis, quidem odit veritatis expedita nihil reprehenderit excepturi officia, quos earum
            ipsam eligendi reiciendis commodi quod numquam! Ab deserunt esse ad labore animi deleniti pariatur aspernatur corporis
            voluptate placeat! Illum, voluptatum necessitatibus! Reprehenderit perspiciatis aperiam consequuntur eos necessitatibus
            nesciunt atque earum doloribus veniam. Quas animi blanditiis minima impedit nulla dolores. Eaque fuga animi ipsa dolorum
            temporibus totam ducimus nulla excepturi vel at placeat nam illo accusamus quam tempora, adipisci deleniti nisi ratione
            maxime! Eius porro nobis cupiditate eligendi voluptatem in, nihil optio soluta itaque asperiores inventore exercitationem
            maiores rerum debitis sint. Quaerat dignissimos tenetur molestiae officia impedit nihil necessitatibus soluta hic porro
            pariatur voluptate dolore, at quae iusto consequuntur nam, perferendis mollitia repellat doloribus non consectetur magnam
            excepturi? Labore, cupiditate, possimus tenetur quaerat culpa debitis aliquam, velit vel dolore mollitia animi quam itaque
            atque doloribus hic laboriosam? Deserunt iusto numquam repellat ad, quae porro quod corrupti velit libero, possimus
            aspernatur cumque! Omnis nisi iusto pariatur cumque nihil rem aspernatur facilis voluptas nemo harum minus quis velit
            dolorum exercitationem praesentium doloremque, accusamus cum eligendi veniam doloribus asperiores, deleniti a tenetur
            fugit. Veritatis nesciunt vitae alias, earum doloribus neque assumenda sed maxime totam quia ad recusandae beatae
            voluptates nobis odio accusamus distinctio iusto culpa adipisci deleniti rem, fuga, saepe itaque. Nihil enim voluptates
            ullam adipisci voluptatem incidunt aspernatur libero consectetur odio. Quasi, tempora consequatur eveniet incidunt quaerat
            repellendus accusamus architecto ipsam, provident pariatur fuga molestiae voluptates eius tenetur blanditiis voluptate
            maiores omnis, mollitia perspiciatis asperiores. Ducimus natus cupiditate, aspernatur debitis perspiciatis cum dolorem
            soluta voluptate voluptatem sit voluptates vel est illo quae incidunt recusandae ut nam omnis quod, pariatur vero rerum
            voluptas ex. Voluptas, delectus nulla? Quam nulla, fugit omnis modi reprehenderit magni id libero. Nobis minus totam
            expedita autem, natus ab perferendis porro ducimus assumenda aperiam necessitatibus non cumque laudantium obcaecati
            excepturi? Earum beatae, iste temporibus laborum saepe quia eum enim dolores vitae ea eligendi nesciunt animi quisquam
            soluta, pariatur aliquid debitis dolore quo consequuntur velit! Modi nisi porro ea optio molestias distinctio perferendis
            hic reiciendis! Cum repudiandae, enim, voluptatem accusantium facilis sunt quisquam numquam expedita, totam rerum aliquid
            tenetur blanditiis eos eligendi? Repellendus, tenetur asperiores? Exercitationem inventore iusto quaerat iure ullam facere
            eaque ratione hic ex placeat assumenda modi unde sint error deserunt, quo non nostrum magnam voluptas! Animi aperiam
            sapiente blanditiis consectetur tenetur hic aliquam molestias omnis praesentium ea? Modi voluptatum deserunt iure quidem
            ipsa perferendis et! Nihil impedit exercitationem doloribus, necessitatibus, consequuntur quidem dolorem doloremque quos ex
            rem omnis ea id amet, autem aut placeat similique pariatur eius numquam. Labore ab aut, voluptate necessitatibus iure sequi
            explicabo magni reiciendis. Ducimus perferendis qui aspernatur assumenda odio impedit deserunt et eos aut, animi ipsa enim
            nemo sed illo illum aliquid repellendus voluptatibus fugiat nesciunt. Ullam, dolore alias, nisi consequuntur et recusandae
            assumenda cupiditate doloribus, laudantium dolorem molestias. Aperiam, saepe. Quae, hic eaque. Enim iste consequuntur
            dolorem in doloremque sapiente, mollitia neque ipsam aperiam molestiae molestias iure, suscipit facilis debitis. Saepe
            eveniet quis exercitationem suscipit aliquid vel aut qui delectus maiores aspernatur. Eveniet modi facere dicta tempore
            enim at! Repellendus odio quas id similique sapiente placeat natus maxime?
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
