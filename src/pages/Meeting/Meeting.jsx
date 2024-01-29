import { useEffect, useState } from "react";
import MeetingItem from "./MeetingItem";

const Meeting = () => {
  const [meetingData, setMeetingData] = useState([]);

  useEffect(() => {
    // load today meeting number
    try {
      fetch("https://animation-web-server.vercel.app/contact")
        .then((res) => res.json())
        .then((data) => setMeetingData(data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <section>
      <div className="py-10">
        <h3 className="text-2xl uppercase font-bold text-center">
          Our meeting
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Meeting Date</th>
              <th>Time</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Insert Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {meetingData?.map((data, index) => (
              <MeetingItem key={index} data={data} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Meeting;
