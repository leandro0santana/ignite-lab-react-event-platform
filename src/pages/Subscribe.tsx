import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      }
    });

    navigate("/event");
  }

  return (
    <div className="min-h h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col items-center justify-between mt-20 mx-auto sm:flex sm:flex-row">
        <div className="px-8 mb-10 max-w-[640px] md:px-0">
          <div className="flex justify-center md:block">
            <Logo />
          </div>

          <h1 className="text-3xl mt-8 leading-tight md:text-[2.5rem]">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="w-full p-8 bg-gray-700 border border-gray-500 rounded md:w-auto">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full-width">
            <input 
              className="bg-gray-900 border border-transparent rounded px-5 h-14 hover:border-green-700 transition-colors"
              type="text" 
              placeholder="Seu nome completo" 
              onChange={(event => setName(event.target.value))}
            />
            <input 
              className="bg-gray-900 border border-transparent rounded px-5 h-14 hover:border-green-700 transition-colors"
              type="email"
              placeholder="Digite seu e-mail" 
              onChange={(event => setEmail(event.target.value))}
            />

            <button 
              className="mt-4 bg-green-500 uppercase py-4 rounded text-sm font-bold hover:bg-green-700 transition-colors disabled:opacity-50"
              disabled={loading}
              type="submit"
            >
              garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="src/assets/code.png" className="mt-10" alt="Code" />
    </div>
  )
}