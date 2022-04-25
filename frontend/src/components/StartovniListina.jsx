import { useMemo, useEffect, useState } from "react";
import { SelectColumnFilter } from "./Table";

const StartovniListina = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [persons, setPersons] = useState();

  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Trasa",
      accessor: "trasa",
    },
    {
      Header: "Zaplaceno",
      accessor: "zaplaceno",
      Filter: SelectColumnFilter,
      filter: "includes",
    },
  ]);

  useEffect(() => {
    const abortControler = new AbortController();

    setTimeout(() => {
      fetch("/_api/person/")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that source");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setPersons(data.data);
          //setOsoby(data.data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            console.log(err.message);
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 3000);

    return () => abortControler.abort();
  }, []);

  const data = useMemo(() => getData(), []);

  return (
    <>
      <h1>Startovní listina závodu</h1>
      {error}
      {isPending}
      {persons && (
        <div>
          {persons.map((person) => (
            <div key={person.id}>
              <h3>{person.first_name}</h3>
              <h3>{person.last_name}</h3>
              <h3>{person.club_name}</h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const getData = () => [
  {
    name: "Jeník Kubalek",
    email: "jan.kubalek@unob.cz",
    title: "Microtuss",
    department: "UNOB",
    status: "Zaplaceno",
    Trasa: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    title: "Product Directives Officer",
    department: "Intranet",
    status: "Active",
    Trasa: "Owner",
    imgUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Forward Response Developer",
    department: "Directives",
    status: "Active",
    Trasa: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    title: "Central Security Manager",
    department: "Program",
    status: "Active",
    Trasa: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    title: "Lean Implementation Liaison",
    department: "Mobility",
    status: "Active",
    Trasa: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    Trasa: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];
export default StartovniListina;
