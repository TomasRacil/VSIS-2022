import { useState } from "react";
import { Form } from "react-bootstrap";
import Dropdown from "./Dropdown";

const Registration = () => {
  const routes = [
    { label: "Trasa", value: "Z" },
    { label: "Trasa A (25 Km)", value: "A" },
    { label: "Trasa B (38 Km)", value: "B" },
  ];
  const foods = [
    { label: "Jídlo", value: "Z" },
      { label: "Řízek + salát", value: "C" },
      { label: "Guláš, chléb", value: "D" },
    ];
    const shirts = [
      { label: "Velikost trika", value: "Z" },
      { label: "S", value: "E" },
      { label: "M", value: "F" },
      { label: "L", value: "G" },
      { label: "XL", value: "H" },
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
          type="text"
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
          placeholder="e-mail"
          value={values.Email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          name="ClubName"
          placeholder="Klub"
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
