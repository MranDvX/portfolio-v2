"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Eye,
  DollarSign,
  Quote,
  Check,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import avatarImage from "./images/avatar.png";
import domainScoreImage from "./images/domainscore.png";
import interviewImage from "./images/interview.png";
import legappdoImage from "./images/legappdo.png";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = "" }) => (
  <Card
    className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-xl ${className}`}
  >
    {children}
  </Card>
);

interface SocialMedia {
  icon: React.ElementType;
  link: string;
  label: string;
  username: string;
}

interface Project {
  name: string;
  tagline: string;
  logo: StaticImageData;
  previewLink: string;
  mrr: number;
  techStack: string[];
}

interface Testimonial {
  text: string;
  author: string;
}

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSocial, setCurrentSocial] = useState(0);
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);

  const socialMedias: SocialMedia[] = [
    {
      icon: Instagram,
      link: "https://www.instagram.com/MranDvX",
      label: "Instagram",
      username: "@MranDvX",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/mrandvx/",
      label: "LinkedIn",
      username: "@mrandvx",
    },
    {
      icon: Mail,
      link: "mailto:franmavazq@gmail.com",
      label: "Email",
      username: "franmavazq@gmail.com",
    },
  ];

  const projects: Project[] = [
    {
      name: "Kahop",
      tagline: "Plataforma de entrevistas asistida por IA",
      logo: interviewImage,
      previewLink: "https://www.kahop.com/es/pagina-principal/",
      mrr: 1500,
      techStack: ["Next.js", "IA", "TypeScript"],
    },
    {
      name: "Domain Score",
      tagline: "Herramienta de análisis de dominios web",
      logo: domainScoreImage,
      previewLink: "https://domainscore.com/",
      mrr: 2000,
      techStack: ["Next.js", "IA", "TypeScript"],
    },
    {
      name: "Legappdo",
      tagline: "Aplicación de gestión legal para abogados",
      logo: legappdoImage,
      previewLink: "https://legappdo.com/",
      mrr: 1000,
      techStack: ["Next.js", "Serverless", "PosreSQL", "AWS"],
    },
  ];

  const testimonials: Testimonial[] = [
    {
      text: "Francisco destaca por su capacidad de apoyar a sus compañeros y asume los retos siempre con buena disposición, sabe trabajar tanto independiente como en equipo, su forma de ser facilita el trato, atiende oportunamente y es responsable.",
      author:
        "Julian Dario Luna Patiño, Software Architect | AWS Community Builder",
    },
    {
      text: "Francisco cuenta con una gran habilidad para trabajar en equipos remotos, siempre busca apoyar a sus compañeros y aprender cosas nuevas, considero que técnicamente es muy bueno ya que cumple con los tiempos de entrega y calidad. Siempre está abierto a dar su opinión y recibir feedback.",
      author: "Fernando Arey Durán, Software engineer",
    },
    {
      text: "Francisco is a great software engineer and is a good and efficient professional, He obtained great results working in a collaborative team. He combines his solid background knowledge and his soft skills very well.",
      author: "Santiago Valle, Software Engineer | Cloud Engineer | AWS",
    },
    {
      text: "Francisco es un buen compañero y muy buen desarrollador, tiene mucha experiencia y sabe lidiar con los requerimientos provenientes de negocio/producto y con stakeholders, QAs y demás involucrados.",
      author: "Saul Vega Ramírez, Software Engineer",
    },
    {
      text: "Francisco es un profesional excepcional con habilidades y conocimientos. Posee una visión estratégica. Siempre se enfoca en la calidad del trabajo y es un líder inspirador.",
      author: "Christian Celis, ICT Engineer",
    },
    {
      text: "Gran líder sabe guiar muy bien y tiene una gran actitud",
      author: "Ricardo Andrés Mejía Córdoba, Full-Stack Developer",
    },
    {
      text: "Francisco posee una gran habilidad en cuanto al liderazgo. Sabe manejar las situaciones, es atento y siempre dispuesto a ayudar. Su personalidad facilita la comunicación con él y su forma en estructurar las responsabilidades e identificar las habilidades de cada integrante.",
      author: "David Carreño, Desarrollador FrontEnd",
    },
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    const socialInterval = setInterval(() => {
      setCurrentSocial((prev) => (prev + 1) % socialMedias.length);
    }, 5000);

    const projectInterval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 7000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(socialInterval);
      clearInterval(projectInterval);
    };
  }, [projects.length, socialMedias.length, testimonials.length]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const totalMRR = projects.reduce((sum, project) => sum + project.mrr, 0);
  const totalUsers = 16000;

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-white text-black">
      <div className="absolute inset-0 bg-[url('./images/background.svg')] bg-white bg-repeat opacity-40" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl w-full">
        <BentoCard className="md:col-span-2 md:row-span-2 p-6 flex flex-col justify-between">
          <div className="flex items-start">
            <div className="relative w-32 h-32 mr-6">
              <Image
                src={avatarImage}
                alt="Francisco Mancuello portrait"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-black">
                Francisco Mancuello
              </h1>
              <div className="flex items-center">
                <span className="text-xl text-white bg-black rounded-md px-2 py-1 mr-2">
                  +7 años
                </span>
                <h2 className="text-xl text-gray-600 mr-2">
                  Frontend Developer
                </h2>
              </div>
              <div className="flex items-center mt-2">
                <MapPin className="text-black mr-2" size={16} />
                <span className="text-sm text-gray-600">Paraguay</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-black text-sm mb-4 leading-relaxed">
              Especializado en transformar ideas en negocios rentables con un
              enfoque en el crecimiento rápido y sostenible.
            </p>
          </div>
        </BentoCard>

        <BentoCard className="md:row-span-3 overflow-hidden p-4">
          <h3 className="text-lg font-semibold mb-4 text-black">
            Proyectos Destacados
          </h3>
          <div className="relative">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`p-4 transition-opacity duration-500 ${
                  index === currentProject
                    ? "opacity-100"
                    : "opacity-0 absolute top-0 left-0 right-0"
                }`}
              >
                <div className="flex items-center mb-2">
                  <div className="relative w-20 h-20 mr-4">
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-black">
                      {project.name}
                    </h4>
                    <div className="flex items-center text-green-600">
                      <DollarSign size={20} className="mr-1" />
                      <span className="font-semibold">{project.mrr}/mo</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-black mb-4">{project.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button asChild variant="link" className="group">
                    <a
                      href={project.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye size={16} className="mr-1" />
                      <span className="text-sm">Ver proyecto</span>
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="p-4 flex flex-col justify-center items-center h-[120px] sm:h-auto bg-black text-white">
          <div className="text-center">
            <span className="text-3xl font-bold">${totalMRR}+</span>
            <p className="text-sm">MRR Total</p>
          </div>
        </BentoCard>

        <BentoCard className="p-4 flex flex-col justify-center items-center h-[120px] sm:h-aut bg-black text-white">
          <div className="text-center">
            <span className="text-3xl font-bold">
              {totalUsers.toLocaleString()}+
            </span>
            <p className="text-sm0">Usuarios Totales</p>
          </div>
        </BentoCard>

        <BentoCard className="p-4 flex items-center justify-center h-[120px] sm:h-auto relative overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {socialMedias.map((social, index) => (
              <div
                key={social.label}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  index === currentSocial ? "opacity-100" : "opacity-0"
                }`}
              >
                {social.label === "Email" ? (
                  <button
                    onClick={() => {
                      copyToClipboard(social.username);
                      setCopied(true);
                    }}
                    className="flex flex-col items-center justify-center w-full h-full"
                    aria-label={`Copiar correo electrónico: ${social.username}`}
                  >
                    <social.icon size={40} className="text-black mb-2" />
                    <span className="text-sm font-medium text-black">
                      {social.label}
                    </span>
                    <span className="text-xs text-gray-600">
                      {social.username}
                    </span>
                  </button>
                ) : (
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center w-full h-full"
                    aria-label={`Conecta conmigo en ${social.label}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(social.link, "_blank", "noopener,noreferrer");
                    }}
                  >
                    <social.icon size={40} className="text-black mb-2" />
                    <span className="text-sm font-medium text-black">
                      {social.label}
                    </span>
                    <span className="text-xs text-gray-600">
                      {social.username}
                    </span>
                  </a>
                )}
              </div>
            ))}
          </div>
          {currentSocial ===
            socialMedias.findIndex((social) => social.label === "Email") &&
            copied && (
              <div className="absolute inset-0 bg-black text-white flex items-center justify-center transition-opacity duration-300">
                <div className="text-center">
                  <Check size={40} className="mx-auto mb-2" />
                  <p className="font-medium">¡Correo copiado!</p>
                </div>
              </div>
            )}
        </BentoCard>

        <BentoCard className="md:col-span-2 p-4">
          <h3 className="text-lg font-semibold mb-2 flex items-center text-black">
            <Quote className="text-black mr-2" size={20} />
            Testimonios
          </h3>
          <div className="relative h-24">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col justify-between transition-opacity duration-500 ${
                  index === currentTestimonial ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-sm text-black italic">{testimonial.text}</p>
                <p className="text-xs text-gray-600 mt-2">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="md:col-span-3 p-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2"
          >
            <h3 className="text-lg font-semibold text-black mb-2">
              Newsletter
            </h3>
            <Input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white text-black placeholder-gray-400"
              required
            />
            <Button
              type="submit"
              className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto"
            >
              Suscribirse
            </Button>
          </form>
        </BentoCard>
      </div>
    </main>
  );
}
