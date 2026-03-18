import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Home",
    description: "Home page",
}

export default function Home() {
    return (
        <main className="min-h-screen relative bg-background-color">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center">Home</h1>
            </div>
        </main>
    )
}
