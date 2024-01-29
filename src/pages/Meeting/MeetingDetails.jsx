import { format } from "date-fns";
import { Navigate, useLoaderData } from "react-router-dom";

const MeetingDetails = () => {
  const details = useLoaderData();

  if (details?.error) {
    return <Navigate to="/meeting" />;
  }

  const { meetingTime, userInfo, insertDate, status } = details;
  const { date, time } = meetingTime;
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
    serviceLook,
    websiteUrl,
  } = userInfo;

  return (
    <section>
      <div>
        <p className="mt-6 mb-10 text-secondary text-center text-3xl font-medium border-b py-5 rounded-md">{`${firstName} ${lastName}`}</p>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Property</th>
                <th>User Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>First Name</th>
                <td>{firstName}</td>
              </tr>
              <tr>
                <th>Last Name </th>
                <td>{lastName}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{email}</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td>{phoneNumber}</td>
              </tr>
              <tr>
                <th>Message</th>
                <td>{message || "No message"}</td>
              </tr>
              <tr>
                <th>Website</th>
                <td>
                  <a className="text-blue-500" href={websiteUrl} target="blank">
                    {websiteUrl}
                  </a>
                </td>
              </tr>
              <tr>
                <th>Services: </th>
                <td>
                  {serviceLook?.map((service, index) => (
                    <p className="my-2 font-medium" key={index}>
                      {service}
                      <br />
                    </p>
                  ))}
                </td>
              </tr>
              <tr>
                <th>Meeting Date</th>
                <td>{date && format(date, "yyyy-MMMM-dd")}</td>
              </tr>
              <tr>
                <th>Meeting Time</th>
                <td>{time}</td>
              </tr>
              <tr>
                <th>Apply Date</th>
                <td>{insertDate && format(insertDate, "yyyy-MMMM-dd pp")}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MeetingDetails;
