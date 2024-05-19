import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="mt-6 p-6 border-t flex justify-between">
      <span>NetNewsWire Themes collection</span>
      <div>
        <a className="text-2xl" href="">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
