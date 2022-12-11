import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Page from "../components/Page";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <Button text="Start Test" handleClick={() => navigate("/quiz-landing")} />
      </div>
    </div>
  );
};

export default Home;
