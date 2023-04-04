import portfolioData from "../portfolioData.json";
import PortfolioCard from "../components/PortfolioCard";

function Portfolio() {
  return (
    <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
      {portfolioData.map((v, i) => {
        return (
          <PortfolioCard
            key={i}
            index={i}
            title={v.title}
            desc={v.desc}
            image={v.image}
          />
        );
      })}
    </ul>
  );
}
export default Portfolio;
