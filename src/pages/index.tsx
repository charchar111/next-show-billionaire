import { api } from "@/apis/Billions";
import Pagination from "@/components/Paginations";
import { PAGE_DISPLAY } from "@/constants/api";
import { pageAtom } from "@/utils/atoms";
import { IbillionaireIndex, Ipage } from "@/utils/interface";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function Index() {
  const setPageState = useSetRecoilState(pageAtom);

  const [billionaire, setBillionaire] = useState<
    undefined | IbillionaireIndex[]
  >();

  useEffect(() => {
    (async function getBillionaireIndex() {
      const data = await api.billionaire();
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

  console.log(billionaire);

  return (
    <div id="index" className="">
      <main>
        <Pagination />
      </main>
    </div>
  );
}
