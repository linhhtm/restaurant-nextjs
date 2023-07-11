import React from "react";

export interface ITwoColumnWithVideo {
  heading?: string | React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  watchVideoButtonText?: string;
  watchVideoYoutubeUrl?: string;
  imageSrc?: string;
  imageCss?: string | null;
  imageDecoratorBlob?: boolean;
}
