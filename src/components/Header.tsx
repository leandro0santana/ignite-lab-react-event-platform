import { TextAlignJustify, X } from "phosphor-react";
import { useHeaderDrawer } from "../contexts/HeaderDrawerContext";
import { Logo } from "./Logo";

export function Header() {
  const { isOpen, setOpen } = useHeaderDrawer();

  return (
    <header className="w-full px-4 py-6 flex items-center justify-between bg-gray-700 border-b border-gray-600 md:justify-center md:py-6 md:px-0">
      <Logo />

      <button type="button" className="flex items-center text-blue-500 md:hidden" onClick={() => setOpen(isOpen)}>
        <span className="text-xl mr-2">Aulas</span> {isOpen ? <X size={25} /> : <TextAlignJustify size={30} />}
      </button>
    </header>
  )
}