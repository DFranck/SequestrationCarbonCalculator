import Carousel3D from "@/components/carousel-3d";
import Section from "@/components/layout/section";
import CarbonSequestrationCalculation from "@/features/calculation/CarbonSequestrationCalculation";

export default function home() {
  const cardStyle =
    "bg-card text-card-foreground list-disc p-4 gap-2 pl-6 rounded border  shadow flex flex-col flex-grow w-96";
  return (
    <>
      <Carousel3D>
        <div className={cardStyle}>
          <h2>Calculate Your Carbon Footprint</h2>
          <p>
            Assess the carbon footprint of your project with our accurate
            calculator. Input your tree data and get instant insights.
          </p>
        </div>
        <div className={cardStyle}>
          <h2>Visualize Your Projects Potential</h2>
          <p>
            See the impact of your project with detailed visualizations.
            Understand how your trees contribute to carbon sequestration.
          </p>
        </div>
        <div className={cardStyle}>
          <h2>Estimate Project Costs</h2>
          <p>
            Get a clear estimate of the costs involved in your carbon
            sequestration project. Plan your budget effectively.
          </p>
        </div>
        <div className={cardStyle}>
          <h2>Consider Transplantation Options</h2>
          <p>
            Explore the benefits of tree transplantation. Maximize the
            efficiency of your carbon sequestration efforts.
          </p>
        </div>
        <div className={cardStyle}>
          <h2>Optimize Tree Utilization</h2>
          <p>
            Leverage the full potential of your trees. Learn how to use them
            best for carbon offsetting and environmental benefits.
          </p>
        </div>
      </Carousel3D>
      <Section className="relative max-w-7xl grid grid-cols-2 justify-center gap-10 text-justify py-20 h-screen border-t-2">
        <div>
          <h2 className="mb-4">1- Calculer</h2>
          <p>
            Calculez votre empreinte carbone en un instant et faites un pas vers
            un avenir plus vert. Découvrez comment vos choix quotidiens
            impactent notre planète et prenez des actions pour réduire votre
            empreinte écologique dès aujourdhui.
          </p>
          <h2 className="mb-4 mt-4">2- Transplanter </h2>
          <p>Transplanter un arbre permet de le garder en vie et de :</p>
          <ul className="list-disc">
            <li className="ml-5">Préserver le carbone séquestré</li>
            <li className="ml-5">
              faire perdurer le mécanisme de photosynthese
            </li>
          </ul>
          <h3 className="flex gap-2 items-center">
            Ques que la transplantation?{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-big-right-dash "
            >
              <path d="M5 9v6"></path>
              <path d="M9 9h3V5l7 7-7 7v-4H9V9z"></path>
            </svg>
          </h3>
          <h3 className="flex items-center gap-2">
            Ou séquiper?{" "}
            <a href="https://www.transplantation-arbres.fr/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-big-down-dash "
              >
                <path d="M15 5H9"></path>
                <path d="M15 9v3h4l-7 7-7-7h4V9z"></path>
              </svg>
            </a>
          </h3>
        </div>
        <video
          src="https://carbon-calculator-beige.vercel.app/assets/imgs/videoplayback.mp4"
          // autoPlay
          // loop
          controls
        ></video>
      </Section>
      <Section>
        <CarbonSequestrationCalculation />
      </Section>
    </>
  );
}
