import Header from "./components/Header";
import Main from "./components/Main";

export default function MemeGenerator() {
  const style = {
    width: "50%",
    minWidth: "600px",
    backgroundColor: "#eee",
    margin: "0 auto",
    padding: "0",
    border: "1px solid black",
    borderRadius: "8px",
  };

  return (
    <div style={style}>
      <Header />
      <Main />
    </div>
  );
}
