// import MUIDataTable from "@mui-datatables";
// import axios from 'axios';
// import { useState, useEffect } from 'react';


// export default function DataTable() {


//     const [medical, setMedical] = useState([])

//     const url = "http://localhost:8080/medicals/";

// const getData = async () => {
//     await axios.get(url).then((response) =>{
//         const data = response.data
//         setMedical(data)
//     })
// }


// useEffect(()=>{
//     getData()
// }, [])


// const columns = [
//     {
//     name: "sintomas",
//     label: "Síntomas y signos"
//     },
//     {
//     name: "farmacos",
//     label: "Fármacos"
//     },
//     {
//     name: "citas",
//     label: "Citas médicas" 
//     },

   
// ]


// const options = {
  
// };

//   return (
// <div>
// <MUIDataTable title={"Mi expediente"}
//   data={medical}
//   columns={columns}
//   options={options}/>
// </div>

//   )
// }
