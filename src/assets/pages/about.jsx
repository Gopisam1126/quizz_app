import Navbar from "../components/navbar";

function About() {
  return (
    <>
      <section>
        <div className="fixed top-8 left-20 right-20">
          <Navbar />
        </div>
        <div className="mt-44 px-20">
          <h1 className=" relative left-1 font-semibold text-4xl uppercase hero-heading special-font">
            <b>A</b>b<b>o</b>ut
          </h1>
          <div className="mt-5 px-4 py-6 shadow-xl bg-slate-200 rounded-lg">
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              labore? Qui atque dolorum error vitae numquam non cum, iure facere
              explicabo aperiam quae unde autem illo ex rem repellendus dolor
              odit hic exercitationem quibusdam temporibus tenetur! Molestiae
              quibusdam tempore praesentium dignissimos consequuntur? Aut
              dolores nemo iure. Nostrum iure rerum esse quod libero laudantium
              doloribus ipsum nemo laborum cumque? Reprehenderit quae, nobis,
              ipsam blanditiis ullam similique est totam quo laboriosam
              obcaecati dolores iure eveniet ut harum. Maxime nam ad nostrum
              quam eaque natus, illo cupiditate nihil consequatur molestiae enim
              voluptatum eveniet est quasi exercitationem, tempora, voluptates
              rem. In itaque laborum temporibus! <br /><br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis placeat consectetur architecto pariatur obcaecati itaque alias. Culpa adipisci excepturi quo alias aliquid sunt voluptates eum exercitationem pariatur corrupti saepe deserunt ea neque, harum sapiente. Voluptates saepe suscipit voluptatibus! Mollitia minus ipsam non nulla delectus. Dolores itaque repellat perferendis sit magnam?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
