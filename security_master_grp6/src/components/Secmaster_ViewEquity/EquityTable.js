import React, { useState } from "react";
import { tableData } from "../../data";
import ReactPaginate from "react-paginate";
import { Row, Col } from "react-bootstrap";

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

  //   const handlePageChange = ({ selected }) => {
  //     setCurrentPage(selected);
  //   };

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

  return (
    <div
      className="relative overflow-x-auto shadow-md sm:rounded-lg m-20"
      style={{ marginTop: 200 }}
    >
      <form className="mb-10">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700"
                  >
                    Edit
                  </button>
                </td>
                <td className="py-4">
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <nav className="mt-5 mb-5" aria-label="Page navigation">
        <ul class="inline-flex -space-x-px text-sm">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                  currentPage === n ? "text-blue-700 bg-blue-100" : ""
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
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
