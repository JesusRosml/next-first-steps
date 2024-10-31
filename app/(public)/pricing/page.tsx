import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing Page Jess',
    description: 'Pricing Page with Next.js for Jess Meshee'
}

export default function PricingPage() {
    return (
        <>
            <p className="text-7xl py-16 px-16">Pricing Page</p>
        </>
    )
}