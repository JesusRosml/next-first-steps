// Colocamos el type por que indicamos que solo lo estamos utilizando para el tipado
import type { Metadata } from 'next';

// Crea metaetiquetas personalizas para cada pagina
export const metadata: Metadata = {
 title: 'SEO Title for Jess Meshee',
 description: 'SEO Title for Jess Meshee',
 keywords: ['About Page', 'Jess Meshee', 'Information']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl py-16 px-16">About Page</span>
        </>
    )
}