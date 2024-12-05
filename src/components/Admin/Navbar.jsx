import { LogOutIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

export default function Navbar({ userImage, userName, role }) {
  const navigate = useNavigate();
  return (
    <div className="h-16 px-5 flex justify-end border-b">
      <div className="w-1/2 flex justify-between px-5 items-center">
        <nav>
          <ul className="flex gap-5">
            <li>Home</li>
            <li>Lorem</li>
            <li>Project</li>
          </ul>
        </nav>

        <div className="users flex gap-3 items-center">
          <div className="user">
            <p>{userName}</p>
            <p className="text-xs capitalize">{role}</p>
          </div>
          <DropdownMenu className="mr-10">
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src={userImage} alt="user" />
                <AvatarFallback>{userName}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-5">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onCLick={() => navigate("profile")}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out <LogOutIcon className="text-red-500" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
