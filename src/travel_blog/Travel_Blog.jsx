import Header from "./Header.jsx";
import Entry from "./Entry.jsx";
import travelData from "./data.js";

export default function Travel_Blog() {
  const entryElements = travelData.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });

  const styles = {
    width: "700px",
    border: "1px solid grey",
    borderRadius: "10px",
    margin: "0 auto",
  };

  return (
    <div style={styles}>
      <Header />
      {entryElements}
    </div>
  );
}
