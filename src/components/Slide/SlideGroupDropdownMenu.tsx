"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReactNode } from "react";

export function SlideGroupDropdownMenu({
  trigger,
  type,
  setType,
}: {
  type: "none" | "blank";
  setType: (type: string) => void;
  trigger: ReactNode;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="outline-none">
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark w-56" align="center">
        <DropdownMenuLabel>Slide Group</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={type}
          onValueChange={(v) => setType(v as "none" | "blank")}
        >
          <DropdownMenuRadioItem value="none">None</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="blank">Blank</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
