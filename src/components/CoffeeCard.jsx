import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

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
        <button className="btn bg-[#ab8f6a] border-0 hover:bg-[#827360e4]">
          View
        </button>
        <Link to={`updatecoffee/${_id}`}>
          <button className="btn">Edit</button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-red-600 hover:bg-red-700 border-0"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    supplier: PropTypes.string.isRequired,
    taste: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  coffees: PropTypes.array.isRequired,
  setCoffees: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default CoffeeCard;