import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl text-center my-8 font-semibold">
        Hot hot cold coffee: {coffees.length}
      </h2>
      <div className="grid md:grid-cols-2 gap-10 py-16">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
