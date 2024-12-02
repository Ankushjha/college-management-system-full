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

export function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="min-w-96">
        <CardHeader>
          <CardTitle>SignUp</CardTitle>
          <CardDescription>Signup with this in one click!</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name:</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email:</Label>
                <Input id="name" placeholder="John@doe.in" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Phone:</Label>
                <Input id="name" placeholder="xxxxxxxx89" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password:</Label>
                <Input id="name" placeholder="********" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Confirm Password:</Label>
                <Input id="name" placeholder="********" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="faculty">Faculty</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {/* <Button variant="outline">Cancel</Button> */}
          <Button>SignUp</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
