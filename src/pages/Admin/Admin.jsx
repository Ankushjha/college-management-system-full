import CollapsibleSidebar from "@/components/Admin/CollapsibleSidebar";
import Navbar from "@/components/Admin/Navbar";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import DataTable from "@/components/Admin/DataTable";
import { Outlet } from "react-router-dom";
import Dashboard from "@/components/Admin/Dashboard";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setUser(response.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchUser();
  }, []);

  const users = user?.users[0] || [];
  // console.log(users);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <section className="sidebar">
        <CollapsibleSidebar isOpen={isOpen} handleMenu={handleMenu} />
      </section>

      <section
        className={`content transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-16"
        }`}
      >
        <Navbar
          userImage={users?.image}
          userName={users?.firstName}
          role={users?.role}
        />

        <Outlet context={{ users }} />

        {/* <Dashboard userCardData={userCardData} /> */}

        {/* <section className="flex flex-wrap px-5 gap-5 justify-center mt-24">
          {userCardData.map((data, index) => (
            <div key={index} className="">
              <AdminCard title={data.title} description={data.description} />
            </div>
          ))} */}

        {/* <DataTable /> */}
        {/* </section> */}
      </section>
    </div>
  );
}
