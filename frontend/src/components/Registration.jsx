import { useState } from "react";
import { Form, Button } from "react-bootstrap";
//import Dropdown from "./Dropdown";

const Registration = () => {
  const routes = [
    { label: "Trasa", value: "" },
    { label: "Trasa A (25 Km)", value: true },
    { label: "Trasa B (38 Km)", value: false },
  ];
  const foods = [
    { label: "Jídlo", value: "" },
    { label: "Řízek + salát", value: true },
    { label: "Guláš, chléb", value: false },
  ];
  const shirts = [
    { label: "Velikost trika", value: "" },
    { label: "S", value: 1 },
    { label: "M", value: 2 },
    { label: "L", value: 3 },
    { label: "XL", value: 4 },
  ];
  // const [route, setRoute] = useState("B");
  // const handleRouteChange = (event) => {
  //   setRoute(event.target.value);
  // };

  const [values, setValues] = useState({
    Route: " ",
    Firstname: "",
    Lastname: "",
    DOB: "",
    Email: "",
    Shirt: "",
    Food: "",
    ClubName: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  function changeNaming() {
    const person = {
      first_name: values.Firstname,
      last_name: values.Lastname,
      club_name: values.ClubName,
      email: values.Email,
      route: values.Route === "true",
      food: values.Food === "true",
      birth_date: values.DOB,
      shirt: Number(values.Shirt),
    };
    return person;
  }

  function submitForm() {
    console.log(values);
    // fetch("/_api/person/")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => console.log(data));
  }

  const handleSubmit = () => {
    // e.preventDefault();
    // const user = { email, username, password };

    // setIsPending(true);
    const person = changeNaming();
    fetch("/_api/person/", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
      body: JSON.stringify(person),
    }).then((res) => {
      console.log("New user added", res);
      // setIsPending(false);
      // history.push("/");
    });
  };

  return (
    <Form>
      <Form.Group>
        <h1>REGISTRACE DO ZÁVODU TOUR DE KOSOVA</h1>
        <Form.Label>Varianta závodu</Form.Label>
        <Form.Select name="Route" onChange={handleChange} value={values.Route}>
          {routes.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </Form.Select>
      </Form.Group>
      {/* {values.Route} */}
      <br />
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          name="Firstname"
          placeholder="Jméno"
          value={values.Firstname}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          name="Lastname"
          placeholder="Přijmení"
          value={values.Lastname}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control
          type="date"
          name="DOB"
          placeholder="Datum Narození"
          value={values.DOB}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          name="Email"
          placeholder="e-mailová adresa"
          value={values.Email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          name="ClubName"
          placeholder="název klubu (volitelné)"
          value={values.ClubName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Label></Form.Label>
      <Form.Group>
        <Form.Select name="Food" onChange={handleChange} value={values.Food}>
          {foods.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </Form.Select>
        {/* {values.Food} */}
      </Form.Group>
      <Form.Label></Form.Label>
      <Form.Group>
        <Form.Select name="Shirt" onChange={handleChange} value={values.Shirt}>
          {shirts.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </Form.Select>
        {/* {values.Shirt} */}
      </Form.Group>
      <Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Odeslat
        </Button>
      </Form.Group>
    </Form>
  );

  // <div className="regitration_form">
  //   <div>
  //     <h1>REGISTRACE DO ZÁVODU TOUR DE KOSOVA</h1>
  //   </div>
  //   <div className="messages">{console.log("chybove zpravy")}</div>
  //   <form>
  //     <label className="label">
  //       Varianta závodu
  //       <select
  //         className="dropdown"
  //         value={route}
  //         onChange={handleRouteChange}
  //       >
  //         {routes.map((route) => (
  //           <option value={route.value}>{route.label}</option>
  //         ))}
  //       </select>
  //     </label>
  //     <label className="label">Jméno</label>
  //     <input
  //       className="input"
  //       type="text"
  //       value={firstName}
  //       onChange={handleFirstNameChange}
  //     />
  //     <label className="label">Příjmení</label>
  //     <input
  //       className="input"
  //       type="text"
  //       value={surname}
  //       onChange={handleSurnameChange}
  //     />
  //     <label className="label">Email</label>
  //     <input className="input" type="email" />
  //     <label className="label">Datum narození</label>
  //     <input className="input" type="date" />
  //     <Dropdown
  //       label="Pohlaví"
  //       options={genders}
  //       value={gender}
  //       onChange={handleGenderChange}
  //     />
  //     Vybraná trasa: {route}
  //     Jméno: {firstName}
  //     Prijmeni: {surname}
  //     Pohlaví: {gender}
  //   </form>
  // </div>
};

export default Registration;

// const Registrace = () => {
//     return (
//       <nav className="registrace">
//         <h1>Tour de Kosova</h1>
//           Jmeno
//           Prijmeni
//           Vek
//           Pohlavi
//           Email

//           <thead>
//                 <tr>
//                     <th>Jmeno</th>
//                     <th>Prijmeni</th>
//                     <th>Vek</th>
//                     <th>Pohlavi</th>
//                     <th>Email</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>xxx</td>
//                     <td>yyy</td>
//                     <td>25</td>
//                     <td>Man</td>
//                     <td>xxx.yyy@unob.cz</td>
//                 </tr>
//             </tbody>
//       </nav>

//     );
//   };

//   export default Registrace;
