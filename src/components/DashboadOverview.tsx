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
    <div className="py-3 px-4 md:px-5 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
      <div className="grid gap-2 md:gap-4 col-span-1 md:col-span-2">
        <div className="p-6 flex flex-col rounded-lg card">line graph showing all scores over various times</div>
        <div className="p-6 flex flex-col rounded-lg card">line graph showing rank over various times</div>
      </div>
      <div className="grid gap-2 md:gap-4 col-span-1 md:col-span-1">
        <div className="p-6 flex flex-col gap-6 card">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            <DashValue tooltipText="Date Joined" value="Jun 14, 2020" icon={<MdDateRange size={30} />} />
            <DashValue tooltipText="Current Rank" value="4th" icon={<IoPodiumOutline size={30} />} />
            <DashValue tooltipText="Best Rank" value="1st" icon={<SlTrophy size={30} />} />
            <DashValue tooltipText="Latest Attempt" value="70%" icon={<GiArrowhead size={30} />} />
            <DashValue tooltipText="Best Attempt" value="100%" icon={<TbTargetArrow size={30} />} />
            <DashValue tooltipText="Number of Attempts" value="152" icon={<GiStrikingArrows size={30} />} />
          </div>
        </div>
        <div className="p-6 flex flex-col rounded-lg card">
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
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error accusamus, sunt dolore eligendi et recusandae laborum
        consequuntur sit cumque in temporibus, delectus velit inventore, laudantium quaerat nemo labore expedita dicta eveniet
        accusantium perspiciatis quia nesciunt molestias? Harum, expedita perspiciatis! Reprehenderit deleniti, cum ullam possimus,
        eaque quidem quis labore officia aut minima a sint vitae ipsam, ipsa dolore libero commodi earum accusamus. Possimus,
        temporibus ipsum? Asperiores nihil nostrum, quibusdam eos at consectetur iure. Pariatur rerum, totam distinctio dolore quod
        nemo non illo minima eum provident commodi. Dolorum blanditiis enim minus! Laborum maxime, voluptatum unde inventore in vel
        fugiat excepturi architecto cupiditate alias quos facere quas sapiente, blanditiis corporis hic praesentium illum reprehenderit
        vero quae repudiandae quidem. Eveniet nulla necessitatibus ipsa perspiciatis expedita quisquam debitis magnam. Est dicta ipsam
        quam libero saepe id alias eos ea culpa reprehenderit, nisi, minima omnis corporis vel reiciendis inventore doloribus eaque
        quod! Consequatur alias tenetur error eos ab maxime mollitia in quas, fugit vero minus dolores eum unde tempora nihil
        exercitationem, qui odio cumque et! Sit iste quis in? Omnis dolorem error itaque similique, labore aperiam quisquam, corrupti
        cumque necessitatibus aliquam mollitia quaerat numquam voluptas magni perspiciatis enim eius et quod eaque nihil velit. Minus,
        aliquam officia? Cumque consectetur beatae quasi minus nisi cum reprehenderit ut delectus, doloremque laborum, voluptates quia
        incidunt autem maxime molestias perspiciatis cupiditate, recusandae iure a sequi asperiores illo? Accusamus delectus totam
        asperiores repudiandae! Sapiente dolores cumque fuga necessitatibus dicta itaque omnis quos. Cumque neque, obcaecati nobis
        nesciunt eos odit at expedita autem, magni quisquam dicta. Cum officiis nam illum, illo accusantium dicta? Neque quia porro
        quasi ratione. Porro molestias explicabo eos neque velit reiciendis incidunt nesciunt vitae aspernatur deleniti maxime nam
        aliquam dolorum vero quae corrupti nemo rerum et, aperiam animi iure, quas quo veritatis. Consequuntur aperiam sit officiis
        asperiores dolor earum nisi vitae perferendis, ullam culpa optio expedita quam esse eaque, neque molestias corrupti porro cum
        fugiat blanditiis? Officiis, error! Iste quis accusantium corrupti cumque blanditiis culpa, illum qui non eum reprehenderit
        quas sint labore quos asperiores excepturi praesentium a nihil magni ea, minima autem quidem at ex! Officia dicta aliquam
        expedita perferendis at aspernatur natus ab facere est commodi, omnis harum eligendi itaque maxime, vero ullam error officiis
        nam obcaecati sint soluta. Omnis, harum ad eum, deleniti sit consectetur doloremque cupiditate magnam rem beatae aperiam
        placeat perspiciatis corrupti pariatur voluptatem porro a. Placeat, aliquid ipsum natus quasi ducimus omnis mollitia ipsam.
        Asperiores dicta ipsa magnam error labore suscipit sed. Tempora, consequuntur distinctio. Eligendi ea voluptatum fugit animi
        recusandae culpa harum minus odio placeat cum, necessitatibus optio soluta omnis at mollitia nostrum molestiae. Eligendi nihil
        cupiditate, a praesentium officiis totam provident assumenda, saepe qui doloribus fuga animi, quae sed quos dolores. Amet,
        earum necessitatibus quaerat blanditiis fugiat est sit ipsam labore? Eos soluta aut sapiente quos cum reprehenderit repellendus
        nobis, at maiores beatae libero nulla commodi dolorem fuga rem harum impedit asperiores ipsum quod doloremque officiis.
        Placeat, cupiditate reprehenderit. Minima consectetur impedit dolorum expedita, excepturi enim sed dolore nulla ducimus
        voluptate quo dolores atque voluptates optio officia eveniet suscipit soluta maiores voluptas esse? Aut adipisci nisi corrupti,
        tenetur fugiat delectus ipsa minima excepturi explicabo obcaecati culpa eos dolorem nulla error architecto iste fugit? Tempora
        aliquid omnis accusamus recusandae nemo perspiciatis quis architecto voluptates rem eum eligendi quos asperiores explicabo
        deserunt maiores amet nihil, libero itaque cumque earum repellendus temporibus suscipit magni commodi. Animi, deleniti.
        Perspiciatis ipsum numquam, tempore voluptatem saepe minus explicabo enim deserunt nobis quod quia provident a incidunt
        corrupti temporibus maiores nesciunt nihil aut voluptatum cumque quas molestias consequuntur itaque non! Fugit, aperiam
        perferendis eveniet minima animi dignissimos placeat, repudiandae quos voluptates doloremque hic exercitationem ab, nihil
        consequuntur ipsam esse commodi? Nemo libero nihil accusamus! Soluta ipsum ut doloribus? Eum itaque molestias, ut ullam vero
        illo voluptatum amet molestiae eveniet odit rem quibusdam quisquam, exercitationem cum! Rem eos velit omnis tempore ut? Ducimus
        vitae nulla, natus delectus maiores labore illo magni voluptate cumque nesciunt exercitationem placeat? Sunt iste quisquam
        voluptatibus placeat eum! Explicabo, nulla aliquam quam perspiciatis consequatur maiores enim aperiam alias id earum totam
        officia iusto ipsa neque error ipsum sunt eaque ducimus corrupti molestiae nisi. Culpa nemo saepe at illo, accusamus facilis
        harum ratione nesciunt repudiandae voluptas hic perspiciatis fuga earum suscipit cum. Adipisci illo dolore vel quo fuga
        similique architecto? Maxime, architecto iusto. Natus tempora saepe dolor veritatis facilis cupiditate? Autem porro fugit
        maiores, blanditiis deleniti sapiente minus qui! Nisi, necessitatibus! Sint, doloremque vitae? Quos quam nisi fugiat vitae
        illum numquam eum, tempore cum repellat consequuntur porro culpa fuga sed dolorum? Atque odio repudiandae facere exercitationem
        tempora! Assumenda perferendis voluptas veritatis, impedit fugit tempore odit! Accusamus, nemo omnis autem magni sequi in,
        atque modi veritatis nulla recusandae debitis quibusdam optio dolore est beatae ad vel dignissimos. Maxime dolores non sed
        voluptatibus? Molestias dolores temporibus, numquam et harum asperiores quos eum maiores! Quam, nisi deleniti quia qui magni
        labore minima aperiam. Neque incidunt eligendi iste dolor nobis facere dolores, minima omnis molestiae exercitationem
        laudantium magni animi. Aspernatur obcaecati recusandae quae modi, animi temporibus architecto, molestiae fugiat, cupiditate
        praesentium explicabo magni ratione optio omnis repudiandae! A aliquam beatae tempore possimus accusantium reiciendis suscipit
        rerum dolorum cum similique! Omnis facere alias cumque perferendis autem id saepe nesciunt impedit, esse quae corrupti nobis
        adipisci ex quod rerum quisquam eaque doloribus reprehenderit cum sapiente maiores sunt dolore. Consequuntur sed debitis
        deleniti quas eveniet veniam totam ullam architecto neque excepturi tempore in officia voluptas quidem, dicta error
        exercitationem? Voluptate at sit consequuntur debitis illo harum reiciendis voluptates aspernatur quibusdam molestiae quo,
        exercitationem repellendus unde tempore! Et non ipsa quas a doloribus iste sequi exercitationem? Quisquam ipsam a vitae
        recusandae deserunt velit cumque quam sint ea optio, quos aspernatur soluta labore deleniti earum temporibus doloremque laborum
        molestias dolores aliquid! Quod obcaecati voluptatibus repellendus, exercitationem tempore placeat libero eum, debitis illo
        sapiente officiis nisi expedita voluptates laborum blanditiis explicabo! Tenetur natus minima quis. Alias corrupti,
        praesentium, optio odio quo laboriosam, omnis quidem illo nobis rem eum sunt consequatur recusandae fuga placeat maxime?
      </div>
    </div>
  );
}

// TODO replace tooltip for actual text for mobile devices because they won't work there!
function DashValue({ tooltipText, value, icon }: { tooltipText: string; value: string; icon: ReactElement }) {
  return (
    <div className="text-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{icon}</TooltipTrigger>
          <TooltipContent>
            <p className="">{tooltipText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="mt-1 text-xs md:text-sm">{value}</div>
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
