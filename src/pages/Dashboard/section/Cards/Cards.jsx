import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Cards = () => {
  const [meetingCount, setMeetingCount] = useState(0);

  useEffect(() => {
    // load today meeting number
    try {
      fetch("https://animation-web-server.vercel.app/contact")
        .then((res) => res.json())
        .then((data) => {
          // count meeting number
          let number = 0;
          data?.forEach((element) => {
            const insertDate = format(element.insertDate, "yyyy-MM-dd");
            const nowDate = format(new Date(), "yyyy-MM-dd");
            if (insertDate === nowDate) {
              number++;
            }
          });
          // set meeting number
          setMeetingCount(number);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <div className="flex justify-evenly my-6">
        {/* meeting */}
        <div className="card w-96 shadow-md">
          <div className="card-body text-center">
            <p className="text-3xl font-bold">{meetingCount}</p>
            <h2 className="font-bold text-4xl">Meeting</h2>
            <div className="flex justify-center mt-2">
              <Link to="/meeting">
                <button className="btn btn-primary">Views</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Order */}
        <div className="card w-96 shadow-md">
          <div className="card-body text-center">
            <p className="text-3xl font-bold">0</p>
            <h2 className="font-bold text-4xl">Order</h2>
            <div className="flex justify-center mt-2">
              <button className="btn btn-primary" disabled>
                Views
              </button>
            </div>
          </div>
        </div>
        {/* Message */}
        <div className="card w-96 shadow-md">
          <div className="card-body text-center">
            <p className="text-3xl font-bold">0</p>
            <h2 className="font-bold text-4xl">Message</h2>
            <div className="flex justify-center mt-2">
              <button className="btn btn-secondary" disabled>
                Views
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
