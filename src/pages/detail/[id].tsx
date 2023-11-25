import { api } from "@/apis/Billions";
import { theme } from "@/constants/theme";
import { IbillionaireDetail } from "@/utils/interface";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail() {
  const router = useRouter();
  const id = router.query?.id;
  const [billionaireApi, setBillionaireApi] = useState<
    undefined | IbillionaireDetail[]
  >();

  useEffect(() => {
    if (id && typeof id === "string")
      (async function getBillionaireDetail() {
        const data: any = await api.billionaireDetail(id);
        setBillionaireApi([data]);

        return;
      })();

    if (id && Array.isArray(id)) {
      id.map((element) =>
        (async function getBillionaireDetail() {
          const data: any = await api.billionaireDetail(element);
          setBillionaireApi((current: any) => {
            const target = current === undefined ? [] : [...data];
            target.push(data);
            return target;
          });

          return;
        })(),
      );
    }
  }, [id]);

  console.log(billionaireApi);

  return (
    <div className="detail mx-auto  max-w-4xl p-6">
      <section id="overview" className=" space-y-2 p-4">
        <div className="mx-auto w-1/2 min-w-[300px]">
          <img
            className=" w-full"
            src={billionaireApi ? billionaireApi[0].squareImage : undefined}
            alt={`character`}
          />
        </div>
        <h2 className="text-center text-xl font-semibold">
          {billionaireApi ? billionaireApi[0].name : null}
        </h2>
        <div>
          <span>Networth: </span>
          <span>
            {billionaireApi ? `${billionaireApi[0].netWorth} Billion` : null}
          </span>
        </div>
        <div>
          <span>Country: </span>
          <span>{billionaireApi ? `${billionaireApi[0].country}` : null}</span>
        </div>
        <div>
          <span>Industry: </span>
          <span>
            {billionaireApi
              ? `${billionaireApi[0].industries.map((e, i) => e)} `
              : null}
          </span>
        </div>

        <div>
          {billionaireApi
            ? billionaireApi[0]?.about?.map((e, i) => <p key={i}>{e}</p>)
            : null}
        </div>
        <p></p>
      </section>

      <section id="meta1" className="mt-7 p-4">
        <h2 className="my-5 text-center text-xl font-semibold">
          Financial Assets
        </h2>

        <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {!billionaireApi
            ? null
            : !billionaireApi[0].financialAssets
              ? null
              : billionaireApi[0].financialAssets.map((e, i) => (
                  <div
                    className="space-y-1 rounded-md border border-gray-400 border-opacity-60 p-3"
                    key={i}
                  >
                    {!e.ticker ? null : <p>Ticker: {e.ticker}</p>}
                    {!e.sharePrice ? null : <p>Shares: {e.sharePrice}</p>}
                    {!e.exchangeRate ? null : (
                      <p>
                        Excersie Price: {e.exchange === "KOREA" ? "W" : "$"}
                        {e.exchangeRate}
                      </p>
                    )}
                  </div>
                ))}
        </div>
      </section>
      <style jsx>{`
        #overview {
          background-color: ${theme.dark.bgcolors.surface1};
        }

        #meta1 {
          background-color: ${theme.dark.bgcolors.surface1};
        }
      `}</style>
    </div>
  );
}
