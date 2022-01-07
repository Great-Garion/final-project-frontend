import Object from "../wisata/Object";

function Home() {
  return (
    <div>
      <img
        style={{
          borderRadius: "10px",
          display: "block",
          marginLeft: "auto",
          marginTop: "20px",
          marginRight: "auto",
        }}
        src="https://www.goodnewsfromindonesia.id/uploads/post/large-shutterstock-1482770729-acbd72dfa8c68fe8d3ccf8eac99e007e.jpg"
        width={650}
        height={400}
      />
      <Object />
      
    </div>
  );
}

export default Home;
