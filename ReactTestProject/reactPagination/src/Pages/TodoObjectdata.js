import React, { useState } from "react";

const TodoObjectdata = () => {
  const data = [
    {
      //   id: 1,
      name: "rahul",
      age: "24",
      email: "rahul@gmail.com",
      MobilNo: "9670888935",
    },
  ];

  
  const [UserData, setIUserData] = useState(data);
  const [Editid, setEditid] = useState(null);
  console.log("UserData", UserData);

  const [formdata, setFromdata] = useState({
    name: "",
    age: "",
    email: "",
    MobilNo: "",
  });

  const handlechange = (e) => {
    console.log("name, value", e.target.value);
    const { value, name } = e.target;
    console.log("name, value", name, value);
    setFromdata({ ...formdata, [name]: value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (Editid != null) {
    //   let updatedData = UserData.map((item, index) =>
    //     index === Editid ? formdata : item
    //   );
    let updatedData = UserData.findIndex((_,item) => item === Editid);
    console.log("updatedData", updatedData);
    const da = [...UserData]
    da[updatedData] =formdata

     
    //   return
      setIUserData(da);
      setEditid(null);
      setFromdata({ name: "", age: "", email: "", MobilNo: "" });
    } else {
      setIUserData((pre) => [...pre, formdata]);
      setFromdata({ name: "", age: "", email: "", MobilNo: "" });
    }
  };
  const deletadata = (index) => {
    const delteFilter = UserData.filter((_, i) => i !== index);
    setIUserData(delteFilter);
  };
  const editData = (index) => {
    setEditid(index);
    setFromdata(UserData[index]);
  };

  return (
    <div className="container">
      <div className="my-5">
        <form onSubmit={HandleSubmit}>
          <div class="mb-3">
            <label class="form-label">name</label>
            <input
              type="text"
              class="form-control"
              value={formdata.name}
              name="name"
              onChange={(e) => handlechange(e)}
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Age</label>
            <input
              type="text"
              class="form-control"
              value={formdata.age}
              name="age"
              required
              onChange={(e) => handlechange(e)}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">email</label>
            <input
              type="email"
              class="form-control"
              value={formdata.email}
              name="email"
              required
              onChange={(e) => handlechange(e)}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">MobilNo</label>
            <input
              type="text"
              class="form-control"
              value={formdata.MobilNo}
              name="MobilNo"
              required
              onChange={(e) => handlechange(e)}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            {Editid != null ? "Update" : "Submit"}
          </button>
        </form>
      </div>
      <table class="table my-5 border">
        <thead>
          <tr>
            {/* <th scope="col">id</th> */}
            <th scope="col">First name</th>
            <th scope="col">age</th>
            <th scope="col">email</th>
            <th scope="col">MobilNo</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {UserData.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  {/* <th scope="row">{item.id}</th> */}
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.MobilNo}</td>
                  <td>
                    <div className="d-flex ">
                      <button
                        onClick={() => editData(index)}
                        className="btn btn-primary"
                      >
                        edit
                      </button>
                      <button
                        onClick={() => deletadata(index)}
                        className="btn btn-danger ms-2"
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoObjectdata;
