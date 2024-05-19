import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="mt-6 py-6 border-t flex justify-between">
      <span className="text-sm">NetNewsWire Themes collection</span>
      <div>
        <a
          className="transition hover:text-link flex items-center text-sm"
          href="https://github.com/PaiJi/NetNewsWire-themes-collection"
        >
          <FaGithub className="inline-block mr-1" /> GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
