import { theme } from "@/constants/theme";
import { pageAtom } from "@/utils/atoms";
import { Ipage } from "@/utils/interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

const dark = theme.dark;

export default function Pagination() {
  const router = useRouter();
  console.log(router);
  const currentPage =
    typeof router.query?.page === "string" ? router.query?.page : undefined;

  const [pageState, setPageState] = useRecoilState(pageAtom);
  const pageTotal = Array.from(Array(pageState.total));

  return (
    <section id="pagination">
      <div className="pagination-layout flex justify-center space-x-3 text-center text-lg ">
        <Link href="/" className="page-btn--prev">
          <i className="fa-solid fa-angle-left"></i>
        </Link>
        {pageTotal.map((e, i) =>
          i < 10 ? (
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
          ) : null,
        )}
        <Link href="/" className="page-btn--next">
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
