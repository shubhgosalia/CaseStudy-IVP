import React, { useState } from "react";
import { tableData } from "../../data";

const EquityTable = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;

  const pageCount = Math.ceil(
    tableData.filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.first_name.toLowerCase().includes(search) |
            item.last_name.toLowerCase().includes(search) |
            item["job title"].toLowerCase().includes(search) |
            item.gender.toLowerCase().includes(search) |
            item.email.toLowerCase().includes(search) |
            item["phone number"].toLowerCase().includes(search);
    }).length / recordsPerPage
  );

  const npage = Math.ceil(tableData.length / recordsPerPage);

  const numbers = [...Array(pageCount).keys()].slice(0);

  const prevPage = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const checkEdit=()=>{
       alert("edit button clicked!")
  }

  const checkDelete=()=>{
    alert("delete button clicked!")
}

   const checkView=()=>{
         alert("view button clicked!")
   }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-20 mr-20 mb-5">
      <form className="mb-10">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by any field..."
            required
          />
        </div>
      </form>

      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              First Name
            </th>
            <th scope="col" className="px-6 py-3">
              Last Name
            </th>
            <th scope="col" className="px-6 py-3">
              Job Title
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
            <th scope="col" className="px-6 py-3">
              View 
            </th>
          </tr>
        </thead>

        <tbody>
          {tableData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(search) |
                    item.last_name.toLowerCase().includes(search) |
                    item["job title"].toLowerCase().includes(search) |
                    item.gender.toLowerCase().includes(search) |
                    item.email.toLowerCase().includes(search) |
                    item["phone number"].toLowerCase().includes(search);
            })
            .slice(lastIndex, lastIndex + recordsPerPage)
            .map((item, i) => (
              <tr
                className={` border-b ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-100"
                }`}
              >
                <td className="px-6 py-4"> {item.id}</td>
                <td className="px-6 py-4">{item.first_name}</td>
                <td className="px-6 py-4">{item.last_name}</td>
                <td className="px-6 py-4">{item["job title"]}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.gender}</td>
                <td className="px-6 py-4">{item["phone number"]}</td>
                <td className="py-4">
                    <button onClick={checkEdit}>
                      <svg className="ml-7" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.828 21.754H2.25v-2.579L16.788 4.602l2.614 2.614L4.828 21.754Z"></path>
                        <path d="m19.956 6.656-2.612-2.612 1.484-1.437c.229-.23.58-.357.906-.357a1.214 1.214 0 0 1 .864.357l.797.797a1.213 1.213 0 0 1 .355.862c0 .328-.127.677-.357.907l-1.437 1.483Z"></path>
                     </svg>
                    </button>
                </td>
                <td className="py-4">
                  <button onClick={checkDelete}>
                  <svg className="ml-8" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20.25 4.5h-4.5V3.375A1.875 1.875 0 0 0 13.875 1.5h-3.75A1.875 1.875 0 0 0 8.25 3.375V4.5h-4.5a.75.75 0 0 0 0 1.5h.797l.89 14.293c.067 1.259 1.032 2.207 2.25 2.207h8.625c1.225 0 2.17-.927 2.25-2.203L19.453 6h.797a.75.75 0 1 0 0-1.5Zm-11.223 15H9a.75.75 0 0 1-.75-.723l-.375-10.5a.75.75 0 0 1 1.5-.054l.375 10.5a.75.75 0 0 1-.723.777Zm3.723-.75a.75.75 0 1 1-1.5 0V8.25a.75.75 0 1 1 1.5 0v10.5Zm1.5-14.25h-4.5V3.375A.37.37 0 0 1 10.125 3h3.75a.371.371 0 0 1 .375.375V4.5Zm1.5 14.277a.75.75 0 0 1-.75.723h-.027a.75.75 0 0 1-.723-.777l.375-10.5a.75.75 0 0 1 1.5.054l-.375 10.5Z"></path>
                  </svg>
                  </button>
                </td>
                <td className="py-4">
                  <button onClick={checkView}>
                  <svg className="ml-7" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                    <path d="M18.507 6.618C16.457 5.213 14.264 4.5 11.99 4.5c-2.048 0-4.045.61-5.934 1.804C4.149 7.51 2.28 9.704.75 12c1.238 2.063 2.933 4.183 4.697 5.4 2.024 1.393 4.225 2.1 6.542 2.1 2.297 0 4.493-.706 6.53-2.1 1.792-1.228 3.499-3.346 4.731-5.4-1.237-2.036-2.948-4.151-4.743-5.382ZM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"></path>
                 </svg>
                  </button>
                </td>

              </tr>
            ))}
        </tbody>
      </table>

      <nav className="mt-5 mb-5" aria-label="Page navigation">
        <ul className="inline-flex -space-x-px text-md">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={prevPage}
            >
              Prev
            </a>
          </li>

          {numbers.map((n, i) => (
            <li key={i}>
              <a
                href="#"
                className={` ${
                  currentPage === n ? "text-gray-900 bg-gray-400" : ""
                } flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                onClick={() => changeCurrPage(n)}
              >
                {n}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={nextPage}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default EquityTable;
