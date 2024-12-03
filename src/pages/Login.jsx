import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="min-w-96">
        <CardHeader>
          <CardTitle className="font-[Parkinsans]">Log In</CardTitle>
          <CardDescription>Login into your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email:</Label>
                <Input id="name" placeholder="John@doe.in" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password:</Label>
                <Input id="name" placeholder="********" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="faculty">Faculty</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-1.5">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember Me
                </label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          {/* <Button variant="outline">Cancel</Button> */}
          <Button onClick={() => navigate("/admin")}>Login</Button>

          <div className="flex flex-col justify-between space-y-1.5 mt-2">
            <Label>Forgot password? </Label>
            <Label>
              Don't have a account?
              <Link to="/signup" className="text-blue-600 ms-1.5">
                Sign Up
              </Link>
            </Label>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
