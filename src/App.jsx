import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl text-center my-8 font-semibold">
        Hot hot cold coffee: {coffees.length}
      </h2>
      <div className="grid md:grid-cols-2 gap-10 py-16">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;