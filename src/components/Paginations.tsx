import { Ipage } from "@/utils/interface";

export default function Pagination({ page }: { page: Ipage }) {
  return (
    <section id="pagination">
      <div className="pagination-layout">
        <span>{page.total}</span>
      </div>
    </section>
  );
}
