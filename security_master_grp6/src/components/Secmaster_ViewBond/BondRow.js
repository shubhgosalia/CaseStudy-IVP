import React, { useState,useEffect } from "react";
import axios from "axios"
import EyeBond from "./EyeBond";
import EditBond from "./EditBond";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";


const BondRow = ({ item, i }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  const[idClick,setIdClick]=useState()

  
  const deleteHandler = (securityId) => {
    Swal.fire({
      title: 'Confirm Deletion',
      text: 'Are you sure you want to delete this record?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setIdClick(securityId);
      }
    });
  }

  useEffect(() => {
    if (idClick !== null) {
      axios.delete(`http://localhost:53388/api/bonds/${idClick}`)
        .then(response => {
          console.log(response);
          console.log(response.data);
          console.log("Security deleted!");

          Swal.fire({
            title: 'Deleted!',
            text: 'The record has been successfully deleted.',
            icon: 'success'
          }).then(()=>{
               window.location.reload();
          });
        })
        .catch(error => {
          console.log(error);
        });
      
      setIdClick(null);
    }
  }, [idClick]);

  return (
    <tr key={item.Security_ID} className={` border-b ${i % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
      <td className="px-6 py-4"> {item.Security_Name}</td>
      <td className="px-6 py-4">{item.Security_Description}</td>
      <td className="px-6 py-4">{item.Coupon}</td>
      <td className="px-6 py-4">{item.Callable_Flag}</td>
      <td className="px-6 py-4">{item.Maturity}</td>
      <td className="px-6 py-4">{item.Penultimate_Coupon_Date}</td>
      <td className="px-6 py-4">{item.PF_Credit_Rating}</td>
      <td className="px-6 py-4">{item.Ask_Price}</td>
      <td className="px-6 py-4">{item.Bid_Price}</td>


      <td className="py-4">
        <button onClick={() => setShowEditModal(true)}>
          <svg
            className="ml-7"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.828 21.754H2.25v-2.579L16.788 4.602l2.614 2.614L4.828 21.754Z"></path>
            <path d="m19.956 6.656-2.612-2.612 1.484-1.437c.229-.23.58-.357.906-.357a1.214 1.214 0 0 1 .864.357l.797.797a1.213 1.213 0 0 1 .355.862c0 .328-.127.677-.357.907l-1.437 1.483Z"></path>
          </svg>
        </button>
        {showEditModal && (
          <EditBond item={item} closeModal={() => setShowEditModal(false)} />
        )}
      </td>
      <td className="py-4">
        <button onClick={() => deleteHandler(item.Security_ID)}>
          <svg
            className="ml-8"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.25 4.5h-4.5V3.375A1.875 1.875 0 0 0 13.875 1.5h-3.75A1.875 1.875 0 0 0 8.25 3.375V4.5h-4.5a.75.75 0 0 0 0 1.5h.797l.89 14.293c.067 1.259 1.032 2.207 2.25 2.207h8.625c1.225 0 2.17-.927 2.25-2.203L19.453 6h.797a.75.75 0 1 0 0-1.5Zm-11.223 15H9a.75.75 0 0 1-.75-.723l-.375-10.5a.75.75 0 0 1 1.5-.054l.375 10.5a.75.75 0 0 1-.723.777Zm3.723-.75a.75.75 0 1 1-1.5 0V8.25a.75.75 0 1 1 1.5 0v10.5Zm1.5-14.25h-4.5V3.375A.37.37 0 0 1 10.125 3h3.75a.371.371 0 0 1 .375.375V4.5Zm1.5 14.277a.75.75 0 0 1-.75.723h-.027a.75.75 0 0 1-.723-.777l.375-10.5a.75.75 0 0 1 1.5.054l-.375 10.5Z"></path>
          </svg>
        </button>
      </td>
      <td className="py-4">
        <button onClick={() => setShowViewModal(true)}>
          <svg
            className="ml-7"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
            <path d="M18.507 6.618C16.457 5.213 14.264 4.5 11.99 4.5c-2.048 0-4.045.61-5.934 1.804C4.149 7.51 2.28 9.704.75 12c1.238 2.063 2.933 4.183 4.697 5.4 2.024 1.393 4.225 2.1 6.542 2.1 2.297 0 4.493-.706 6.53-2.1 1.792-1.228 3.499-3.346 4.731-5.4-1.237-2.036-2.948-4.151-4.743-5.382ZM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"></path>
          </svg>
        </button>
        {showViewModal && (
          <EyeBond item={item} onClose={() => setShowViewModal(false)} />
        )}
      </td>
    </tr>
  );
};

export default BondRow;
