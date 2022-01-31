import { AiFillGithub } from "react-icons/ai";
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
      <h1>New Year Sudoku</h1>
      <button
        style={{ marginBottom: "50px" }}
        className="home__btn"
        type="button"
      >
        <a href={window.location.href + "single-player"}>Single Player</a>
      </button>
      <span>
        <AiFillGithub />
        <a href="https://github.com/khuongduy354/sudoku-fe.git">khuongduy354</a>
      </span>
    </div>
  );
};
