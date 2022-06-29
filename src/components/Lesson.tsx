import classNames from "classnames";
import { format, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CheckCircle, Lock } from 'phosphor-react';
import { Link, useParams } from "react-router-dom";
import { useHeaderDrawer } from "../contexts/HeaderDrawerContext";

interface LessonProps {
  title: string
  slug: string
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string}>();
  const { isOpen, setOpen } = useHeaderDrawer();
  
  const isLessonAvailable = isPast(props.availableAt);
  const availableAtFormat = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  });

  const isActiveLesson = slug === props.slug;

  return (
    <Link 
      to={`/event/lesson/${props.slug}`} 
      className={
        classNames("group", {
          "pointer-events-none": !isLessonAvailable
        })
      }
      onClick={() => setOpen(isOpen)}
    >
      <span className="text-gray-300">
        {availableAtFormat}
      </span>

      <div className={
        classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
          'bg-green-500 group-hover:border-white': isActiveLesson,
        })
      }>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={
              classNames("flex items-center gap-2 text-sm font-medium", {
                "text-white": isActiveLesson,
                "text-blue-500": !isActiveLesson
              })
            }>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={
              classNames("text-xs rounded px-2 py-[0.125rem] text-white border font-bold", {
                "border-white": isActiveLesson,
                "border-green-300": !isActiveLesson
              })
            }>
            {props.type === 'live' ? 'AO VIVO': 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={
          classNames("mt-5 block", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson
          })
        }>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}