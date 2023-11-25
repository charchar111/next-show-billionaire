import { theme } from "@/constants/theme";
import { pageAtom } from "@/utils/atoms";
import { Ipage } from "@/utils/interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";

const dark = theme.dark;

export default function Pagination() {
  const router = useRouter();

  const currentPage =
    typeof router.query?.page === "string" ? router.query?.page : undefined;

  console.log(currentPage);

  const pageState = useRecoilValue(pageAtom);
  const pageTotal = Array.from(Array(pageState.total));

  return (
    <section id="pagination">
      <div className="pagination-layout my-10 flex flex-wrap justify-center space-x-3 text-center text-lg  ">
        <Link
          href={`/?page=${
            currentPage === undefined
              ? 1
              : Number(currentPage) >= 1 && Number(currentPage) <= 10
                ? 1
                : Math.floor(Number(currentPage) / 10) * 10 - 9
          }`}
          className="page-btn--prev"
        >
          <i className="fa-solid fa-angle-left"></i>
        </Link>
        {pageTotal.map((e, i) => {
          const ui = (
            <Link
              href={`/?page=${i + 1}`}
              className={`page-btn aspect-square w-8 ${
                currentPage == undefined && i == 0
                  ? "current-page rounded-full bg-[rgb(240,240,240)]"
                  : Number(currentPage) === i + 1
                    ? "current-page rounded-full bg-[rgb(240,240,240)]"
                    : null
              }`}
              key={i + 1}
            >
              {i + 1}
            </Link>
          );

          if (!currentPage && i < 10) return ui;
          if (
            (Math.ceil(Number(currentPage) / 10) - 1) * 10 <= i &&
            // i <= Math.ceil(Number(currentPage) / 10) + 8
            i <= (Math.ceil(Number(currentPage) / 10) - 1) * 10 + 9
          )
            return ui;
          return null;
        })}
        <Link
          href={`/?page=${
            !Number(currentPage)
              ? 11
              : Math.ceil(Number(currentPage) / 10) * 10 + 1 > pageTotal.length
                ? pageTotal.length
                : Math.ceil(Number(currentPage) / 10) * 10 + 1
          }`}
          className="page-btn--next"
        >
          <i className="fa-solid fa-angle-right"></i>
        </Link>
      </div>
      <style global jsx>
        {`
          #pagination a.page-btn.current-page {
            color: ${dark.bgcolors.background};
          }
        `}
      </style>
    </section>
  );
}
