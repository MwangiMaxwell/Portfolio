"use client";

import { useMemo, useState } from "react";
import { WorkCard } from "@/components/work-card";
import type { Work } from "@/lib/types";

interface WorkGalleryProps {
  works: Work[];
  pageSize?: number;
}

export function WorkGallery({ works, pageSize = 3 }: WorkGalleryProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(works.length / pageSize));

  const pageWorks = useMemo(
    () => works.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [currentPage, pageSize, works],
  );

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <>
      <div className="grid gap-6 sm:gap-8">
        {pageWorks.map((work, index) => (
          <WorkCard key={work.slug} work={work} index={(currentPage - 1) * pageSize + index} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex items-center justify-center rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground enabled:hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, pageIndex) => {
              const page = pageIndex + 1;
              const isActive = page === currentPage;

              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-primary bg-primary/10 text-primary"
                      : "cursor-pointer border-border/60 bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-primary/5"
                  }`}
                  aria-label={`Go to page ${page}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {page}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex items-center justify-center rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground enabled:hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
