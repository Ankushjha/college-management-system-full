import CollapsibleSidebar from "@/components/Admin/CollapsibleSidebar";
import Navbar from "@/components/Admin/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { Loader } from "lucide-react";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error: ", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const users = user?.users || [];
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
          userImage={users[0]?.image}
          userName={users[0]?.firstName}
          role={users[0]?.role}
        />

        {loading ? (
          <div className="h-screen flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <Outlet context={{ users }} />
        )}

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
