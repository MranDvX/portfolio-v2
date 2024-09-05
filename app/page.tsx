"use client";

import React, { useState, useEffect, useCallback, ReactNode } from "react";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  MapPin,
  Headphones,
  Eye,
  Check,
  Copy,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import avatarImage from "./images/avatar.png";
import domainScoreImage from "./images/domainscore.png";
import interviewImage from "./images/interview.png";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  isWhite?: boolean;
  style?: React.CSSProperties;
}

const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = "",
  isWhite = false,
  style,
}) => {
  return (
    <Card
      className={`relative transition-shadow duration-300 ${className} ${
        isWhite
          ? "hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          : "hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
      }`}
      style={style}
    >
      {children}
    </Card>
  );
};

export default function Portfolio() {
  const [showLinkedIn, setShowLinkedIn] = useState(true);
  const [currentProject, setCurrentProject] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);

  const projects = [
    {
      name: "Kahop",
      description:
        "Descripción breve del proyecto 1. Este proyecto demuestra mis habilidades en desarrollo frontend.",
      image: interviewImage,
      technologies: ["IA", "Astro", "React", "Next.js", "TypeScript"],
      previewLink: "https://proyecto1.com",
    },
    {
      name: "Domain Score",
      description:
        "Descripción breve del proyecto 2. Una aplicación web innovadora con un diseño moderno.",
      image: domainScoreImage,
      technologies: ["IA", "React", "Next.js", "TypeScript"],
      previewLink: "https://proyecto2.com",
    },
    {
      name: "Legappdo",
      description:
        "Descripción breve del proyecto 3. Solución eficiente para problemas complejos de UI/UX.",
      image: interviewImage,
      technologies: ["Serverless", "Next.js", "TypeScript"],
      previewLink: "https://proyecto3.com",
    },
  ];

  useEffect(() => {
    const socialInterval = setInterval(() => {
      setShowLinkedIn((prev) => !prev);
    }, 5000);

    const projectInterval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => {
      clearInterval(socialInterval);
      clearInterval(projectInterval);
    };
  }, []);

  const copyEmail = useCallback(async () => {
    const email = "franmavazq@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
      document.body.removeChild(textArea);
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-white/95">
      <div className="absolute inset-0 bg-[url('./images/background.svg')] bg-no-repeat bg-cover opacity-10 bg-opacity-10 blur-sm" />
      <div className="grid grid-cols-3 gap-4 max-w-4xl w-full">
        <BentoCard className="bg-card col-span-2 flex items-center h-20 p-4">
          <div className="bg-primary text-primary-foreground font-bold text-2xl rounded-xl p-2 mr-4">
            <span className="hidden sm:inline">+7 años</span>
            <span className="sm:hidden">+7</span>
          </div>
          <h2 className="text-foreground text-xl font-semibold">
            Frontend Developer
          </h2>
        </BentoCard>
        <BentoCard className="bg-card overflow-hidden transition-all hover:scale-105 row-span-2">
          <Image
            src={avatarImage}
            alt="Francisco Mancuello portrait"
            width={300}
            height={300}
            className="object-cover w-full h-full"
            priority
          />
        </BentoCard>
        <BentoCard
          className="bg-primary xl:py-20 lg:py-16 md:py-16 sm:py-10 flex items-center justify-center col-span-2"
          isWhite={true}
        >
          <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl font-bold text-primary-foreground text-center">
            Francisco Mancuello
          </h1>
        </BentoCard>
        <BentoCard className="bg-card p-4 col-span-3">
          <p className="text-foreground text-lg leading-relaxed">
            Plasmo sus ideas y deseos en forma de proyectos web únicos que
            inspirarán a usted y a sus clientes.
          </p>
        </BentoCard>
        <BentoCard className="bg-card p-4 overflow-hidden col-span-2">
          <h2 className="sr-only">Proyectos</h2>
          <div className="flex">
            <div className="relative h-48 flex-grow">
              {projects.map((project, index) => (
                <article
                  key={index}
                  className={`absolute w-full transition-all duration-500 ${
                    index === currentProject
                      ? "top-0 opacity-100"
                      : "top-48 opacity-0"
                  }`}
                >
                  <div className="flex space-x-4">
                    <div className="relative w-48 h-48 flex-shrink-0 hidden lg:inline">
                      <Image
                        src={project.image}
                        alt={`Preview de ${project.name}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-foreground font-semibold text-xl mb-2">
                          {project.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {project.description}
                        </p>
                        <ul className="flex flex-wrap gap-2 mb-2">
                          {project.technologies.map((tech, techIndex) => (
                            <li
                              key={techIndex}
                              className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button
                        variant="link"
                        asChild
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors p-0"
                      >
                        <a
                          href={project.previewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye size={16} className="mr-1" />
                          <span className="text-sm">Vista previa</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center ml-4">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full mb-2 ${
                    index === currentProject ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </BentoCard>
        <BentoCard className="bg-card overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/mrandvx/"
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute inset-0 flex flex-col items-center justify-center text-foreground hover:text-primary transition-all duration-500 ${
                showLinkedIn ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Linkedin size={32} />
              <span className="text-lg text-center font-semibold mt-2">
                in/MranDvX
              </span>
            </a>
            <a
              href="https://www.instagram.com/MranDvX"
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute inset-0 flex flex-col items-center justify-center text-foreground hover:text-primary transition-all duration-500 ${
                showLinkedIn ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <Instagram size={32} />
              <span className="text-lg text-center font-semibold mt-2">
                @MranDvX
              </span>
            </a>
          </div>
        </BentoCard>
        <BentoCard className="bg-card p-3 flex items-center justify-center">
          <div className="flex items-center">
            <Headphones className="text-primary mr-2" size={24} />
            <div className="flex flex-col">
              <div className="text-muted-foreground text-xs">
                Ahora escuchando
              </div>
              <div className="text-foreground text-sm font-medium">
                Imagine Dragons - Bones
              </div>
            </div>
          </div>
        </BentoCard>
        <BentoCard
          className="bg-primary p-3 flex items-center justify-center"
          isWhite={true}
        >
          <MapPin
            className="text-primary-foreground hidden lg:inline mr-2"
            size={20}
          />
          <span className="text-primary-foreground font-semibold">
            Paraguay
          </span>
        </BentoCard>
        <BentoCard className="bg-card p-3 flex items-center justify-center group cursor-pointer relative">
          <Button
            variant="ghost"
            onClick={copyEmail}
            aria-label="Copiar correo electrónico"
            className="flex items-center justify-center w-full h-full"
          >
            {/* <Mail
              className="text-primary group-hover:text-primary/80 mr-2"
              size={24}
            /> */}
            <span className="text-foreground group-hover:underline text-sm">
              franmavazq@gmail.com
            </span>
            <Copy
              className="text-primary group-hover:text-primary/80 ml-2 hidden lg:inline"
              size={20}
            />
          </Button>
          {emailCopied && (
            <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-90 rounded-2xl transition-all">
              <Check className="text-primary-foreground mr-2" size={20} />
              <span className="text-primary-foreground font-semibold">
                Copiado!
              </span>
            </div>
          )}
        </BentoCard>
        <BentoCard className="bg-card p-4 col-span-3">
          <form className="flex items-center space-x-2">
            <div className="flex items-center text-xl font-bold text-primary whitespace-nowrap mr-2">
              {/* <Send className="mr-2 " size={20} /> */}
              <span>Newsletter</span>
            </div>
            <Input
              type="email"
              id="email"
              placeholder="Tu email"
              className="flex-grow"
            />
            <Button type="submit">Suscribirse</Button>
          </form>
        </BentoCard>
      </div>
    </main>
  );
}
