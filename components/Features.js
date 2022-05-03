import bgBottom from "../public/imgs/bg_bottom.jpg";
import { Anchor, findPosition } from "./CallToAction";

export default function Features({ children }) {
  return (
    <>
      <div className="relative bg-[#e4fbff]">
        <img className="relative md:absolute scale-150 translate-x-1/4 md:scale-100 md:translate-x-0 -mb-24" src={bgBottom.src} alt="step" />
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className="lg:w-3/5 md:w-1/2 object-cover object-left rounded-lg md:mt-0 mt-12" alt="step" />
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5d91fa] inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14">
                      </path>
                      <path d="M22 4L12 14.01l-3-3">
                      </path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-light title-font text-lg text-gray-900 mb-1 tracking-wider">
                      Suporte no e-mail e whatsapp para dúvidas
                    </h2>
                  </div>
                </div>
                <div className="flex relative pb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5d91fa] inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14">
                      </path>
                      <path d="M22 4L12 14.01l-3-3">
                      </path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-light title-font text-lg text-gray-900 mb-1 tracking-wider">
                      Economize muito mais com o seu processamento de pedidos.
                    </h2>
                  </div>
                </div>
                <div className="flex relative pb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5d91fa] inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14">
                      </path>
                      <path d="M22 4L12 14.01l-3-3">
                      </path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-light title-font text-lg text-gray-900 mb-1 tracking-wider">
                      Processamento automático no shopify c/ código de rastreio
                    </h2>
                  </div>
                </div>
                <div className="flex relative pb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5d91fa] inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14">
                      </path>
                      <path d="M22 4L12 14.01l-3-3">
                      </path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-light title-font text-lg text-gray-900 mb-1 tracking-wider">
                      Pedidos ilimitados
                    </h2>
                  </div>
                </div>
                <div className="flex relative pb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5d91fa] inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14">
                      </path>
                      <path d="M22 4L12 14.01l-3-3">
                      </path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-light title-font text-lg text-gray-900 mb-1 tracking-wider">
                      Integração com Shopify
                    </h2>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5d91fa] inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14">
                      </path>
                      <path d="M22 4L12 14.01l-3-3">
                      </path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-light title-font text-lg text-gray-900 mb-1 tracking-wider">
                      Pedidos de origem nacional e internacional
                    </h2>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-grow pl-4 pt-5">
                    <h2 className="font-thin title-font text-sm text-gray-900 mb-1 tracking-wider">
                      Obs: Necessário possuir proxy e números de telefone para fazer a criação de contas para o processamento de pedidos. Ferramenta possui tutoriais de instalação e indicações de fornecedores de proxy, números e e-mails.
                    </h2>
                  </div>
                </div>
                <div className="container mx-auto mt-8">
                  <Anchor onClick={() => window.scrollTo({
                    top: findPosition(document.getElementById("ctaElement")),
                    left: 0,
                    behavior: 'smooth'
                  })} text={"QUERO AUMENTAR MEU FATURAMENTO"} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}