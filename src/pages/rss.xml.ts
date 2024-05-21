import rss from "@astrojs/rss";
import ThemesFile from "../assets/themes.json";
import type { APIContext } from "astro";

export function GET(context: APIContext) {
  return rss({
    title: "NetNewsWire Themes collection",
    description: "a collection website of NetNewsWire themes.",
    // https://docs.astro.build/zh-cn/reference/api-reference/#contextsite
    // well astro context give me site url without base, i guess i have no choose.
    site: "https://paiji.github.io/NetNewsWire-themes-collection",
    items: ThemesFile.map((theme) => ({
      title: `New Theme: ${theme.themeTitle}`,
      pubDate: new Date(theme.pubDate),
      description: `<img align='center' src=${theme.themeThumbs[0]} /><br/><p>${theme.themeDescription}</p><br/><a href="https://paiji.github.io/NetNewsWire-themes-collection#${theme.id}?utm_source=rss-feed">View website</a>`,
      link: `https://paiji.github.io/NetNewsWire-themes-collection#${theme.id}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
