import { AiFillGithub } from "react-icons/ai";
import { GiFireworkRocket, GiFireRay } from "react-icons/gi";
export const HomeScreen = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "",
      }}
    >
      <h1>Sudoku</h1>
      <h5 style={{ marginBottom: "40px" }}>
        Pháo bông <GiFireRay color="red" />{" "}
      </h5>
      <button
        style={{ marginBottom: "50px" }}
        className="home__btn"
        type="button"
      >
        <a href={window.location.href + "/single-player"}>Single Player</a>
      </button>
      <span>
        <AiFillGithub />{" "}
        <a href="https://github.com/khuongduy354/sudoku-fe.git">khuongduy</a>
      </span>
    </div>
  );
};
