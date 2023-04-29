import Profile from "../components/Profile/Profile";
import Intro from "../components/Profile/Intro";
import "./../index.css";

export const Home = () => {
  return (
    <div className="profileIntro">
      <div className="profileIndex">
        <Profile />
      </div>
      <div className="introIndex">
        <Intro />
      </div>
    </div>
  );
};
