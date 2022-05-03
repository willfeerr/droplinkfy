import { Anchor, findPosition } from "./CallToAction";
import bgtop from "../public/imgs/bg_top.jpg";

export default function Hero({ children }) {
  return (
    <>
    <img src={bgtop.src} className="absolute -z-10 -mt-36" />
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 mb-36 lg:mb-56">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-3xl lg:w-1/2">
            <span className="block xl:inline">Tenha até 3x mais lucro em sua operação de dropshipping. Processando pedidos fora do aliexpress.</span><br />
          </h1>
          <p className="mt-1 text-xl font-thin pb-5 text-gray-500 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-0 md:text-xl lg:mx-0">Economize no pagamento dos seus produtos e potencialize seu lucro com a ferramenta mais poderosa de processamento de pedidos do mercado.</p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="w-full lg:w-1/2">
              <Anchor onClick={() => window.scrollTo({
                top: findPosition(document.getElementById("ctaElement")),
                left: 0,
                behavior: 'smooth'
              })} text={"Quero lucrar mais"} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}