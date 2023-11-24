import { api } from "@/apis/Billions";
import Pagination from "@/components/Paginations";
import { PAGE_DISPLAY } from "@/constants/api";
import { IbillionaireIndex, Ipage } from "@/utils/interface";
import { useEffect, useState } from "react";

export default function Index() {
  const [billionaire, setBillionaire] = useState<
    undefined | IbillionaireIndex[]
  >();
  const [page, setPage] = useState<Ipage>({ total: undefined, current: 0 });
  function x() {
    return 1;
  }

  useEffect(() => {
    (async function getBillionaireIndex() {
      const data = await api.billionaire();
      setBillionaire(data);
    })();
  }, []);

  useEffect(() => {
    if (billionaire) {
      setPage((current) => {
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
        <Pagination page={page} />
        dsda
      </main>
    </div>
  );
}
