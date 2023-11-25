export const api = {
  billionaire: async function () {
    const data = await (
      await fetch("https://billions-api.nomadcoders.workers.dev/")
    ).json();
    return data;
  },

  billionaireDetail: async function (id: string) {
    const data = await (
      await fetch(`https://billions-api.nomadcoders.workers.dev/person/${id}`)
    ).json();
    return data;
  },
};
