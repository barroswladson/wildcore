import Link from "next/link";

export default function Menu() {
    return(
        <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/?criar-cartas">Criar Cartas</Link>
        </div>
    )
}