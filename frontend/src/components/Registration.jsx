import { useState } from "react";
import { Form } from "react-bootstrap";
import Dropdown from "./Dropdown";

const Registration = () => {
  const routes = [
    { label: "Trasa A", value: "A" },
    { label: "Trasa B", value: "B" },
  ];
  const [route, setRoute] = useState("A");
  const handleRouteChange = (event) => {
    setRoute(event.target.value);
  };

  const [values, setValues] = useState({
    Route: "A",
    Firstname: "",
    Lastname: "",
    DOB: "",
    Email: "",
    Gender: "",
    Food: "",
    ClubName: "",
    StateOfPayment: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Form.Group>
      <h1>REGISTRACE DO ZÁVODU TOUR DE KOSOVA</h1>
      <Form.Label>Varianta závodu</Form.Label>
      <Form.Select onChange={handleRouteChange}>
        {routes.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </Form.Select>
      {route}
      <Form.Control
        type="text"
        name="Firstname"
        placeholder="Firstname"
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
