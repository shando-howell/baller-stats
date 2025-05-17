"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/auth"
import Image from "next/image";

import Link from "next/link";

export default function AuthButtons() {
    const auth = useAuth();

    return (
        <div>
            {!!auth?.currentUser && (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            {!!auth.currentUser.photoURL && (
                                <Image 
                                    src={auth.currentUser.photoURL}
                                    alt={`${auth.currentUser.displayName} avatar`}
                                    width={70}
                                    height={70}
                                />
                            )}
                            <AvatarFallback>
                                {(auth.currentUser.displayName || auth.currentUser.email)?.[0]}
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>
                        <div>{auth.currentUser.displayName}</div>
                        <div className="font-normal text-xs">{auth.currentUser.email}</div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/account">
                            My Account
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/admin-dashboard">
                            Admin Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/account/my-cart">
                            My Cart
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={async () => {
                            await auth.logout();
                        }}
                      >
                            Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
            {!auth?.currentUser && 
                <div className="flex gap-2 items-center">
                    <Link href="/login">Login</Link>
                    <div className="h-4 w-[1px] bg-white/50"/>
                    <Link href="/sign-up">Sign Up</Link>
                </div>
            }
        </div>
    )
}