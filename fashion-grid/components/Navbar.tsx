import Link from "next/link";


export default function Navbar(){
    return(
        <nav>
            <h1>Fashion Grid</h1>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/closet">Closet</Link>
                <Link href="/grid">Grid</Link>
            </div>

        </nav>
    );
}