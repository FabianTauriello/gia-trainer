import { TbTargetArrow } from "react-icons/tb";
import { GiArrowhead, GiStrikingArrows } from "react-icons/gi";
import { IoPodiumOutline } from "react-icons/io5";
import { SlTrophy } from "react-icons/sl";
import { MdDateRange } from "react-icons/md";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { IconType } from "react-icons";
import { ReactElement } from "react";

export function DashboardOverview() {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="bg-slate-100 dark:bg-slate-800 drop-shadow-md p-6 flex flex-col gap-6 rounded-xl border border-slate-300 dark:border-slate-700">
          <div className="flex flex-wrap">
            <DashValue tooltipText="Date Joined" value="Jun 14, 2020" icon={<MdDateRange size={30} />} />
            <DashValue tooltipText="Current Rank" value="4th" icon={<IoPodiumOutline size={30} />} />
            <DashValue tooltipText="Best Rank" value="1st" icon={<SlTrophy size={30} />} />
          </div>
          <div className="flex flex-wrap">
            <DashValue tooltipText="Latest Attempt" value="70%" icon={<GiArrowhead size={30} />} />
            <DashValue tooltipText="Best Attempt" value="100%" icon={<TbTargetArrow size={30} />} />
            <DashValue tooltipText="Number of Attempts" value="152" icon={<GiStrikingArrows size={30} />} />
          </div>
        </div>
        <div className="mt-4 bg-slate-100 dark:bg-slate-800 drop-shadow-md p-6 flex flex-col rounded-xl border border-slate-300 dark:border-slate-700">
          line graph showing all scores over various times
        </div>
        <div className="mt-4 bg-slate-100 dark:bg-slate-800 drop-shadow-md p-6 flex flex-col rounded-xl border border-slate-300 dark:border-slate-700">
          line graph showing rank over various times
        </div>
        <div className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minima maxime, suscipit delectus, incidunt dignissimos
          dignissimos, asperiores nobis at eos nam beatae, obcaecati inventore sapiente esse provident. Dignissimos, inventore in?
          Tenetur nisi officia quibusdam voluptatum! Deleniti ratione maiores dolores magni sapiente soluta esse assumenda quod est
          nostrum porro quas, dolorem tenetur impedit aut laborum vero. Provident nam laborum nulla vitae officiis, laboriosam odit
          distinctio, ducimus obcaecati ipsa deserunt adipisci error, nihil reiciendis nisi. Facere, recusandae! Sunt iste, porro
          architecto deleniti quaerat sequi inventore? Distinctio ullam, doloribus, rerum eveniet nisi, nostrum necessitatibus eum
          consectetur sit possimus iste? Voluptates ab quisquam, tenetur nostrum libero unde. Nam fugit doloremque neque officia vel
          rerum dolorum, praesentium numquam excepturi sint ad? Temporibus dolorum reiciendis at rerum autem natus quas laudantium
          nesciunt tempore! Itaque temporibus laborum harum quia praesentium exercitationem debitis suscipit. Maxime nihil aliquam
          accusantium sed quaerat ipsum quasi quo minus amet voluptatibus? Similique, saepe ad minus quas iusto iure ea fugit ipsa sed
          esse. Distinctio deleniti sint magni sapiente corporis mollitia minus perferendis, facere eius vitae. Ducimus consequatur
          vitae dolorum minima doloribus nobis esse amet nesciunt, incidunt soluta sint voluptatum in quod odio explicabo vel veritatis
          dignissimos, est nemo. Placeat, maiores. Recusandae quasi, ipsa aut provident incidunt eius, cupiditate tenetur eveniet
          architecto nulla, nostrum beatae? Eaque cupiditate laboriosam excepturi hic sit esse ullam consectetur, similique reiciendis
          vero mollitia perferendis, minus cum autem nobis in officia, molestias dolorum officiis sint. At illo ab culpa est,
          laudantium libero error iusto explicabo quasi, expedita, eos dolorem magni nostrum aut voluptatem labore! Inventore harum
          asperiores enim! Dolores quam quae magni, blanditiis aperiam eos eum commodi quaerat, incidunt sapiente, ipsum mollitia
          ducimus. Harum soluta dolorem, laboriosam fuga sit ab rem aut, a obcaecati cupiditate sapiente provident unde doloremque quo?
          Labore praesentium sit, nam quam architecto recusandae eveniet, ut quibusdam ea voluptatibus modi quas optio id deleniti
          similique consequuntur ad accusantium dicta ducimus repellendus dolores laudantium veniam tenetur. Molestiae recusandae
          magnam optio beatae blanditiis aliquam qui illo? Suscipit deserunt sequi aperiam quo possimus repellendus. Ab molestiae ipsa
          incidunt? Architecto provident culpa ut sint hic dignissimos, iusto aliquid explicabo earum consequatur dolore tempore quo.
          Tenetur tempore delectus assumenda temporibus maiores harum enim quod optio veniam dignissimos nam non excepturi, quo error.
          Inventore fuga cum odit nulla similique ducimus placeat ullam porro eos animi quo adipisci rem aliquid eius, eum, fugit,
          incidunt officia facere voluptatem cupiditate. Quibusdam, voluptatibus totam architecto deleniti perspiciatis tempora alias
          esse quia inventore fugiat accusantium aliquam nisi amet omnis. Rem asperiores harum vitae odit expedita omnis corrupti
          cupiditate optio amet dolores, aut quisquam aperiam est veritatis consequatur et aspernatur iusto iure pariatur. Adipisci
          itaque nisi molestias? Vitae numquam aliquam rerum in laboriosam autem laudantium exercitationem dignissimos. Excepturi
          assumenda ducimus iure tenetur perspiciatis error voluptatum dolorum magnam libero porro debitis totam, maiores dolores
          doloremque laudantium ratione ipsam eveniet tempora esse quibusdam quam deleniti animi at. Temporibus facilis pariatur rerum
          quod laudantium, quibusdam architecto magni maxime deleniti maiores ipsam eveniet expedita quas eos beatae tenetur non
          voluptas esse nesciunt officiis placeat dolores obcaecati. Facilis, qui culpa fugiat nisi libero, officia deleniti quia
          excepturi non, consectetur repellendus quae veritatis placeat laudantium dignissimos velit cumque sit consequuntur dicta
          reprehenderit harum perspiciatis aut doloremque a! Iusto reiciendis culpa perspiciatis? Maxime, doloribus. Atque, accusamus
          veritatis! Fuga nesciunt ipsa, provident error, consequuntur praesentium explicabo eaque reiciendis iure, nulla cumque neque
          quisquam hic! Veniam facere, porro unde blanditiis natus molestiae iste accusantium vero quis sed doloremque nulla! Facilis
          illo doloremque, eos officia assumenda in similique beatae aperiam? Assumenda atque nam iusto facere laborum quod non ut,
          enim maiores natus expedita! Repellat assumenda explicabo inventore nulla. Nostrum ullam provident harum voluptates culpa
          tempora. Enim, incidunt velit voluptate adipisci deleniti odio saepe eius quibusdam quisquam dolores neque sit illum quis,
          accusamus ut non libero doloremque aliquam suscipit minus temporibus blanditiis iusto animi! In similique ipsa saepe eveniet
          nobis! Saepe excepturi quaerat optio nobis, sed eaque id tempore? A, harum asperiores. Assumenda quibusdam ratione atque
          animi optio doloremque. Exercitationem tempore aperiam accusantium corporis totam earum beatae necessitatibus, esse quisquam
          nostrum voluptates laborum et a soluta quos harum excepturi voluptatem vitae quasi asperiores accusamus! Dolore sapiente
          quidem ipsa ex, qui illo, veniam magni esse rem voluptas, ea voluptatibus iure quos sed fugit nam in. Amet optio ad itaque
          vero unde necessitatibus at nisi fuga rerum, vitae perferendis exercitationem officiis provident expedita pariatur natus
          odio. Ratione aperiam aliquam non vel delectus ducimus suscipit animi, minus in quam beatae quis eligendi harum, dolor nobis
          itaque. Eos, suscipit unde, porro repudiandae hic, non nisi eius odit nihil optio quam nam ratione quidem voluptate. Quae,
          aliquam ad esse, explicabo dolor quos quidem iusto reiciendis totam perspiciatis quo praesentium! Libero animi doloremque,
          blanditiis ad ipsam sapiente officia soluta, amet consectetur earum omnis. Facere id quos porro praesentium adipisci maiores
          itaque repellendus a magnam? Maiores exercitationem voluptate soluta rem excepturi possimus voluptates, sint, animi quam qui
          dolorem dolores pariatur commodi sit aut! Ut numquam, neque sed accusantium aut repellat molestiae sint inventore assumenda
          accusamus voluptas quod, ullam asperiores facere repudiandae eligendi, fuga officiis porro. Hic incidunt error eos voluptatem
          laborum eaque ipsum minima nobis debitis veniam, accusantium sequi cum corrupti doloribus deleniti dicta eligendi laudantium
          voluptate! Consequuntur rem corporis recusandae eligendi, velit accusantium quaerat eaque ab id officia excepturi, alias
          tenetur aut. Maiores tempora eveniet quod rerum debitis, aut, eligendi tempore eum neque odit ratione illo ab numquam,
          dolorem adipisci illum vero velit voluptatibus optio mollitia. Nesciunt sed quae praesentium aut labore nisi cum enim quas
          hic error recusandae dolorum excepturi quod tenetur illo, in libero cumque, nemo assumenda voluptates repellendus. Itaque
          praesentium nam dolorum minima vel inventore veniam modi rerum, odit ducimus. Perferendis corrupti ipsam placeat id
          necessitatibus, blanditiis fugit? Nostrum maiores impedit aliquid ipsa veritatis eos, obcaecati, laudantium veniam, optio
          minus quas labore neque tenetur magni esse eveniet placeat rerum minima. Culpa laboriosam odio numquam fuga voluptates sint
          fugiat similique eaque nostrum cumque repellat molestiae laborum dignissimos beatae blanditiis itaque, ducimus earum! Quasi
          magnam ipsam at mollitia alias fugiat odit. Porro cupiditate ipsa sunt, a aspernatur vitae aliquam sint atque pariatur illo
          accusantium magnam voluptatibus facere distinctio totam! Totam illo unde facilis voluptatibus placeat accusamus laborum
          nostrum, porro, commodi repellat, minima nesciunt voluptates sunt. Perspiciatis accusamus obcaecati distinctio odio atque,
          veritatis molestiae aut pariatur? Tempore similique voluptas asperiores, sed doloribus tenetur dolor adipisci obcaecati ipsa
          quos amet beatae quod ullam in aut omnis nihil! Adipisci accusamus sint animi neque numquam enim, suscipit exercitationem
          eveniet dolores placeat. Nemo iste totam, excepturi architecto maxime aut rerum a, error impedit voluptatibus eligendi.
          Natus, voluptatum. Incidunt earum repellat aspernatur quae enim rem architecto ad asperiores. Eius non iusto inventore
          necessitatibus? Aperiam officiis, obcaecati architecto necessitatibus similique minus neque tempore expedita, inventore dicta
          molestiae? Eius eligendi dolores magnam ducimus velit nulla quam vitae, nesciunt quas aliquid aspernatur veritatis
          laudantium, aliquam eveniet ipsum. Nemo corporis reiciendis exercitationem modi, laborum soluta alias maxime accusamus,
          explicabo quod commodi placeat consectetur culpa vitae, dolores quis itaque id in tenetur. Praesentium distinctio atque
          temporibus excepturi corporis error similique, aliquid consequatur voluptates pariatur expedita fuga qui consequuntur facere
          laboriosam assumenda quos dolorum labore cum cumque dolores? Sapiente, soluta. Fuga, amet quaerat. Aliquid beatae aut
          blanditiis quo, atque similique, esse sunt nam inventore quaerat praesentium eveniet. Esse veritatis voluptas mollitia odio,
          ullam obcaecati a. Voluptatem, dolorem a, dolor nisi libero minus nobis laborum fuga porro harum iusto, autem tempora aperiam
          quasi. Nostrum voluptatibus vitae aperiam illum exercitationem cumque tempora omnis excepturi ipsa corrupti tempore inventore
          neque et nemo labore ea iusto, quam, quos.
        </div>
      </div>
      <div className="ml-4 bg-slate-100 dark:bg-slate-800 drop-shadow-md p-6 flex flex-col rounded-xl border border-slate-300 dark:border-slate-700">
        <h1 className="text-lg border-b border-white pb-4">Rank by Category</h1>
        <ul>
          <li className="mt-4 flex justify-between">
            <div>Reasoning</div>
            <div className="ml-10">1</div>
          </li>
          <li className="mt-4 flex justify-between">
            <div>Perceptual Speed</div>
            <div className="ml-10">1</div>
          </li>
          <li className="mt-4 flex justify-between">
            <div>Number Speed and Accuracy</div>
            <div className="ml-10">1</div>
          </li>
          <li className="mt-4 flex justify-between">
            <div>Word Meaning</div>
            <div className="ml-10">1</div>
          </li>
          <li className="mt-4 flex justify-between">
            <div>Spatial Visualisation</div>
            <div className="ml-10">1</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function DashValue({ tooltipText, value, icon }: { tooltipText: string; value: string; icon: ReactElement }) {
  return (
    <div className="flex-1 text-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{icon}</TooltipTrigger>
          <TooltipContent>
            <p className="">{tooltipText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="mt-1">{value}</div>
    </div>
  );
}

// performance metrics:

// The General Intelligence Assessment (GIA) test is designed to measure a user's general intelligence or cognitive abilities. To evaluate a user's performance on the GIA test, you can use various performance metrics. Here are some common metrics used in cognitive testing:
// - Raw Score: The raw score represents the number of questions answered correctly by the user in the GIA test. It provides a basic measure of performance, but it doesn't take into account the difficulty level of the questions.
// - Scaled Score: A scaled score is a standardized score that adjusts for the difficulty level of the questions. It allows for a fairer comparison of performance across different versions of the test.
// - Percentile Rank: The percentile rank indicates the percentage of people who scored below the user on the GIA test. For example, if a user's percentile rank is 75, it means they performed better than 75% of the people who took the test.
// - Stanine: Stanines are another way of standardizing scores, but they divide the distribution into nine equal parts, with a stanine of 1 representing the lowest performance and a stanine of 9 representing the highest performance.
// - Age Equivalent Score: The age equivalent score is an attempt to compare the user's performance to the performance of individuals at different ages. For example, if a 25-year-old user scores an age equivalent score of 30, it means they performed at the level of an average 30-year-old.
// - Grade Equivalent Score: Similar to age equivalent scores, grade equivalent scores compare a user's performance to that of students in different grades. For example, a grade equivalent score of 8.5 means the user performed at the level of an average 8th grader in the fifth month of the school year.
// - Standard Deviation: The standard deviation of scores provides information about the spread of scores in the sample. A higher standard deviation indicates greater variability in performance.
// - Reliability: Reliability measures the consistency and stability of the test results. A reliable test should yield similar scores if the test is taken multiple times by the same person.
// - Validity: Validity refers to the extent to which the GIA test measures what it is intended to measure, i.e., general intelligence or cognitive abilities.
// - Remember that interpreting cognitive test scores requires a comprehensive understanding of psychometrics and statistical analysis. If you are using a standardized GIA test, the test provider should provide guidelines on how to interpret the scores correctly. It's essential to consider these metrics in conjunction with other relevant factors and not make absolute judgments based solely on test scores.
