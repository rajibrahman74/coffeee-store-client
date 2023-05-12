const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="card card-side shadow-xl bg-[#F5F4F1] flex items-center justify-center p-3">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Quantity: {quantity}</p>
        <p>Supplier: {supplier}</p>
        <p>Taste: {taste}</p>
      </div>
      <div className="btn-group btn-group-vertical space-y-4">
        <button className="btn bg-[#ab8f6a] border-0 hover:bg-[#827360e4]">View</button>
        <button className="btn">Edit</button>
        <button className="btn bg-red-600 hover:bg-red-700 border-0">Delete</button>
      </div>
    </div>
  );
};

export default CoffeeCard;
