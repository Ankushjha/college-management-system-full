import React from "react";
import icon from "../../assets/images/login.png";
import { Pen } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="h-full flex items-center justify-between mx-10">
      <Pen className="h-[80%]" />

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>Item 1</NavigationMenuItem>
          <NavigationMenuItem>Item 2</NavigationMenuItem>
          <NavigationMenuItem>Item 3</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="cred-buttons flex gap-5" >
        <Button variant="outline" onClick={()=> navigate("/login")}>Login</Button>
        <Button onClick={()=> navigate("/signup")}>Sign Up</Button>
      </div>
    </div>
  );
}
