import { useState } from "react";
import { useSelector } from "react-redux";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState("Xiaomi 12");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>Create new Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input type="text" className="form-control" value={name} disabled />
        </div>

        <div className="form-group">
          <label htmlFor="email">Customer Email</label>
          <input type="text" className="form-control" value={email} disabled />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="product">Product</label>
            <select
              name="product"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="Xiaomi 12">Xiaomi 12</option>
              <option value="Xiaomi 11">Xiaomi 11</option>
              <option value="Mi 11">Mi 11</option>
              <option value="Mi 10">Mi 10</option>
              <option value="Mi 9">Mi 9</option>
              <option value="Xiaomi Smart Band 7">Xiaomi Smart Band 7</option>
              <option value="Redmi Pad">Redmi Pad</option>
              <option value="RedmiBook 15">RedmiBook 15</option>
              <option value="Mi True Wireless Earphone 2">
                Mi True Wireless Earphone 2
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description of the issue</label>
            <textarea name="description" id="description" className="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;
