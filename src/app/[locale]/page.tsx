import Carousel3D from "@/components/carousel-3d";
import FeaturesList from "@/components/features-list";
import GetStarted from "@/components/get-started";

export default function home() {
  const cardStyle =
    "bg-accent text-accent-foreground list-disc p-4 gap-2 pl-6 rounded border shadow flex flex-col flex-grow w-96";
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
          <h2>Visualize Your Project's Potential</h2>
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
      <FeaturesList />
      <GetStarted />
    </>
  );
}
