import React, {useState} from 'react';
import EditEquity from './EditEquity';


const EquityRow = ({item,i}) => {
    const [showEditModal, setshowEditModal] = useState(false);

  return (
        <tr className={` border-b ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-100"
                }`}
              >
                <td className="px-6 py-4"> {item.security_name}</td>
                <td className="px-6 py-4">{item.security_desc}</td>
                <td className="px-6 py-4">{item.curr}</td>
                <td className="px-6 py-4">{item.tot_shares_out}</td>
                <td className="px-6 py-4">{item.open_price}</td>
                <td className="px-6 py-4">{item.close_price}</td>
                <td className="px-6 py-4">{item.div_date}</td>
                <td className="px-6 py-4">{item.pf_rating}</td>

                <td className="py-4">
                  <button onClick={()=>setshowEditModal(true)}>
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
                   {showEditModal && <EditEquity  item={item} closeModal={setshowEditModal}/>}
                </td>
                <td className="py-4">
                  <button>
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
                  <button>
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
                </td>
              </tr>
  );
}

export default EquityRow;
