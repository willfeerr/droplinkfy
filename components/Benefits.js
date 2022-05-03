import first from "../public/imgs/1.png"
import sc from "../public/imgs/2.png"
import tr from "../public/imgs/3.png"
import fr from "../public/imgs/4.png"
import ft from "../public/imgs/5.png"
import cube from "../public/imgs/cube.png"
import { Anchor, findPosition } from "./CallToAction"

export default function Benefits({ children }) {
  return (
    <>
      <section className="relative">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center relative z-20">
              <h2 className="mt-2 text-3xl leading-8 text-center mb-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Vantagens do <span className="text-[#1081fa] font-semibold tracking-wide">Droplinkfy</span></h2>
              <img src={first.src} className={"mx-auto"} />
            </div>
            <div className="relative">
              <div className="w-0 md:w-0.5 bg-[#49c9fc] scale-x-50 absolute h-full left-1/2 -translate-x-1/2 -z-1 scale-y-125"></div>
              <div className="absolute left-1/2 top-1/2 z-10 w-24 h-24 -translate-x-1/2">
                <img src={cube.src} className={"w-full h-full"} />
              </div>

              <div className="bg-gradient-to-b pt-18 -mt-5 from-[#e9fcff] to-blue-0 rounded-t-full overflow-visible">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative px-10">
                    <img src={sc.src} className={"mx-auto bg-white rounded-full shadow-2xl m-5"} />
                    <dd className="mt-2 text-center font-bold uppercase text-lg mx-10 text-[#1081fa]">MAIS RAPIDEZ EM SEU PROCESSAMENTO</dd>
                    <dd className="mt-2 text-center text-sm mx-10 text-black font-light">Chega de processar pedidos manualmente em plataformas que não possuem integração. Com a Droplinkfy você pode processar até 60 pedidos por minuto com apenas um clique.</dd>
                  </div>
                  <div className="relative px-10">
                    <img src={tr.src} className={"mx-auto bg-white rounded-full shadow-2xl m-5"} />

                    <dd className="mt-2 text-center font-bold uppercase text-lg mx-10 text-[#1081fa]">PAGUE MENOS EM SEUS PRODUTOS</dd>
                    <dd className="mt-2 text-center text-sm mx-10 text-black font-light">Produtos com fornecedores nacionais e internacionais com preços até 70% mais baratos do que o aliexpress.</dd>
                  </div>
                  <div className="relative px-10">
                    <img src={fr.src} className={"mx-auto bg-white rounded-full shadow-2xl m-5"} />

                    <dd className="mt-2 text-center font-bold uppercase text-lg mx-10 text-[#1081fa]">CRIAÇÃO DE CONTAS COM ÚNICO CLIQUE</dd>
                    <dd className="mt-2 text-center text-sm mx-10 text-black font-light">Crie várias contas com apenas um clique. Rápido e prático. Necessário ter números virtuais e e-mails para criação das contas.</dd>
                  </div>
                  <div className="relative px-10">
                    <img src={ft.src} className={"mx-auto bg-white rounded-full shadow-2xl m-5"} />

                    <dd className="mt-2 text-center font-bold uppercase text-lg mx-10 text-[#1081fa]">TUDO AUTOMATIZADO</dd>
                    <dd className="mt-2 text-center text-sm mx-10 text-black font-light">Trabalhando dentro das políticas da ferramenta, nosso robô consegue automatizar todo o processo de criação de contas, processamento de pedidos e inclusão de códigos de rastreio no shopify</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto w-2/5 mb-12 relative bg-white pb-12">
          <Anchor onClick={() => window.scrollTo({
            top: findPosition(document.getElementById("ctaElement")),
            left: 0,
            behavior: 'smooth'
          })} text={"Quero lucrar mais"} />

        </div>
      </section>
    </>
  )
}