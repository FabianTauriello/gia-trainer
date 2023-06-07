import { useNavigate } from "react-router-dom";
import { CustomLink } from "components/CustomLink";
import { useAppSelector } from "hooks/useAppSelector";
import Navbar from "components/Navbar";

export function Landing() {
  const navigate = useNavigate();
  const { auth } = useAppSelector((state) => state);

  return (
    <>
      {/* TODO remove later */}
      {/* <div style={{ position: "fixed", top: 5, right: 5, color: "white", backgroundColor: "red", zIndex: 100 }}>
        <Link to={"/counter"}>Counter</Link>
      </div> */}
      <Navbar />
      <div className="relative w-full overflow-hidden bg-image-light bg-cover bg-center bg-no-repeat dark:bg-image-dark">
        <div className="">
          <main className="">
            <section className="mt-16 py-20 text-center text-black dark:text-white">
              <h1 className="mb-4 mr-8 ml-8 text-5xl font-extrabold">Prepare to ace your next GIA test</h1>
              <div className="mx-8 mt-4 text-2xl font-medium">
                Practice and compete against others in the GIA test. Hone your skills by competing against others or trying to beat
                your high score.
              </div>
              {!auth.user && (
                <div className="mt-8 flex justify-center">
                  <CustomLink text="Sign In" location="/sign-in" customCss="mr-6" cta />
                  <CustomLink text="Try Now" location="/quiz/visitor" />
                </div>
              )}
            </section>
            <section className="text-white-100 py-20 text-black dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quasi enim fuga corporis fugit rem alias mollitia
              cupiditate sapiente error numquam, doloribus unde quas, in, amet accusamus exercitationem iusto voluptas. Quibusdam esse
              alias temporibus deleniti. Porro numquam tenetur, dolores, doloremque nulla nisi deleniti, incidunt id vel autem quam!
              Iste doloremque repellendus id aliquid totam nulla incidunt est alias? Quas placeat voluptatem amet iusto id quam culpa
              hic magni dolorem nisi ut quidem illo ex sit natus, porro quibusdam inventore quo earum odio voluptates quia dignissimos
              temporibus! Rerum rem, provident minus odio ad culpa quia numquam quasi ratione pariatur reprehenderit! Placeat
              consectetur sequi debitis inventore nostrum maiores non architecto nobis eveniet quo illo, distinctio rem ut nihil aut
              libero quae ipsum quas accusamus amet iure? Quas, velit magni architecto et, ipsam saepe dignissimos dolorum officiis ab
              tempore ad, consequatur tenetur expedita vero molestias! Hic ipsam vitae earum, blanditiis libero eum sapiente, nisi
              minus dolorum maiores voluptates. Assumenda quisquam itaque architecto eveniet molestias aperiam harum, ex ad doloremque?
              Perspiciatis maxime porro officiis eaque, facere nobis, ducimus assumenda consectetur iusto culpa aspernatur autem
              similique voluptas est iste non tempore praesentium sequi fugiat aliquid quo maiores libero ipsum? Eum, blanditiis porro
              aut a aspernatur excepturi! Natus quae aut voluptates nisi possimus nesciunt non nihil distinctio nulla consequuntur
              soluta magni quos ad, aliquid atque iusto tempora? Facere sequi sint veritatis cupiditate incidunt voluptas a doloremque
              inventore temporibus, nemo ab est dicta blanditiis iure eaque quis, debitis ipsam quam exercitationem deserunt beatae!
              Aliquam, nemo odio? Debitis explicabo consequuntur necessitatibus natus voluptas rem unde alias nisi, aperiam quis minus,
              corporis tempore expedita reprehenderit! Labore ullam magnam vero fugit aperiam! Assumenda libero, suscipit obcaecati
              numquam adipisci dolores vitae delectus consectetur doloribus omnis error iste ut illo, pariatur illum! Minus ducimus
              delectus ipsum alias soluta sapiente, distinctio expedita id fugit consequuntur eaque suscipit laborum est provident
              sequi. Accusamus natus aspernatur facere nulla sit reiciendis minus, iure tenetur a cumque iste hic perspiciatis quae
              magnam laborum vel ex consectetur culpa nemo? Laborum repellat nihil aspernatur assumenda. Id a provident hic quis
              dolores perspiciatis soluta odio ullam consequuntur quasi possimus ipsa, distinctio sunt. Omnis repellat aliquid nisi
              voluptatibus non dolorem quidem magni, ad possimus facere veritatis molestiae fugiat corporis odit ipsa tempore obcaecati
              amet tempora eius excepturi repudiandae. Eveniet, eligendi aperiam. Quo dolorum saepe harum autem quas qui aspernatur
              dolor neque tempore error minus, quibusdam, accusamus laboriosam soluta quod excepturi laudantium? Excepturi in earum
              aperiam porro animi! Nemo illum accusamus perferendis pariatur quas consectetur dicta incidunt minus error, cupiditate
              earum aperiam quasi id in provident velit facilis porro modi! Vel libero quibusdam veritatis quo, reiciendis rerum
              accusantium porro exercitationem eveniet ipsa fugiat distinctio facilis voluptates quae voluptas minima quod optio
              quisquam nobis, ea asperiores ipsum doloribus deserunt excepturi. Veniam culpa repellendus dolor laudantium accusantium
              cum debitis, magni nobis earum excepturi modi voluptatibus possimus nostrum quo, est aperiam non. Quae, provident vel?
              Vero eveniet dolorem repudiandae, assumenda velit voluptas, rem reprehenderit necessitatibus quidem illum numquam
              laboriosam, commodi similique. Maxime, aspernatur! Voluptatum impedit earum culpa voluptate dolorem modi, tenetur,
              voluptas aliquam ratione odit illum nulla eius commodi ad delectus, consequuntur totam autem voluptates distinctio. Omnis
              vitae blanditiis voluptatum fuga, recusandae tenetur ipsa, modi distinctio sit et ut id fugiat repudiandae dolores
              officiis nam! Nobis, neque. Nostrum necessitatibus ipsam doloremque quos rerum natus est adipisci quis? Blanditiis
              tenetur, reiciendis dolores sequi provident eos ipsam aliquam quia! Hic vero odio laboriosam ad at velit incidunt beatae,
              quod recusandae voluptas asperiores cumque unde tempore dignissimos numquam. Consequatur provident, repellat expedita
              sunt corporis officia quia eius cum consequuntur itaque at, magni sed voluptas omnis quam sint distinctio, laboriosam
              dolor. Pariatur, corporis sint laudantium blanditiis esse iure harum laborum dolore recusandae ut fuga. Minus tempore
              temporibus at rerum voluptatum dolorem harum mollitia impedit, est id consequatur, error quidem? Alias deleniti, dolor
              fugiat culpa cum doloremque maiores molestiae, quod fugit est adipisci. Velit, nemo eum deserunt commodi quod hic
              adipisci labore voluptas ex, rem facilis officia deleniti, quas repellendus molestiae? Blanditiis autem, voluptas facilis
              odit unde repudiandae, modi quas, sapiente reiciendis eum tenetur sequi rem aperiam sed. Eaque soluta in error enim
              nobis, officia explicabo. Mollitia pariatur hic aliquam! Aspernatur repudiandae voluptas voluptates, pariatur in veniam
              voluptatem provident, explicabo, repellat quas tempore quidem temporibus magni quod deleniti. Aspernatur sed sint rem
              placeat cum minima optio illo dignissimos maxime! Atque dicta iure tenetur modi doloribus possimus dolores a suscipit
              dolore, soluta, natus neque sit explicabo incidunt quod veniam quaerat. Fugit distinctio veniam sit hic dolores cum,
              officiis tenetur neque! Fuga quae nihil maxime ullam fugit doloremque corporis natus tenetur voluptate nostrum tempore,
              unde quo porro, esse, placeat facere ab quos eveniet inventore sint magnam! Ex beatae incidunt nulla harum reprehenderit
              architecto fugit. Nulla quam perferendis, nesciunt sequi rem placeat saepe reiciendis in eaque neque voluptatum. Quisquam
              nulla quam esse fugiat incidunt debitis eligendi, magnam eaque ipsa, est sequi amet repellendus maxime eos ex neque,
              architecto eum blanditiis obcaecati dolorem. Libero ipsam dolore animi commodi facilis nulla minus, dignissimos eligendi
              maxime perspiciatis magnam quo eum odio expedita voluptatibus rerum, nemo velit aliquid eius reiciendis dicta! Similique
              perferendis magni officiis iste quidem quod totam, ab ullam vitae maxime deleniti molestias dolorum velit reiciendis
              perspiciatis voluptatem! Quibusdam sunt minima eum, quo maiores quos laboriosam doloremque placeat magni voluptatum fugit
              vitae dignissimos vero illo in, magnam vel velit officia aperiam. Nulla, quos corrupti? Voluptate accusamus vel maxime
              ratione architecto tempora ipsam ullam sit deserunt cumque fuga ea corporis culpa nesciunt exercitationem voluptatem
              reprehenderit velit eaque officiis alias corrupti magni quibusdam, aliquam fugit! Nostrum eveniet, impedit labore
              molestiae, expedita numquam commodi earum sed quibusdam voluptate ex dolorum aut ea ab debitis consectetur voluptates
              neque eos necessitatibus natus voluptatum. Inventore magnam nemo voluptate eaque itaque eligendi adipisci velit! Illo
              facilis accusantium consequatur fugiat sed nam exercitationem, nisi ipsum id labore perferendis maxime. Explicabo quod
              ducimus vero ipsam distinctio ullam quisquam quis omnis. Vitae consequuntur excepturi architecto tenetur facilis atque
              praesentium eum eligendi optio dolorem nulla nobis, esse fuga deserunt eius commodi odit aspernatur quibusdam suscipit
              pariatur?
            </section>
          </main>
        </div>
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
