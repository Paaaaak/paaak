import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
    return (
        <div>
            <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
                <Link href="/" className="font-bold text-3xl">
                    Jaehyeon<span className="text-primary">Paak</span>
                </Link>
                <Link href="/posts" className="font-bold">Posts</Link>
                <Link href="/about" className="font-bold">About</Link>
                <ModeToggle></ModeToggle>
            </nav>
        </div>
    );
};