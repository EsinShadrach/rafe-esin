import { ProjectCard, ProjectCardProps } from "./project_cards";
import saveCircle from "~/public/projects/save_circle.jpeg";
import litpad from "~/public/projects/lit-pad.png";
import ogabuzz from "~/public/projects/ogabuzz.png";
import afrochart from "~/public/projects/afrochart.png";

export function SlideShowOfWork() {
  const projects: ProjectCardProps[] = [
    {
      title: "Save Circle",
      type: "App",
      description:
        "An app that helps you save money by rounding up your purchases to the nearest dollar and investing the change.",
      image: saveCircle,
    },
    {
      title: "Litpad",
      type: "App",
      description: "A web3 based reading platform that rewards creators",
      image: litpad,
    },
    {
      title: "Ogabuzz",
      type: "App",
      description:
        "A New Aggregation platform to deliver the latest local news to your palms",
      image: ogabuzz,
    },
    {
      title: "AfroCharts",
      type: "App",
      description: "An AfroCentric Music Streaming platform",
      image: afrochart,
    },
  ];
  return (
    <div className="mt-32 space-y-4">
      <h2 className="text-5xl font-semibold">Recent Projects:</h2>
      <div className="w-full border border-black aspect-square md:h-[50rem] flex justify-center items-center">
        <div className="flex flex-col md:flex-row">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              type={project.type}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
