import React, { ReactNode } from "react";
import { IPost } from "types";

export interface ITwoColSingleFeatureWithStats2 {
  subheading?: string | ReactNode;
  heading?: React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  imageSrc?: string;
  imageCss?: Object | null;
  imageContainerCss?: string | null;
  imageDecoratorBlob?: boolean;
  imageDecoratorBlobCss?: string | null;
  imageInsideDiv?: boolean;
  statistics?: null | { key: string; value: string }[];
  textOnLeft?: boolean;
}

export interface IThreeColSimple {
  cards: IPost[];
  linkText?: string;
  heading?: string | ReactNode;
  subheading?: string;
  description?: string;
  imageContainerCss?: string | null;
  imageCss?: Object | null;
}
