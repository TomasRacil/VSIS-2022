import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Popup from './Popup';
//import Dropdown from "./Dropdown";

const Registration = () => {
  const routes = [
    { label: "Vyber trasu", value: "" },
    { label: "Trasa A (25 Km)", value: true },
    { label: "Trasa B (38 Km)", value: false },
  ];
  const foods = [
    { label: "Vyber jídlo", value: "" },
    { label: "Řízek + salát", value: true },
    { label: "Guláš, chléb", value: false },
  ];
  const shirts = [
    { label: "Vyber velikost trika", value: "" },
    { label: "S", value: 1 },
    { label: "M", value: 2 },
    { label: "L", value: 3 },
    { label: "XL", value: 4 },
  ];
  // const [route, setRoute] = useState("B");
  // const handleRouteChange = (event) => {
  //   setRoute(event.target.value);
  // };

  const [formValues, setformValues] = useState({
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
    setformValues({ ...formValues, [name]: value });
  };
   
  function changeNaming() {
    const person = {
      first_name: formValues.Firstname,
      last_name: formValues.Lastname,
      club_name: formValues.ClubName,
      email: formValues.Email,
      route: formValues.Route === "true",
      food: formValues.Food === "true",
      birth_date: formValues.DOB,
      shirt: Number(formValues.Shirt),
    };
    return person;
  }

  
  function submitForm() {
    console.log(formValues);
  }
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => { setIsOpen(!isOpen) };
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState (false);
  const [buttontext, setButtonText] = useState('Odeslat');
  var chyba = false;

  useEffect (() => {
    console.log(formErrors);
    if (Object.keys(formErrors).lenght === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.Firstname) {
      errors.Firstname = "Jméno je vyžadováno!";
      chyba = true;
    }
    if(!values.Lastname) {
      errors.Lastname = "Přijmení je vyžadováno!";
      chyba = true;
    }
    if(!values.Email) {
      errors.Email = "Email je vyžadován!";
      chyba = true;
     }
    if(!values.ClubName) {
      errors.ClubName = "Jméno klubu je vyžadováno!";
      chyba = true;
    }
    return errors;
    
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
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
        if (chyba = false) {
        console.log("New user added", res);
        setTimeout(() => {setButtonText('Odesláno')}, 2000); 
        setButtonText('Odesílám...');
        }
      // setIsPending(false);
      // history.push("/");
    });
  };

  return (
    <Form>
      <Form.Group>
        <h1>REGISTRACE DO ZÁVODU TOUR DE KOSOVA</h1>
      </Form.Group>
      {/* {values.Route} */}
      <br />
      <Form.Group>
      <Form.Label><h3>Základní údaje</h3></Form.Label>
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          name="Firstname"
          placeholder="Jméno"
          required
          value={formValues.Firstname}
          onChange={handleChange}
        />
      </Form.Group>
      <p>{formErrors.Firstname}</p>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          name="Lastname"
          required
          placeholder="Přijmení"
          value={formValues.Lastname}
          onChange={handleChange}
        />
      </Form.Group>
      <p>{formErrors.Lastname}</p>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control
          type="date"
          name="DOB"
          placeholder="Datum Narození"
          value={formValues.DOB}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          name="Email"
          placeholder="e-mailová adresa"
          value={formValues.Email}
          onChange={handleChange}
        />
      </Form.Group>
      <p>{formErrors.Email}</p>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          name="ClubName"
          placeholder="název klubu (volitelné)"
          value={formValues.ClubName}
          onChange={handleChange}
        />
      </Form.Group>
      <p>{formErrors.ClubName}</p>
      <Form.Group>
      <Form.Label><h3>Výběr trasy, jídla a trička</h3></Form.Label>
        <Form.Select name="Route" onChange={handleChange} value={formValues.Route}>
          {routes.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group>
      <Form.Label></Form.Label>
        <Form.Select name="Food" onChange={handleChange} value={formValues.Food}>
          {foods.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </Form.Select>
        {/* {values.Food} */}
      </Form.Group>
      <Form.Label></Form.Label>
      <Form.Group>
        <Form.Select name="Shirt" onChange={handleChange} value={formValues.Shirt}>
          {shirts.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </Form.Select>
        {/* {values.Shirt} */}
      </Form.Group>
      <Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          {buttontext}
        </Button>
      </Form.Group>
      <Form.Group>
      <input
      type="button"
      value="Testovací Pop-up okno"
      onClick={togglePopup}
    />
    {isOpen && <Popup
      content={<>
        <b>CHYBA</b>
        <p>Nevyplnili jste všechna povinná pole registračního formuláře. </p>
        <button>zavřít</button>
      </>}
      handleClose={togglePopup}
    />}
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
