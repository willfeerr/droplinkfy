import Link from "next/link"
import wapp from "../public/wapp.svg"

export default function CallToAction({ children }) {
  return (
    <>
      <div id={"ctaElement"}>
        <Link href={"https://app.droplinkfy.com/register/"}>
          <Button text="Acessar Agora" />
        </Link>
      </div>
    </>
  )
}

export function Anchor(props) {
  return <Button {...props} />
}

export function Contact({ text = "Duvidas? Fale conosco" }) {
  return <a href={`https://wa.me/5511945316242?text=Oii%2C%20é%20sobre%20o%20Droplinkfy%2C%20você%20consegue%20me%20ajudar%3F`} className="flex text-2xl text-[#5e92fa] items-center !text-center justify-center font-light mt-auto border-0 py-3 px-4 w-full transition-all">
    <svg className="w-8 mr-2 fill-[#5e92fa] " enableBackground="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><path d="M10.8,507.9c6.9-20.7,13.4-40.1,19.9-59.5c6.5-19.2,12.3-38.7,19.7-57.6c3.8-9.6,2.6-16.8-2.2-25.8   c-26.2-48.6-34-100.7-24.9-154.9c7.7-45.9,27.2-86.5,58.7-121C133.9,32.4,198.7,5.2,275.3,8.4c56.1,2.3,105.7,22.8,148,59.9   c39.4,34.5,65.1,77.4,77,128.4c9.6,41.1,8.5,82-3.3,122.5c-15,51.3-43.7,93.6-86.4,125.8c-59.3,44.8-125.8,58.7-198.3,44.6   c-21.8-4.2-42.6-12-62.2-22.6c-3.2-1.7-5.9-2.1-9.4-0.9c-37.2,12-74.5,23.9-111.7,35.8C23.4,503.7,17.7,505.6,10.8,507.9z    M74.1,445.2c2-0.5,2.9-0.7,3.8-1c23.3-7.4,46.6-14.9,70-22.1c2.2-0.7,5.2-0.1,7.3,0.9c10.1,5,19.8,11,30.2,15.4   c42.8,18.1,86.9,21,131.5,8.6c53.2-14.9,94-46.6,121.9-94.5c23.9-41,32.1-85.3,24.7-131.9c-9.4-59.3-39.8-105.9-90.1-139   C329.8,53,281.8,43.3,230.6,51.4c-44.1,7-81.8,27.1-112.9,59.3c-26.7,27.6-44.6,60.2-52.4,97.7c-11.1,53.7-2.9,104.5,26.9,150.8   c6,9.3,5.8,16.4,2.2,25.9C87.1,404.6,81,424.5,74.1,445.2z" /><path d="M389.3,321.8c-0.3,19.3-9.4,34-27.8,43.2c-18.1,9-36.5,11.3-55.4,3.9c-17-6.7-34.2-13.2-50.6-21.3   c-21.6-10.7-39.3-26.7-55.5-44.4c-17.9-19.6-33.1-41.4-45.6-64.7c-8.9-16.5-14.3-34-12.4-53.2c2-20.4,11.5-36.7,27.5-49   c3.2-2.4,8-3.5,12.1-3.9c5.3-0.4,10.6,0.4,15.9,0.8c4.4,0.4,6.8,3.5,8.3,7.1c3.9,9.6,7.4,19.2,11.1,28.9c2.5,6.5,4.4,13.3,7.4,19.6   c3.7,7.8,1.4,14.3-3.4,20.3c-4.1,5.1-8.4,10-13.1,14.4c-3.9,3.7-4.6,7.5-2,12c11.5,20.5,25.5,38.9,44,53.8   c12.2,9.8,25.7,17.1,39.7,23.9c4.1,2,8.1,1.7,11.3-2c6.9-7.9,13.9-15.7,20.7-23.7c4.4-5.1,6.6-6.1,12.5-3.1   c17.1,8.6,34,17.5,51,26.4C389,313,390,316.6,389.3,321.8z" /></g></svg>
    {text}
  </a>
}

function Button({ text = "Acessar Agora", onClick = evt => { } }) {
  return <button onClick={onClick} className="text-2xl font-secondary flex items-center !text-center justify-center uppercase font-bold mt-auto text-white bg-[#e5ac31] border-0 py-3 px-4 w-full focus:outline-none hover:bg-[#eabd5a] rounded-full shadow-lg hover:shadow-xl transition-all">
    {text}
  </button>
}

export function findPosition(obj) {
  var currenttop = 100 - (window.innerHeight/2);
  if (obj.offsetParent) {
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [currenttop];
  }
} 