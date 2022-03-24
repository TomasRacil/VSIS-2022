import { useState } from "react";
import { Form } from "react-bootstrap";
import Dropdown from "./Dropdown";

const Registration = () => {
  const routes = [
    { label: "Trasa A", value: "A" },
    { label: "Trasa B", value: "B" },
    { label: "Trasa C", value: "C" },
  ];
  // const [route, setRoute] = useState("B");
  // const handleRouteChange = (event) => {
  //   setRoute(event.target.value);
  // };

  const [values, setValues] = useState({
    Route: "A",
    Firstname: "",
    Lastname: "",
    DOB: "",
    Email: "",
    Gender: "",
    Food: "",
    ClubName: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Form.Group>
      <h1>REGISTRACE DO ZÁVODU TOUR DE KOSOVA</h1>
      <Form.Label>Varianta závodu</Form.Label>
      <Form.Select name="Route" onChange={handleChange} value={values.Route}>
        {routes.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </Form.Select>
      {values.Route}
      <br />
      <Form.Label>Křestní jméno</Form.Label>
      <Form.Control
        type="text"
        name="Firstname"
        placeholder="Pepa"
        value={values.Firstname}
        onChange={handleChange}
      />
      {values.Firstname}
    </Form.Group>
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
  );
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
