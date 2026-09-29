import { ReactNode, CSSProperties } from 'react'
import { useReveal } from 'hooks/useReveal'

interface RevealProps {
    children: ReactNode
    className?: string
    delay?: number
}

export const Reveal = ({ children, className = '', delay = 0 }: RevealProps) => {
    const ref = useReveal<HTMLDivElement>()

    return (
        <div ref={ref} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>
            {children}
        </div>
    )
}
