"use client";
import { parseAsStringEnum, useQueryState } from "nuqs";
import type { ReactNode } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
const categories = ["All", "Professional", "Full-stack", "Hackathon"] as const;
type Category = (typeof categories)[number];
export function WorkFilter({
  items,
}: {
  items: { slug: string; category: string; card: ReactNode }[];
}) {
  const [category, setCategory] = useQueryState(
    "category",
    parseAsStringEnum<Category>([...categories])
      .withDefault("All")
      .withOptions({ history: "push" })
  );
  const shown = items.filter(
    (item) => category === "All" || item.category === category
  );
  return (
    <>
      <div className="work-toolbar">
        <ToggleGroup
          className="work-filters"
          aria-label="Filter projects by category"
          value={[category]}
          onValueChange={(value) => {
            if (value.length) void setCategory(value[0] as Category);
          }}
        >
          {categories.map((value) => (
            <ToggleGroupItem key={value} value={value}>
              {value}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <p className="work-count" role="status">
          {shown.length} {shown.length === 1 ? "project" : "projects"}
        </p>
      </div>
      <div className="archive-grid">
        {shown.map((item) => (
          <div key={item.slug}>{item.card}</div>
        ))}
      </div>
    </>
  );
}
