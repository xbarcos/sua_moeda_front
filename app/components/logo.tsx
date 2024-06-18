import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Logo() {
  return (
    <>
        <a href="https:iuupi.com.br" className="flex items-center space-x-3 rtl:space-x-reverse">
            <FontAwesomeIcon icon={faCoins} color="white"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SUA MOEDA</span>
        </a>
    </>
  );
}
