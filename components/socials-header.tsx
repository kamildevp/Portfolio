import GithubIcon from "./icons/github-icon";
import LinkedinIcon from "./icons/linkedin-icon";

export default function SocialsHeader() {
  return (
      <div 
        className="flex flex-row gap-4 justify-center md:justify-end p-3 md:p-4 animate-fadeIn opacity-0"
        style={{animationDelay: "1.2s"}}
      >
        <a href="https://github.com/kamildevp" target="_blank">
          <GithubIcon className="w-16 h-16 md:w-20 md:h-20" />
        </a>
        <a href="https://www.linkedin.com/in/kamil-kitka-8ab7891b1" target="_blank">
          <LinkedinIcon className="w-16 h-16 md:w-20 md:h-20" />
        </a>
      </div>
  );
}