import PropTypes from "prop-types";

const AllServiceListTable = ({ allServicesListItem }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Service Name</th>
            <th>Project Details</th>
            <th>Project Details</th>
          </tr>
        </thead>
        <tbody>
          {allServicesListItem.map((serviceName, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{serviceName.name}</td>
              <td>{serviceName.email}</td>
              <td>{serviceName.service}</td>
              <td>{serviceName.description}</td>
              <td>
                {
                  <div className="">
                    <select className="" id="exampleFormControlSelect1">
                      <option>Pending</option>
                      <option>Done</option>
                    </select>
                  </div>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

AllServiceListTable.propTypes = {
  allServicesListItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default AllServiceListTable;
