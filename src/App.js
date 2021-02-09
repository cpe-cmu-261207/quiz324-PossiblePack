import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  useState(() => {
    // const [name, setName] = useState('');
    // const [gender, setGender] = useState('');
    // const [age, setAge] = useState(null);
  }, []);
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");

    // ...
  }, []);
  function addPet() {
    // Declare multiple state variables!
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(0);

    return (
      <div className="card" style={{ width: 400 }}>
        <div className="card-content">
          <p className="is-4 title has-text-centered">Add Pet</p>
          <div className="field">
            <label className="label">{name}</label>
            <input
              className="input"
              type="text"
              placeholder="e.q Coco"
              //update related state based on event
            ></input>
          </div>

          <div className="field">
            <label className="label">{gender}</label>
            <select
              className="input"
              type="text"
              placeholder="Please select .."
            >
              <option value="" disabled selected hidden>
                -- Select Gender --
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="field">
            <label className="label">{age}</label>
            <input className="input" type="number" placeholder="e.q 5"></input>
          </div>

          <button className="button is-danger is-fullwidth">Submit</button>

          <div className="mb-4"></div>

          {/* display tables for all persons */}
          <p className="is-4 title has-text-centered">Pet List</p>
          {/* sample table */}
          <ItemTable name={"Coco"} gender={"Male"} age={"5"} />
          <p>Sahadsawad Chailuan 620610814</p>
        </div>
      </div>
    );
  }
}

export default App;
