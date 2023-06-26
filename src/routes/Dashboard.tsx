import { Navbar } from "components/Navbar";
import { useAppSelector } from "hooks/useAppSelector";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);

  return (
    <div className="flex items-center justify-center border border-black">
      <h1>Dashboard is under construction</h1>
      {/* <h2>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </h2> */}
    </div>
  );
}

export default Dashboard;
