import { PageProps } from ".next/types/app/layout";
import { ReactNode } from "react";
import { IRecipe } from "types";
export interface ITabCardGrid extends PageProps {
  heading: string | ReactNode;
  tabs: Record<string, IRecipe[]>;
}
