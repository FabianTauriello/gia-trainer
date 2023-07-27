import { Navbar } from "components/Navbar";
import { useAppSelector } from "hooks/useAppSelector";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);

  return (
    <div className="h-screen">
      <Navbar fixed />
      <aside className="fixed left-0 bottom-0 top-20 w-1/4 bg-slate-800 text-white">
        <ul className="border border-red-200 flex flex-col h-full p-10">
          <li className="">
            <button>Overview</button>
          </li>
          <li className="mt-6">
            <button>Leaderboard</button>
          </li>
          <li className="mt-auto">
            <button>Settings</button>
          </li>
        </ul>
      </aside>
      <main className="ml-[25%] pt-20">
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis eius est iure minus odio earum temporibus
          enim, officiis aperiam atque et delectus dolore dolor, adipisci velit, porro quidem minima eaque. Cupiditate velit
          reiciendis, ipsum aut itaque doloremque sit minima odio quaerat accusamus. Laudantium cupiditate modi, distinctio laboriosam
          iure vitae, illo dolore et, autem esse architecto deleniti ab rerum. Veniam minus omnis aliquid? Odit sequi ad tenetur ex aut
          minima nostrum quasi cum quas ipsam. Perferendis distinctio, aliquam voluptates dolor animi mollitia illum corrupti! Suscipit
          eos, quod dignissimos quos aspernatur ratione illum natus esse, sunt eligendi quibusdam hic dolore. Expedita sequi mollitia
          adipisci asperiores sint dolor consequuntur, excepturi qui aut ipsa dolores sunt delectus, nam deserunt quas autem
          reprehenderit! In eius culpa impedit dicta, quas consequuntur atque voluptate dolorum incidunt fuga ipsam suscipit magnam
          delectus eos non esse quidem at. Esse, quia quo. Labore cumque earum vero dolorum nesciunt quia odit, veritatis quas itaque
          provident consequuntur? Eaque maiores dolor iusto eos earum odit aliquid? Similique, perferendis! Voluptatibus consequatur
          unde eligendi commodi explicabo at beatae! Nihil vero aliquam porro pariatur cum molestiae delectus repellat, suscipit animi
          odit non perferendis dolorem dicta aliquid veritatis assumenda, fugiat reiciendis deserunt, laborum id voluptate sint?
          Dolorum libero possimus unde impedit aspernatur doloremque quisquam, neque, aliquid atque in facilis exercitationem quos
          saepe? Fugit ad repellat ipsam maxime eligendi. Eum fugit, quod vel sapiente sunt accusamus culpa eaque reiciendis officia
          incidunt obcaecati consequatur facilis deleniti sed veritatis corrupti provident recusandae saepe, eius nisi. Repellat
          perspiciatis asperiores nobis provident est delectus fuga quia ad quas rerum, aspernatur esse nihil, eligendi veritatis
          commodi impedit autem totam officia aut consectetur maxime. Blanditiis, maxime veniam cum quod placeat dolor eum eos
          distinctio facere at eveniet assumenda voluptatum quas in pariatur labore veritatis accusamus, soluta tenetur ipsum alias
          amet fugit non molestiae. Blanditiis nesciunt delectus, facere voluptatibus maxime iusto sint. Accusamus culpa enim totam
          autem quia ullam alias corrupti, repellendus reprehenderit officiis commodi officia nihil in unde, atque dolores incidunt
          quisquam. Necessitatibus vero dicta hic. Voluptates laboriosam cupiditate non molestias ipsam aliquid quis, reiciendis
          temporibus nostrum distinctio odio facere exercitationem pariatur commodi? Dolores mollitia nulla eveniet ex necessitatibus
          quasi laborum officiis, tempora impedit quis pariatur iure illo quibusdam cumque esse labore. Doloribus magnam hic provident
          consequatur dolorem repudiandae odio mollitia, possimus praesentium, sit asperiores voluptates, nesciunt expedita quo eius
          atque? Vel dolores omnis corrupti ad at eum veritatis. Mollitia ullam delectus provident quos repellendus quae, sed
          cupiditate accusamus illo magnam corrupti praesentium odio reprehenderit culpa earum, fugit consequuntur inventore velit
          atque. Sunt accusamus sequi facere ducimus quod cum nesciunt at voluptate ullam dolorem! Ipsa officiis sapiente, placeat
          error, obcaecati consectetur animi quas a perferendis, laboriosam totam minima officia id deserunt ipsam! Nesciunt, doloribus
          qui, quo fugit laborum repellat non unde, aliquid quidem perspiciatis reprehenderit ullam soluta necessitatibus perferendis
          consequatur culpa velit. Enim possimus suscipit tempora ipsam aut amet ex soluta dolor asperiores magnam, modi dolorem odio
          id quo assumenda saepe quasi eum voluptatibus vero fugiat illo unde dolore ut? Nam similique dolore in! Dolores maiores error
          perspiciatis? Quo impedit quod ipsa a sapiente incidunt maiores enim quos, minus, qui perspiciatis reprehenderit sit illo
          laudantium commodi fugit quidem nulla error laborum inventore distinctio exercitationem repellat magni. Ullam atque
          laudantium et neque excepturi delectus eos consequatur ipsum quis labore, voluptatibus tempore ut inventore omnis illo
          deleniti ipsa numquam pariatur. A, quam nesciunt nemo libero explicabo dolore quo tenetur atque ipsa molestiae est beatae
          inventore adipisci. Explicabo quidem provident cupiditate in quis impedit fugiat obcaecati dolorum ex. Quis dolor fuga dolore
          error distinctio tenetur repudiandae corporis est qui facere. Temporibus impedit quidem similique itaque, ipsum optio
          asperiores amet odit id eaque esse magni ducimus sequi, accusantium nesciunt fugit voluptas ad recusandae distinctio nemo
          cupiditate tempore. Error aspernatur ea totam tenetur earum doloremque, quod aperiam quas adipisci voluptate porro, id
          facere? Fuga, at adipisci! Saepe beatae sapiente illo minima voluptates et sequi tenetur eos, laborum ut voluptate mollitia
          sed autem iure quos quidem quia aliquam aspernatur corrupti molestiae. Ratione hic natus, odio omnis harum nihil corporis
          totam nemo ipsum, nobis ad dolores nulla fugiat consequuntur architecto explicabo. Obcaecati, sint delectus? Fugit tempora
          nostrum, accusamus debitis id velit harum aliquid, unde impedit corrupti necessitatibus obcaecati beatae provident temporibus
          maxime ab eos minima dolor facilis perferendis sed, dolorem quia? Dolore tempora, molestiae cum facilis rem maiores
          dignissimos commodi. Eaque non magnam perferendis numquam, quo reiciendis totam fugiat eos cumque, dolores officia dolore
          quibusdam suscipit natus, earum quisquam blanditiis et sit reprehenderit eum tenetur? Dignissimos ex reiciendis culpa odio
          eaque, quod illum, minus tempore perspiciatis nulla velit dolore nobis! Molestiae hic perspiciatis harum nam neque et,
          possimus laudantium architecto molestias soluta autem fugiat nulla? Dolores doloribus neque ab quis esse exercitationem
          accusamus cupiditate fuga, reiciendis dicta illum hic vitae molestiae pariatur! Cumque adipisci similique facilis quam
          voluptatem rerum! Ab vero molestiae libero maiores nesciunt accusantium doloremque veniam laudantium dolorum ullam expedita
          temporibus, culpa iusto eveniet cum quis accusamus, aspernatur, tempora a ratione minima. Vitae vel a dolorem dolor sequi
          repellat, nesciunt perspiciatis culpa optio hic corporis ex minus. Obcaecati mollitia soluta at porro minima, modi alias
          blanditiis laudantium quas ea eum, debitis rerum odio omnis? Perspiciatis non fuga, ut quia at hic, suscipit nostrum vel
          delectus exercitationem illo odit aliquid unde ullam asperiores, soluta dolore neque tempora? Dolorem, similique esse, nam
          ipsa molestiae quae laudantium quam iusto eaque aliquam saepe. Ipsum tempora molestiae odit minima repellat sapiente ipsam
          deserunt quod rerum! Distinctio ullam neque temporibus aperiam tempora voluptatum quas. Repellat quo incidunt alias delectus
          veritatis quibusdam sint quae harum, exercitationem eius. Facilis suscipit quidem sequi repellat illum explicabo, nisi nihil
          est consectetur eaque animi aut quaerat quia fugiat delectus obcaecati unde exercitationem. Rem repellat optio doloremque
          architecto exercitationem illum nostrum itaque qui tempora minima provident magni, sunt consequuntur reiciendis sapiente
          magnam laboriosam quod aut saepe repudiandae omnis eaque. Et debitis, repellat sit molestias mollitia dolores assumenda
          dignissimos dolor quibusdam modi vitae culpa sed nobis nulla, maxime distinctio. Expedita at culpa ratione similique
          doloremque commodi perferendis voluptatum in facere qui!\
        </p>
      </main>
    </div>
  );
}

export default Dashboard;

{
  /* <h2>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </h2> */
}
