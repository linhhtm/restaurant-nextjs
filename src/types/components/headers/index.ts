import React from 'react'
export interface IHeader {
    logoLink?: React.ReactNode, 
    links?: React.ReactNode[], 
    className?: string, 
    collapseBreakpointClass?: 'sm' | 'md' | 'lg' | 'xl'
}