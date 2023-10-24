import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineChair } from "react-icons/md";
import "./index.css";

function Home(props) {
  let ticketNumber = props.quanityOfTicker;
  const reset = props.resetTicker;
  console.log(ticketNumber);

  const layout = [
    [
      0,
      0,
      0,
      0,
      0,
      1,
      2,
      0,
      3,
      4,
      0,
      5,
      6,
      0,
      7,
      8,
      0,
      9,
      10,
      0,
      11,
      12,
      0,
      13,
      14,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      15,
      16,
      0,
      17,
      18,
      0,
      19,
      20,
      0,
      21,
      22,
      0,
      23,
      24,
      0,
      25,
      26,
      0,
      27,
      28,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      29,
      30,
      0,
      31,
      32,
      0,
      33,
      34,
      0,
      35,
      36,
      0,
      37,
      38,
      0,
      39,
      40,
      0,
      41,
      42,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [
      0,
      0,
      0,
      0,
      0,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      0,
      0,
      0,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      0,
      0,
      0,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      0,
      0,
      0,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      0,
      0,
      0,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [
      0,
      0,
      111,
      112,
      113,
      114,
      115,
      0,
      0,
      0,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
    ],
    [
      0,
      0,
      129,
      130,
      131,
      132,
      133,
      0,
      0,
      0,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      142,
      143,
      144,
      145,
      146,
    ],
    [
      0,
      0,
      147,
      148,
      149,
      150,
      151,
      0,
      0,
      0,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160,
      161,
      162,
      163,
      164,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [
      0,
      0,
      0,
      0,
      165,
      166,
      167,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      0,
      0,
      0,
      178,
      179,
      180,
      181,
      182,
    ],
    [
      0,
      0,
      0,
      0,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      0,
      0,
      0,
      196,
      197,
      198,
      199,
      200,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const [seats, setSeats] = useState(
    layout.map((item) =>
      item.map((data) => ({
        id: data, // 0
        isZero: data, //0
        isSelected: false,
        isBooked: false,
        type: "standard",
      }))
    )
  );

  const [numberofbook, setNumberofbook] = useState(
    seats.flat().filter((item) => item.isSelected).length
  );

  const bookHandler = (seatId) => {
    if (ticketNumber === "") {
      toast.error("Please select ticket quantity");
    } else if (numberofbook < ticketNumber) {
      let updatedSeat = seats.map((item) =>
        item.map((data) => {
          if (data.id === seatId) {
            if (data.isBooked) {
              toast.error("This seat already Booked ... !");
              return { ...data, isSelected: false };
            } else {
              if (data.isSelected === false) {
                setNumberofbook(numberofbook + 1);
                return { ...data, isSelected: true };
              } else {
                setNumberofbook(numberofbook - 1);
                return { ...data, isSelected: false };
              }
            }
          } else {
            return data;
          }
        })
      );
      setSeats(updatedSeat);
    } else {
      toast.error("Quantity limit full ...!");
    }
  };

  const proceedHandler = () => {
    if (+ticketNumber !== +numberofbook) {
      toast.error(`Select ${ticketNumber} Seats`);
      return;
    }
    setSeats(
      seats.map((item) =>
        item.map((data) => {
          if (data.isSelected) {
            return { ...data, isBooked: true, isSelected: false };
          } else {
            return data;
          }
        })
      )
    );
    toast.success(`you have booked ${ticketNumber} ${props.type} tikets.. !`);
    setNumberofbook(0);
    reset("Qnty");
  };
  return (
    <div className="container">
      {seats.map((row, index1) => {
        return (
          <div key={index1} style={{ display: "flex", width: "100%" }}>
            <div style={{ width: "40px", marginTop: "15px" }}>
              {String.fromCharCode(65 + index1)}
            </div>
            {row.map((seat, index2) => (
              <>
                {seat.isZero !== 0 ? (
                  <MdOutlineChair
                    onClick={() => bookHandler(seat.id)}
                    className={` ${
                      seat.isSelected
                        ? "selected"
                        : seat.isBooked
                        ? "booked"
                        : "available hover seat"
                    } `}
                    key={index2}
                    style={{ width: "3.5%", color: "black" }}
                  />
                ) : (
                  <span key={index2} style={{ marginRight: "3.5%" }}></span>
                )}
              </>
            ))}
          </div>
        );
      })}

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <img
        alt="Movies Screen Icon"
        src="https://res.cloudinary.com/dbbyhhnom/image/upload/v1698001332/screen-icon_u2xjal.svg"
      />
      <button className="btn" onClick={proceedHandler}>
        <span>Proceed</span>
      </button>
    </div>
  );
}

export default Home;
