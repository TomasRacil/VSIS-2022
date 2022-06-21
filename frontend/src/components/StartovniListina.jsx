import { useEffect, useState } from "react";
import Table, { SelectColumnFilter } from "./Table";

const StartovniListina = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [persons, setPersons] = useState();

  const columns = [
    {
      Header: "Jméno",
      accessor: "first_name",
      Filter: SelectColumnFilter,
      filter: "include",
    },
    {
      Header: "Příjmení",
      accessor: "last_name",
      Filter: SelectColumnFilter,
      filter: "include",
    },
    {
      Header: "Klub",
      accessor: "club_name",
      Filter: SelectColumnFilter,
      filter: "include",
    },
    {
      Header: "Datum narození",
      accessor: "birth_date",
    },
    {
      Header: "E-mail",
      accessor: "email",
    },
  ];

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
            //console.log("fetch aborted");
          } else {
            console.log(err.message);
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 3000);

    return () => abortControler.abort();
  }, []);

  // const data = useMemo(() => getData(), []);

  return (
    <>
      <h1>Startovní listina závodu</h1>
      {/* {error}
      {isPending}
      {persons && (
        <div>
          {persons.map((person) => (
            <div key={person.id}>
              <h3>{person.first_name}</h3>
              <h3>{person.last_name}</h3>
              <h3>{person.club_name}</h3>
              <h3>{person.birth_date}</h3>
              <h3>{person.route}</h3>
            </div>
          ))}
        </div>
      )} */}
      {persons && <Table columns={columns} data={persons} />}
    </>
  );
};

// const getData = () => {
//   fetch("/_api/person/")
//     .then((res) => {
//       if (!res.ok) {
//         throw Error("could not fetch the data for that source");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.data);
//       return data.data;
//     });
// };
export default StartovniListina;
