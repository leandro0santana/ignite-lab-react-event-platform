import { Lesson } from "./Lesson";

import { useHeaderDrawer } from "../contexts/HeaderDrawerContext";
import { useGetLessonsQuery } from "../graphql/generated";

export function Sidebar() {
  const { data } = useGetLessonsQuery();
  const { isOpen } = useHeaderDrawer();

  return (
    <aside className={
      isOpen 
      ? "w-full bg-gray-700 p-6 border-l border-gray-600 md:w-[348px] md:block" 
      : "w-full hidden bg-gray-700 p-6 border-l border-gray-600 md:w-[348px] md:block"
    }>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Conograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => (
          <Lesson 
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  )
}