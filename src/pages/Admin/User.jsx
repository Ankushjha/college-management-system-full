import { Button } from "@/components/ui/button";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpDown } from "lucide-react";
import React from "react";
import { useOutletContext } from "react-router-dom";

export default function User() {
  const { users } = useOutletContext(); // Get the users prop from the context

  console.log(users);
  return (
    <section className="flex justify-center w-full">
      <div className="w-4/5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button variant="ghost" className="flex items-center gap-2">
                  ID
                  <ArrowUpDown size={24} />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>
    </section>
  );
}
