import { useLocation } from "react-router-dom";

import useAuth from "../Hooks/useAuth";

const Dashboard = ({email}) => {
  const { user } = useAuth();
  const location = useLocation();
  //const { email, password } = location.state || {};
//console.log(user);

return (
  <div className="dashboard min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div className="card w-96 bg-white shadow-xl rounded-lg p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome to Your Dashboard</h1>
      <div className="text-center">
        <p className="text-xl mb-2">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-xl mb-2">
          <span className="font-semibold">Name:</span> {user.displayName || "User"}
        </p>
      </div>
      <div className="card-actions justify-center mt-6">
        <button className="btn bg-blue-500 text-white w-full mb-2">
          Manage Account
        </button>
      </div>
    </div>
  </div>
);
};

export default Dashboard;
