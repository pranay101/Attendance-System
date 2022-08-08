import axios from "axios";
import React, { useEffect, useState } from "react";


const Account = () => {
  const [data, setdata] = useState();
  const user = {name: "Srishti"}
  useEffect(() => {
    console.log(user.id);
    axios
      .get(`/api/v1/seller/${user.id}`)
      .then((response) => {
        setdata(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let nameOfField = `text-base text-gray-600`;
  let valueOfTheField = `text-lg text-gray-800 mb-5`;
  return (
    <div>
      <h1 className="text-4xl text-gray-700 text-center my-5">
        Seller Details
      </h1>
      <div className="px-8">
        <p className={nameOfField}>Aadhar</p>
        <p className={valueOfTheField}>{data?.Aadhar}</p>

        <p className={nameOfField}>GSTIN</p>
        <p className={valueOfTheField}>{data?.GSTIN}</p>

        <p className={nameOfField}>PAN</p>
        <p className={valueOfTheField}>{data?.PAN}</p>

        <p className={nameOfField}>companyName</p>
        <p className={valueOfTheField}>{data?.companyName}</p>

        <p className={nameOfField}>email</p>
        <p className={valueOfTheField}>{data?.email}</p>

        <p className={nameOfField}>name</p>
        <p className={valueOfTheField}>{data?.name}</p>

        <p className={nameOfField}>phoneNo</p>
        <p className={valueOfTheField}>{data?.phoneNo}</p>

        <p className={nameOfField}>tradeLicense</p>
        <p className={valueOfTheField}>{data?.tradeLicense}</p>
      </div>
      <div></div>
    </div>
  );
};

export default Account;
