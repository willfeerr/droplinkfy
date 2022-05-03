import CallToAction, { Contact } from "./CallToAction";
import ing from "../public/imgs/ing.jpg"

export default function Princing({ children, CTARef }) {
  return (
    <>
      <section className="relative" >
        <div className="left-0 right-0 top-24 mx-auto container absolute">
          <img className="mx-auto" src={ing.src}/>
        </div>
        <h2 className="text-center text-4xl mb-4 font-light relative z-10 ">
          Confira nosso <span className="font-bold">plano</span>
        </h2>
        <div style={{ width: 380 }} className="mx-auto overflow-visible mb-10" >
          <div className="h-full bg-white p-6 rounded-lg border-2 border-gray-100 flex flex-col relative overflow-hidden shadow-xl">
            {/* <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR
            </span> */}
            <h2 className="text-lg text-center tracking-widest title-font mb-2 font-light">
              Obtenha acesso completo a todas as nossas funcionalidades
            </h2>
            <h2 className="text-xl tracking-widest title-font my-4 font-medium text-black text-center">
              14 dias de teste grátis.
            </h2>
            <span className="text-lg ml-1 font-normal text-gray-500">Após</span>
            <h1 className="text-5xl text-gray-900 leading-none flex items-center justify-center">
              <span>R$387
              </span>
              <span className="text-lg ml-1 font-normal text-gray-500">/mês
              </span>

            </h1>
            <p className="text-xs text-gray-500 mt-3 pb-4 mb-4 border-b border-gray-200">
              + 3% pelo valor faturado <br />
              *valor cobrado apenas por pedidos processados pela ferramenta.
            </p>
            <p className="flex items-center text-gray-500 font-light text-lg mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5">
                  </path>
                </svg>
              </span>
              Aumente seu lucro em até 3x
            </p>
            <p className="flex items-center text-gray-500 font-light text-lg mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5">
                  </path>
                </svg>
              </span>
              Processamento de pedidos ilimitados
            </p>
            <p className="flex items-center text-gray-500 font-light text-lg mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5">
                  </path>
                </svg>
              </span>
              Criação de contas com apenas 1 clique
            </p>
            <p className="flex items-center text-gray-500 font-light text-lg mb-6">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5">
                  </path>
                </svg>
              </span>
              Processamento automático no shopify c/ código de rastreio
            </p>
            <p className="text-xs text-gray-500 mt-3">
              *cupons de frete grátis não são aplicados em 100% dos pedidos processados
            </p>
          </div>
          <div className="my-2">
            <Contact />
          </div>
          <CallToAction ref={CTARef} />
        </div>
      </section>
    </>
  )
}