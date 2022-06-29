import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css';

import { useHeaderDrawer } from "../contexts/HeaderDrawerContext";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug
    }
  });

  const { isOpen } = useHeaderDrawer();

  if(!data || !data.lesson) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <div className="animate-spin"></div>
      </div>
    )
  }
  
  return (
    <div className={isOpen ? "hidden md:flex-1" : "flex-1"}>
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex flex-col items-start gap-16 md:flex-row">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img 
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL} 
                  alt={data.lesson.teacher.name} 
                />

                <div className="leading-relaxed">
                  <strong className="text-lg block md:text-2xl">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a 
              href="#" 
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade no discord
            </a>
            <a 
              href="#" 
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-1 md:grid-cols-2">
          <a href="#" className="bg-gray-700 rounded overflow-hidden flex flex-col items-stretch gap-2 hover:bg-gray-600 transition-colors md:gap-6 md:flex-row">
            <div className="bg-green-700 p-6 h-full flex items-center justify-center md:justify-start">
              <FileArrowDown size={40} />
            </div>

            <div className="p-6 leading-relaxed md:py-6 md:px-0">
              <strong className="text-2xl">
                Material complementar
              </strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>

            <div className="h-full bg-gray-500 p-6 flex items-center justify-center md:justify-start md:bg-transparent">
              <span className="text-xl mr-4 block md:hidden">Acessar material</span> <CaretRight size={24} />
            </div>
          </a>

          <a href="#" className="bg-gray-700 rounded overflow-hidden flex flex-col items-stretch gap-2 hover:bg-gray-600 transition-colors md:gap-6 md:flex-row">
            <div className="bg-green-700 p-6 h-full flex items-center justify-center md:justify-start">
              <Image size={40} />
            </div>

            <div className="p-6 leading-relaxed md:py-6 md:px-0">
              <strong className="text-2xl">
                Wallpapers exclusivos
              </strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>

            <div className="h-full bg-gray-500 p-6 flex items-center justify-center md:justify-start md:bg-transparent">
              <span className="text-xl mr-4 block md:hidden">Baixa wallpapers</span> <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}