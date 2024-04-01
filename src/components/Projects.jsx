import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion-3d";
import { useMotionValue, animate } from "framer-motion";
import { Image, Text } from "@react-three/drei";
import { Html } from "@react-three/drei";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { atom, useAtom } from "jotai";
export const projects = [
  {
    title: "Recepiee",
    url: "",
    image: ["/icons/tellwind (1).png"],
    description: "yufguiygi",
  },

  {
    title: "Book Store",
    url: "",
    image: ["/icons/tellwind (1).png"],
    description: "fghfg",
  },
  {
    title: "Ecomerse + dashbord",
    url: "",
    image: ["/icons/tellwind (1).png"],
    description: "fgdhgfh",
  },
  {
    title: "Trener personalny",
    url: "",
    image: ["/icons/tellwind (1).png"],
    description: "dfghdfgh",
  },
];
const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const backgroundOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(backgroundOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = backgroundOpacity.get();
  });

  return (
    <group {...props}>
      <mesh position-z={-0.001} ref={background}>
        <planeGeometry args={[1.5, 1]} />
        <meshBasicMaterial color={"black"} transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[1.2, 0.6, 2]}
        url={project.image[0]}
        toneMapped={false}
        position-y={0.1}
      />
      <Text
        maxWidth={1}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.1}
        position={[-0.4, -0.3, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
    </group>
  );
};
const Projects = ({ section }) => {
  const { viewport } = useThree();

  const [open, setOpen] = useState(-1);
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group>
      <motion.group
        position-y={-viewport.height * 2 - 1}
        animate={{
          scale: section === 2 ? 1 : 0,
          x: section === 2 ? 1 : 5,
        }}
      >
        {projects.map((project, index) => (
          <motion.group
            key={index}
            position={[index * 2.5, 0, -3]}
            animate={{
              x: 0 + (index - currentProject - 1),
              y: currentProject === index ? 0 : -0.1,
              Z: currentProject === index ? -2 : -3,
              rotateX: currentProject === index ? 0 : -Math.PI / 2,
              rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
            }}
          >
            <Html position={[index * 0, -8, -0]}>
              <div className={"flex items-center justify-center "}>
                <Dialog open={open === index} onOpenChange={setOpen}>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="w-full items-center text-center">
                        {" "}
                        {project.title}
                      </DialogTitle>{" "}
                      <Carousel className="w-[80%] ml-12">
                        <CarouselContent>
                          {project.image.map((imageUrl, index) => (
                            <CarouselItem key={index + 20}>
                              <div className="p-1">
                                <Card>
                                  <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img
                                      src={imageUrl}
                                      alt={`Image ${index + 1}`}
                                      className="max-w-full max-h-full"
                                    />
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                      <DialogTitle>Technologie</DialogTitle>
                      <DialogDescription>
                        {project.description}
                      </DialogDescription>
                      <DialogTitle>Opis Projektu</DialogTitle>
                      <DialogDescription>
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </Html>
            <motion.group
              onClick={() => {
                setOpen(index);
              }}
              position={[index, 0, -0]}
            >
              <Project
                project={project}
                highlighted={index === currentProject}
              ></Project>
            </motion.group>
          </motion.group>
        ))}
      </motion.group>
    </group>
  );
};

export default Projects;
export const currentProjectAtom = atom(Math.floor(projects.length / 2));
