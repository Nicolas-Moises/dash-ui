import Image from "next/image";

import logo from '../../assets/supabase.svg'
import { Google } from "@/components/ui/google";
import { Github } from "@/components/ui/github";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Lock } from "lucide-react";

export default function SignIn() {
    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div className="max-w-[418px] w-full p-8 bg-zinc-900 rounded-md">
                <Image 
                    src={logo}
                    alt=""
                    className="w-24"
                />

                <h2 className="mt-8 text-2xl text-white font-bold">Welcome to OAuth</h2>

                <div className="mt-12">
                    <p className="text-sm text-zinc-300 font-light">Sign in with</p>

                    <div className="flex gap-2 items-center w-full mt-4">
                        <a href="#" className="flex-1 h-12 justify-center flex items-center bg-[#2a2a2a] rounded border border-[#2a2a2a] hover:bg-transparent transition-colors">
                            <Google />
                        </a>
                        <a href="#" className="flex-1 h-12 justify-center flex items-center bg-[#2a2a2a] rounded border border-[#2a2a2a] hover:bg-transparent transition-colors">
                            <Github />
                        </a>
                    </div>
                </div>

                <div className="flex gap-4 items-center my-8">
                    <hr className="flex-1 border-zinc-600" />
                    <p className="text-sm text-zinc-500 font-light">Or continue with</p>
                    <hr className="flex-1 border-zinc-600" />
                </div>
                <form className="flex flex-col gap-6">

                    <div className="flex flex-col gap-4">
                        <Label htmlFor="email">Your email address</Label>
                        <Input id="email" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Checkbox name="remember" id="remember" />
                            <Label htmlFor="remember" className="cursor-pointer">Remember-me</Label>
                        </div>
                        <Button variant="link" className="p-0" asChild>
                            <Link href="#">
                                Forgot your password?
                            </Link>
                        </Button>
                    </div>

                    <Button type="submit">
                        <Lock size={20} />
                        Sign In
                    </Button>
                </form>
                <div className="flex items-center justify-center mt-5">
                    <Button variant="link" className="p-0" asChild>
                        <Link href="#">
                            Don&apos;t have an account? Sign up
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}