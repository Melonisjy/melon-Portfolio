import portfolioData from "../portfolioData.json";
import Card from "../components/Card";

function Main() {
  return (
    <main>
      <div className="bg-green-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
        introduce yourself
      </div>
      <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-8 py-8">
        {portfolioData.map((v, i) => {
          return (
            <Card
              key={i}
              id={v.id}
              img={v.img}
              title={v.title}
              description={v.description}
            />
          );
        })}
      </ul>
      <div className="bg-gray-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
        Contact
      </div>
    </main>
  );
}
export default Main;
