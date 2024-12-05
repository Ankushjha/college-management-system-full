import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown, Loader, MoreVertical, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

export default function User() {
  const navigate = useNavigate();
  const { users } = useOutletContext(); // Get the users prop from the context

  const [data, setData] = useState(users);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      setData(users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [users]);

  // Handle sorting
  const handleSort = (key) => {
    let direction = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      // Special handling for name since it's composed of firstName and lastName
      if (key === "name") {
        const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
        const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
        return direction === "asc"
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      }

      // Normal sorting for other fields
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  // Search function
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearch(term)
    
    const filteredData = users.filter(item => 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(term)
      )
    )
    setData(filteredData)
  }

  return (
    <section className="w-5/6 mx-auto mt-10">
      <div className="flex justify-end w-full mb-5">
        <div className="relative w-full max-w-sm ">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search user..."
            className="pl-10 w-full"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Button
                variant="ghost"
                className="flex items-center gap-2"
                onClick={() => handleSort("id")}
              >
                ID
                <ArrowUpDown size={24} />
              </Button>
            </TableHead>

            <TableHead>
              <Button
                variant="ghost"
                className="flex items-center gap-2"
                onClick={() => handleSort("name")}
              >
                Name
                <ArrowUpDown size={24} />
              </Button>
            </TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        {loading ? (
          <TableBody>
            <TableRow>
              <TableCell cellSpacing="5" className="text-center">
                <Loader />
              </TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            {data.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <span className="ps-4">{user.id}</span>
                </TableCell>
                <TableCell>
                  <span className="ps-4">{`${user.firstName} ${user.lastName}`}</span>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost">
                        <MoreVertical size={24} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {/* <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator /> */}
                      <DropdownMenuItem>
                        <Link to={"profile"}>View</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </section>
  );
}
