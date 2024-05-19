import { FaGithub } from "react-icons/fa6";

function Header() {
  return (
    <header className="flex flex-col gap-4 md:flex-row justify-between items-center py-6 border-b">
      <h1 className="bg-white text-3xl">
        <a
          className="font-bold text-link hover:underline"
          href="https://netnewswire.com/"
        >
          NetNewsWire
        </a>{" "}
        themes collection
      </h1>

      <div className="text-2xl">
        <a
          href="https://github.com/PaiJi/NetNewsWire-themes-collection"
          className="hover:text-link transition"
        >
          <FaGithub />
        </a>
      </div>
    </header>
  );
}

export default Header;
