import React from "react";
import { Button } from "./ui/button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);
  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };
  const prevroject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };
  return (
    <div className="flex flex-row gap-10 h-full w-screen justify-center items-end translate-y-[-10rem] ">
      <Button onClick={() => prevroject()}>
        <BsArrowLeft></BsArrowLeft> Poprzedni
      </Button>
      <h2 className="text-2xl  font-sans text-bold text-white textShadow text-center ">
        Projekty
      </h2>
      <Button onClick={() => nextProject()}>
        Nastempny <BsArrowRight />
      </Button>
    </div>
  );
};

export default ProjectsSection;
