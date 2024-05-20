export async function getTrend(): Promise<{
  [x: string]: { install: string; download: string } | undefined;
}> {
  return await (
    await fetch("https://netnewswire-themes-collection.worker.jipai.moe/")
  ).json();
}
