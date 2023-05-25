// import React, { useState } from 'react';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';

// export default function ToggleButtonExample() {
  
//   const [radioValue, setRadioValue] = useState('1');

//   const radios = [
//     { name: 'New', value: '1' },
//     { name: 'In Progress', value: '2' },
//     { name: 'completed', value: '3' },
//     { name: 'Rejected', value: '3' },
    
//   ];

//   return (
//     <>
     
//       <ButtonGroup>
//         {radios.map((radio, idx) => (
//           <ToggleButton
//             key={idx}
//             id={`radio-${idx}`}
//             type="radio"
//             variant={idx % 2 ? 'outline-success' : 'outline-danger'}
//             name="radio"
//             value={radio.value}
//             checked={radioValue === radio.value}
//             onChange={(e) => setRadioValue(e.currentTarget.value)}
//           >
//             {radio.name}
//           </ToggleButton>
//         ))}
//       </ButtonGroup>
//     </>
//   );
// }

import React from 'react'

export default function ModuleRedioButton() {
  return (
    
<select className="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected></option>
  <option value="1">New</option>
  <option value="2">In Progress</option>
  <option value="3">completed</option>
  <option value="3">Rejected</option>
</select>
  )
}
