const url = "https://lab-api-bq.herokuapp.com";

export const createUser = (name, email, password, role) => {
  return fetch(`${url}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: "Burguer Queen",
    }),
  });
};

export const loginUser = (email, password) => {
  return fetch(`${url}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};


/////////////////////////////////////////////////////////////////////////////
//Exemplo de como usar o Hook usestate ↓
// import React, { useState } from 'react';

// const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

// export default function ColorPicker() {
//   const [color, setColor] = useState('Tomato');

//  const divStyle = {backgroundColor: color};

//   return (
//     <div style={divStyle}>
//       <p>Selected color: {color}</p>
//       {colorNames.map((colorName)=>(
//         <button 
//           onClick={() => setColor(colorName)} 
//           key={colorName}>
//        	     {colorName}
//       	</button>
//       ))}
//     </div>
//   );
// }