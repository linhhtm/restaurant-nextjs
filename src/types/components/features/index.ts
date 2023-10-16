import React, { ReactNode } from 'react'

export interface ITwoColSingleFeatureWithStats2 {
  subheading?: string | ReactNode
  heading?: React.ReactNode
  description?: string
  primaryButtonText?: string
  primaryButtonUrl?: string
  imageSrc?: string
  imageCss?: string
  imageContainerCss?: string
  imageDecoratorBlob?: boolean
  imageDecoratorBlobCss?: string | null
  imageInsideDiv?: boolean
  statistics?: null | { key: string; value: string }[]
  textOnLeft?: boolean
}

interface IFeature {
  imageSrc: string
  title: string
  description: string
  url: string
}
export interface IThreeColSimple {
  cards: IFeature[]
  linkText?: string
  heading?: string | ReactNode
  subheading?: string
  description?: string
  imageContainerCss?: string | null
  imageCss?: Object | null
}
