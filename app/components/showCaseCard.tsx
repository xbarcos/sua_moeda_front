import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShowCaseCard(props: any) {
  const { icon, title, li1, li2, li3 } = props;
  return (
    <>
      <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow hover:bg-gray-900">
        <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border showCaseIconContainer">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3 className="mt-6 text-white text-xl">{title}</h3>
        <ul className={`my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400 space-y-2 ${li2 ? 'text-start' : 'text-center'}`}>
          <li>
            {li2 && (
              <FontAwesomeIcon icon={faCheck} />
            )}
            <span className="ml-4 text-white">{li1}</span>
          </li>
          {li2 && (
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <span className="ml-4 text-white">{li2}</span>
            </li>
          )}
          {li3 && (
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <span className="ml-4 text-white">{li3}</span>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

