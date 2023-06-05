import { useAppSelector } from "hooks/useAppSelector";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);

  return (
    <div>
      <h1>dash</h1>
      <h2>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </h2>
    </div>
  );
}

export default Dashboard;
