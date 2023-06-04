import Image from "next/image";

import supabase from '../assets/supabase.svg'
import { UserNav } from "./user-nav";

export function Header() {
    return (
        <header className="w-full border-b border-zinc-400/20">
            <div className="w-full max-w-7xl mx-auto py-4 flex items-center"> 
                <Image alt="" src={supabase} className="w-36" />

                <div className="ml-auto">
                    <UserNav />
                </div>
            </div>
        </header>
    )
}