import { FaGithub, FaRss } from "react-icons/fa6";

function Header() {
  return (
    <header className="flex flex-col gap-4 md:flex-row justify-between items-center py-6 border-b">
      <h1 className="bg-white text-3xl text-center md:text-left">
        <a
          className="font-bold text-link hover:underline block"
          href="https://netnewswire.com/"
        >
          NetNewsWire
        </a>{" "}
        themes collection
      </h1>

      <div className="text-2xl flex items-center">
        <a
          href="https://github.com/PaiJi/NetNewsWire-themes-collection"
          className="hover:text-link transition"
        >
          <FaGithub />
        </a>

        <a
          className="ml-8 transition hover:text-[#f26522] flex items-center"
          href={`https://github.com/PaiJi/NetNewsWire-themes-collection/rss.xml`}
        >
          <FaRss className="inline-block mr-1" />
        </a>
      </div>
    </header>
  );
}

export default Header;
