import React, { useEffect, useState } from "react";
const data = ["rahul", "aman", "nikhil", "ansh", "raju"];

const Checkbox = () => {
  const [UserData, setUserData] = useState([]);
  const [Render, setRender] = useState(false);
  console.log("UserData--------------", UserData);

  useEffect(() => {
    let localdata = localStorage.getItem("userdatas");
    let dataget = JSON.parse(localdata);
    console.log("dataget", dataget);
    if (localdata) {
      console.log("dataget", dataget);
      setUserData(dataget);
    } else {
      let dd = data.map((name) => ({
        name,
        age: "",
        email: "",
        action: false,
      }));
      setUserData(dd);
    }

    // setUserData(dataget)
    // console.log("dataget",dataget)
  }, []);

  const Submitdata = (e) => {
    e.preventDefault();
    console.log("ssUserData", UserData);
    let localdata = localStorage.setItem("userdatas", JSON.stringify(UserData));
  };
  return (
    <div className="container my-6">
      <table class="table my-5 border">
        <thead>
          <tr>
            {/* <th scope="col">id</th> */}
            <th scope="col">First name</th>
            <th scope="col">age</th>
            <th scope="col">email</th>
            <th scope="col">action</th>
            {/* <th scope="col">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {Render == Render &&
            data.map((item, index) => {
              let UserDatas = UserData[index] || { item };
              console.log("UserDatas---------------", UserDatas);
              let updatedUserData = UserData;

              let updatedUserDataIndex = updatedUserData.findIndex((i) => i?.name === item
              );
              let updatedUserDataObj = updatedUserData[updatedUserDataIndex];
              console.log("updatedUserDataObj----------", updatedUserDataObj);

              {
                /* when use to another - method updated the value */
              }
              {
                /* const handleInputChange = (index, key, value) => {
            const updatedUserData = [...UserData]; // Create a new copy
            const updatedUserDataObj = { ...updatedUserData[index], [key]: value }; // Copy the object and update the field
            updatedUserData[index] = updatedUserDataObj;
            setUserData(updatedUserData);
            setRender(!Render);
};             */
              }
              return (
                <>
                  <tr key={index}>
                    {/* <th scope="row">{item.id}</th> */}
                    <td>{item}</td>

                    <td>
                      <div className="d-flex ">
                        <input
                          type="text"
                          name="age"
                          defaultValue={UserDatas.age || ""}
                          class="form-control"
                          onChange={(e) => {
                            let value = e.target.value;
                            // const data={
                            //     name:item,
                            //     age:value,
                            //     email:"",
                            //     action:""
                            // }
                            // updatedUserData.push(data)
                            if (updatedUserDataIndex >= 0) {
                              updatedUserDataObj["age"] = value;
                              console.log(
                                "updatedUserDatarahul2",
                                updatedUserDataObj
                              );
                              updatedUserData[updatedUserDataIndex] =
                                updatedUserDataObj;
                              console.log(
                                "updatedUserDatarahul--------------------",
                                updatedUserData
                              );
                              setUserData(updatedUserData);
                            }
                            // setUserData((pre)=>[...pre,data])
                            // setUserData(updatedUserData)
                            setRender(!Render);
                          }}
                        />
                      </div>
                    </td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        defaultValue={UserDatas.email || ""}
                        class="form-control"
                        onChange={(e) => {
                          let value = e.target.value;
                          console.log(
                            "updatedUserDatarahul1",
                            updatedUserDataIndex
                          );
                          if (updatedUserDataIndex >= 0) {
                            updatedUserDataObj["email"] = value;
                            console.log(
                              "updatedUserDatarahul2",
                              updatedUserDataObj
                            );
                            updatedUserData[updatedUserDataIndex] =
                              updatedUserDataObj;
                            console.log(
                              "updatedUserDatarahul",
                              updatedUserData
                            );
                            setUserData(updatedUserData);
                          }
                          setRender(!Render);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        name="action"
                        checked={UserDatas.action || false}
                        class=""
                        onChange={(e) => {
                          let value = e.target.checked;
                          console.log("check", value);
                          if (updatedUserDataIndex >= 0) {
                            updatedUserDataObj["action"] = value;
                            updatedUserData[updatedUserDataIndex] =
                              updatedUserDataObj;
                            console.log("updatedUserData9888", updatedUserData);
                            setUserData(updatedUserData);
                          }

                          setRender(!Render);
                        }}
                      />
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      <div className="d-flex justify-content-end w-100">
        <button type="submit" onClick={Submitdata} class="btn btn-primary">
          {/* {Editid != null ? "Update" : "Submit"} */}
          Add data
        </button>
      </div>
    </div>
  );
};

export default Checkbox;
