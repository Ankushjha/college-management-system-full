import React from "react";
import { AdminCard } from "./AdminCard";
import { useOutletContext } from "react-router-dom";

export default function Dashboard() {
  const { users } = useOutletContext(); // Get the users prop from the context

//   console.log(users);

  const userCardData = [
    {
      title: "total student",
      description: users?.age,
    },
    {
      title: "text 2",
      description: users?.bloodGroup,
    },
    {
      title: "text 3",
      description: users?.height,
    },
    {
      title: "text 4",
      description: users?.weight,
    },
    {
      title: "text 5",
      description: users?.age,
    },
    {
      title: "text 6",
      description: users?.ssn,
    },
  ];
  return (
    <section className="flex flex-wrap px-5 gap-5 justify-center mt-24">
      {userCardData.map((data, index) => (
        <div key={index} className="">
          <AdminCard title={data.title} description={data.description} />
        </div>
      ))}
    </section>
  );
}
