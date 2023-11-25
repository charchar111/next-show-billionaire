import { api } from "@/apis/Billions";
import Pagination from "@/components/Paginations";
import { DEFAULT_INDEX, PAGE_DISPLAY } from "@/constants/api";
import { pageAtom } from "@/utils/atoms";
import { IbillionaireIndex, Ipage } from "@/utils/interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function Index() {
  const router = useRouter();
  const currentPage = Number(router.query?.page);
  if (router.query.page && isNaN(currentPage)) router.push("/404");
  // url 접속 시도 이상하게 할 시 404로 네비게이트

  const setPageState = useSetRecoilState(pageAtom);

  const [billionaire, setBillionaire] = useState<
    undefined | IbillionaireIndex[]
  >();

  useEffect(() => {
    (async function getBillionaireIndex() {
      const data: IbillionaireIndex[] = await api.billionaire();
      setBillionaire(data);
    })();
  }, []);

  useEffect(() => {
    if (billionaire) {
      setPageState((current) => {
        const returnTarget = { ...current };
        returnTarget.total = Math.ceil(billionaire.length / PAGE_DISPLAY);
        return returnTarget;
      });
    }
  }, [billionaire]);

  const cutBillionaire = billionaire?.slice(
    isNaN(currentPage)
      ? (DEFAULT_INDEX - 1) * PAGE_DISPLAY
      : (currentPage - 1) * PAGE_DISPLAY,
    isNaN(currentPage)
      ? DEFAULT_INDEX * PAGE_DISPLAY
      : currentPage * PAGE_DISPLAY,
  );

  return (
    <div id="index" className="p-6">
      <main>
        <div
          id="index-list-main "
          className="grid grid-cols-1 gap-24 sm:grid-cols-2 lg:grid-cols-3 "
        >
          {cutBillionaire?.map((element, index) => (
            <Link href={`/detail/${element.id}`} key={index}>
              <div className="flex cursor-pointer flex-col items-center opacity-70 transition-all hover:opacity-100">
                <div className="h-full">
                  {!element.squareImage ||
                  element.squareImage === "https:undefined" ? (
                    <p className="py-24 opacity-50">No Image</p>
                  ) : (
                    <img
                      className="rounded-3xl"
                      src={element.squareImage}
                      alt={`${element.name}`}
                    />
                  )}
                </div>
                <h5 className="py-4 text-xl font-semibold">{element.name}</h5>
                <p className="mb-2">{element.netWorth.toLocaleString()}</p>
                <div className="h-max space-x-10">
                  {element.industries.map((e, i) => (
                    <span
                      className="inline-block rounded-md bg-gray-500 px-3 py-1"
                      key={i}
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Pagination />
      </main>
    </div>
  );
}
