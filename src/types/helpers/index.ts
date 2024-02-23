import React from 'react'

export interface IAnimationReveal {
    disabled?: boolean
    className?: string
    children: any
}
export interface IAnimatedSlideInComponent {
    direction?: string
    offset?: number
    children?: React.ReactNode
    key?: number
}

export interface IResponsiveVideoEmbed {
    url?: string
    background?: string
    className?: string
}