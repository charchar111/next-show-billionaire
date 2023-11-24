export const api = {
  billionaire: async function () {
    const data = await (
      await fetch("https://billions-api.nomadcoders.workers.dev/")
    ).json();
    return data;
  },
};
