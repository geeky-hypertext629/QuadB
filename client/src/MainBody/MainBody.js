import React, { useEffect,useState } from "react";
import task1Image from "./../images/TaskImg1.png";
import task2Image from "./../images/TaskImg2.png";
import { Table } from "react-bootstrap";
import axios from "axios";

export const MainBody = () => {
    const [cryptoData, setcryptoData] = useState()
    useEffect(()=>{
        async function fetchData() {
        try {
            const {data} = await axios.get("https://quadbtech-uc6c.onrender.com/");
            let temp = data.arrayOfData;
            setcryptoData(temp);
            console.log(cryptoData);
        } 
        catch (error) {
            console.log(`Something went wrong ${error.message}`);
          
        }
    }
    fetchData();
    },[])


  let width = window.innerWidth;
  return (
    <div className="bg-dark" style={{ fontFamily: "sans-serif" }}>
      <div>
      <a href="https://finstreet.in/courses/">
        <img src={task1Image} className="p-3" width={width-20} alt="error" />
      </a>
    </div>
      <div className="table-responsive">
      <Table striped bordered hover variant="dark">
     
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Platform</th>
              <th scope="col">Last Traded Price</th>
              <th scope="col">Buy / Sell Price</th>
              <th scope="col">Difference</th>
              <th scope="col">Savings</th>
            </tr>
          </thead>
          <tbody>
          {cryptoData && cryptoData.map((dataItem,key)=>{
            return  <tr>
              <td scope="row">{key+1}</td>
              <td>{dataItem.name}</td>
              <td>₹ {dataItem.last}</td>
              <td>₹ {dataItem.buy} / ₹ {dataItem.sell}</td>
              <td className="text-info">2.4{key}%</td>
              <td className="text-info"> ₹ {dataItem.high}</td>
            </tr>
            })}
           
          </tbody>
        </Table>
      </div>
      <div>
      <a href="https://ftx.com/">
        <img
          pointer
          src={task2Image}
          className="p-4 m-0"
          width={width-20}
          alt="error"
        />
      </a>
    </div>
    </div>
  );
};