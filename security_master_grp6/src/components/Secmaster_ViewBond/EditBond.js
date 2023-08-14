import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const EditBond = ({ item, closeModal }) => {
  const [isFormChanged, setIsFormChanged] = useState(false);

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [details, setDetails] = useState({
    description: item.Security_Description,
    coupon: item.Coupon,
    callable_flag: item.Callable_Flag,
    maturity: formatDate(item.Maturity),
    pen_coupon_date: formatDate(item.Penultimate_Coupon_Date),
    pf_rating: item.PF_Credit_Rating,
    ask_price: item.Ask_Price,
    bid_price: item.Bid_Price,

  });

  useEffect(() => {
    const isAnyFieldChanged =
      details.description !== item.Security_Description ||
      details.coupon !== item.Coupon ||
      details.callable_flag !== item.Callable_Flag ||
      details.maturity !== item.Maturity ||
      details.pen_coupon_date !== item.Penultimate_Coupon_Date ||
      details.pf_rating !== formatDate(item.PF_Credit_Rating) ||
      details.ask_price !== item.Ask_Price||
      details.bid_price !== item.Bid_Price;

    setIsFormChanged(isAnyFieldChanged);
  }, [details, item]);

  const [validationErrors, setValidationErrors] = useState({
    coupon: "",
    ask_price: "",
    bid_price: "",
  });

  const handleCouponChange = (e) => {
    const newValue = e.target.value;
    if (!isNaN(newValue) && newValue >= 0) {
      setDetails({ ...details, coupon: newValue });
      setValidationErrors({ ...validationErrors, coupon: "" });
    } else {
      setValidationErrors({
        ...validationErrors,
        coupon: "Coupon must be a non-negative number.",
      });
    }
  };

  const handleAskPriceChange = (e) => {
    const newValue = e.target.value;
    if (!isNaN(newValue) && newValue >= 0) {
      setDetails({ ...details, ask_price: newValue });
      setValidationErrors({ ...validationErrors, ask_price: "" });
    } else {
      setValidationErrors({
        ...validationErrors,
        ask_price: "Open price must be a non-negative number.",
      });
    }
  };

  const handleBidPriceChange = (e) => {
    const newValue = e.target.value;
    if (!isNaN(newValue) && newValue >= 0) {
      setDetails({ ...details, bid_price: newValue });
      setValidationErrors({ ...validationErrors, bid_price: "" });
    } else {
      setValidationErrors({
        ...validationErrors,
        bid_price: "Close price must be a non-negative number.",
      });
    }
  };

  
  const editSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      Security_Description: details.description,
      Coupon: details.coupon,
      Callable_Flag: details.callable_flag,
      Maturity: details.maturity,
      Penultimate_Coupon_Date: details.pen_coupon_date,
      PF_Credit_Rating: details.pf_rating,
      Ask_Price: details.ask_price,
      Bid_Price: details.bid_price,
    };

    try {
      const response = await axios.put(
        `http://localhost:53388/api/bonds/${item.Security_ID}`,
        updatedData
      );

      if (response.status === 200) {
        console.log("Updated Data:",updatedData)
        console.log("Response:",response)
        console.log("Response data",response.data)
        console.log('Update successful!');
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Changes have been updated successfully!',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        }).then(() => {
          closeModal(false);
          window.location.reload();
        });
      } else {
        console.error('Update failed. Response status:', response.status);
      }
    } catch (error) {
      console.error('Error updating equity:', error);
      console.log('Error response:', error.response);
    }
  };

  const getPfRatingOptions = () => {
    return ["AA+", "A-", "AA-", "A", "AA", "BBB+", "BBB"].map((rating) => (
      <option key={rating} value={rating}>
        {rating}
      </option>
    ));
  };

  const getCallableFlagOptions = () => {
    return [
      "Yes",
      "No",
    ].map((call) => (
      <option key={call} value={call}>
        {call}
      </option>
    ));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="overflow-auto max-h-[80vh]">
        <div className="bg-white p-2" style={{ width: 500 }}>
          <button
            className="ml-2 font-medium text-xl"
            onClick={() => closeModal(false)}
          >
            X
          </button>
          <h1 className="font-semibold text-center text-xl text-gray-700 mt-3 mb-3">
            Edit Bond Details
          </h1>
          <form onSubmit={editSubmit}>
            <div className="flex flex-col">
              <label className="ml-5 text-md font-medium mb-1" for="sec_name">
                Bond Name
              </label>
              <input
                type="text"
                id="sec_name"
                disabled={true}
                value={item.Security_Name}
                className="border border-gray-700 p-2 rounded mb-5 ml-5 mr-5"
              />

              <label className="ml-5 text-md font-medium mb-1" for="desc">
                Description
              </label>
              <input
                type="text"
                id="desc"
                value={details.description}
                onChange={(e) =>
                  setDetails({ ...details, description: e.target.value })
                }
                className="border border-gray-700 p-2 rounded mb-5 ml-5 mr-5"
              />

              <label className="ml-5 text-md font-medium mb-1" for="coupon">
                Coupon
              </label>
              <input
                type="text"
                id="coupon"
                value={details.coupon}
                onChange={handleCouponChange}
                className={`border border-gray-700 p-2 rounded mb-5 ml-5 mr-5 ${
                  validationErrors.coupon ? "border-red-500" : ""
                }`}
              />

              {validationErrors.coupon && (
                <p className="text-red-500 ml-5">
                  {validationErrors.coupon}
                </p>
              )}

               <label className="ml-5 text-md font-medium mb-1" for="callable_flag">
                Callable Flag
              </label>
              <select
                className="border border-gray-700 p-2 rounded mb-5 ml-5 mr-5"
                value={details.currency}
                id="callable_flag"
                onChange={(e) =>
                  setDetails({ ...details, callable_flag: e.target.value })
                }
              >
                {getCallableFlagOptions()}
              </select> 


             <label className="ml-5 text-md font-medium mb-1" for="maturity">
                Maturity
              </label>
              <input
                type="date"
                id="maturity"
                disabled={true}
                value={details.maturity}
                onChange={(e) =>
                  setDetails({ ...details, maturity: e.target.value })
                }
                className="border border-gray-700 p-2 rounded mb-5 ml-5 mr-5"
              />

            <label className="ml-5 text-md font-medium mb-1" for="pen_date">
                Penultimate Coupon Date
              </label>
              <input
                type="date"
                id="pen_date"
                value={details.pen_coupon_date}
                onChange={(e) =>
                  setDetails({ ...details, pen_coupon_date: e.target.value })
                }
                className="border border-gray-700 p-2 rounded mb-5 ml-5 mr-5"
              />

              <label className="ml-5 text-md font-medium mb-1" for="pf_rating">
                PF Credit Rating
              </label>
              <select
                className="border border-gray-700 p-2 rounded mb-5 ml-5 mr-5"
                value={details.pf_rating}
                id="pf_rating"
                onChange={(e) =>
                  setDetails({ ...details, pf_rating: e.target.value })
                }
              >
                {getPfRatingOptions()}
              </select>
            </div>
             
            <div className="flex flex-row">
    <div className="flex flex-col w-1/2">
      <label className="ml-5 text-md font-medium mb-1" htmlFor="ask_price">
        Ask Price
      </label>
      <input
        type="text"
        id="ask_price"
        value={details.ask_price}
        onChange={handleAskPriceChange}
        className={`border border-gray-700 p-2 rounded mb-5 ml-5 mr-2 ${
          validationErrors.ask_price ? "border-red-500" : ""
        }`}
      />
      {validationErrors.ask_price && (
        <p className="text-red-500 ml-5">{validationErrors.ask_price}</p>
      )}
    </div>

    <div className="flex flex-col w-1/2">
      <label className="ml-2 text-md font-medium mb-1" htmlFor="bid_price">
        Bid Price
      </label>
      <input
        type="text"
        id="bid_price"
        value={details.bid_price}
        onChange={handleBidPriceChange}
        className={`border border-gray-700 p-2 rounded mb-5 ml-2 mr-5 ${
          validationErrors.bid_price ? "border-red-500" : ""
        }`}
      />
      {validationErrors.bid_price && (
        <p className="text-red-500 ml-2">{validationErrors.bid_price}</p>
      )}
    </div>
  </div>


              {/* <label className="ml-5 text-md font-medium mb-1" for="ask_price">
                Ask Price
              </label>
              <input
                type="text"
                id="ask_price"
                value={details.ask_price}
                onChange={handleAskPriceChange}
                className={`border border-gray-700 p-2 rounded mb-5 ml-5 mr-5 ${
                  validationErrors.ask_price ? "border-red-500" : ""
                }`}
              />

              {validationErrors.ask_price && (
                <p className="text-red-500 ml-5">
                  {validationErrors.ask_price}
                </p>
              )}

              <label className="ml-5 text-md font-medium mb-1" for="bid_price">
                Bid Price
              </label>
              <input
                type="text"
                id="bid_price"
                value={details.bid_price}
                onChange={handleBidPriceChange}
                className={`border border-gray-700 p-2 rounded mb-5 ml-5 mr-5 ${
                  validationErrors.bid_price ? "border-red-500" : ""
                }`}
              />

              {validationErrors.bid_price && (
                <p className="text-red-500 ml-5">
                  {validationErrors.bid_price}
                </p>
              )}
 */}

            <div className="text-center">
              <button
                type="submit"
                className={`px-5 py-2 ${
                  isFormChanged
                    ? "bg-green-700 text-white"
                    : "bg-gray-300 text-gray-500"
                } rounded`}
                disabled={!isFormChanged}
              >
                Edit
              </button>
              <button
                onClick={() => closeModal(false)}
                className="px-5 py-2 ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBond;
