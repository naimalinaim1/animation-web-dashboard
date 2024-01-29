import { format } from "date-fns";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MeetingItem = ({ data, index }) => {
  const navigate = useNavigate();

  const { firstName, lastName, email, phoneNumber } = data.userInfo;
  const { date, time } = data.meetingTime;
  const d = new Date(date);
  // check new
  const insertDate = format(data.insertDate, "yyyy-MM-dd");
  const nowDate = format(new Date(), "yyyy-MM-dd");

  return (
    <tr>
      <th>{++index}</th>
      <td>
        {firstName + " " + lastName}{" "}
        {insertDate === nowDate && (
          <span className="text-primary font-medium">(New)</span>
        )}
      </td>
      <td>{format(d, "yyyy-MMMM-dd")}</td>
      <td>{time}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{format(data.insertDate, "yyyy-MM-dd pp")}</td>
      <td>{data.status}</td>
      <td>
        <button
          className="btn btn-secondary"
          onClick={() => navigate(`/meeting/${data._id}`)}
        >
          Details
        </button>
      </td>
    </tr>
  );
};

MeetingItem.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default MeetingItem;
