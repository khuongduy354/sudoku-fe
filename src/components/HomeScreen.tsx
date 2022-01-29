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
      <button className="home__btn" type="button">
        <a href={window.location.href + "single-player"}>Single Player</a>
      </button>
      <button className="home__btn" type="button">
        <a href={window.location.href + "co-op"}>Co-op</a>
      </button>
      <button className="home__btn" type="button">
        <a href={window.location.href + "pvp"}>PvP</a>
      </button>
    </div>
  );
};
