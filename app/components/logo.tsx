import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Logo() {
  return (
    <>
        <a href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
            <img src="icon_sua_moeda.png" alt="icone sua moeda" width={32}/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#FFDE59]">SUA</span>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">MOEDA</span>
        </a>
    </>
  );
}
