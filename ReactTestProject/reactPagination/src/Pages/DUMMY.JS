import React, { useEffect, useState } from "react";

function ChekboxAddData() {
  const data = [
    {
      collage: "hnbgu",
      userData: ["rahul", "sellu", "ankit", "nishnat", "arjun"],
    },
    {
      collage: "Excellent",
      userData: ["aman", "kaju", "sachin", "babu", "arun"],
    },
    {
      collage: "cpm",
      userData: ["dharm", "armaan", "kelu", "nashu", "pitu"],
    },
    {
      collage: "newIndian",
      userData: ["shubhu", "shubham", "dharmendra", "dugu", "ansh"],
    },
  ];

  const [formData, setFormData] = useState([]);
  useEffect(() => {
    let LocalData = localStorage.getItem("userData");
    let LocalDatas = JSON.parse(LocalData);
    console.log("LocalData", LocalDatas);
    if (LocalDatas) {
      setFormData(LocalDatas);
    } else {
      const initialData = data.map((i) => ({
        collage: i.collage,
        userdata: i.userData.map((name) => ({
          name,
          email: "",
          age: "",
          active: false,
        })),
      }));
      setFormData(initialData);
    }
  }, []);

  console.log("findindex----------", formData);
  const [Render, setRender] = useState(false);

  const Submitdata = (e) => {
    e.preventDefault();

    localStorage.setItem("userData", JSON.stringify(formData));
    alert("sucessfully data submit");
  };

  const handleChange =(e, newObj,newArray,newIndex,index2 ,key)=>{
 const val = e.target.type === "checkbox" ?e.target.checked :e.target.value

//  console.log(newObj,newArray)
//  newObj[key]=val
 newArray[newIndex].userdata[index2][key]=val
 console.log("newArray-------",newArray)
 setFormData([...newArray])


  }

  return (
    <div className="">
      {Render == Render &&
        data?.map((item, index1) => {
          let newArray = formData;
          let newIndex = newArray.findIndex((i) => i.collage === item.collage);

          return (
            <div className="container border p-2 my-3" key={index1}>
              <p className="bg-success mt-3 p-2 text-white">
                Collage Name - {item.collage}
              </p>

              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">email</th>
                    <th scope="col">MobilNo</th>
                    <th scope="col">active</th>
                  </tr>
                </thead>
                <tbody>
                  {item?.userData.map((i, index2) => {
                    let dd = formData[newIndex]?.userdata[index2] || {};
                    console.log("sdjnjhsd", dd);
                    let newObj = newArray?.[newIndex]?.userdata[index2];

                    return (
                      <tr key={index2}>
                        <th scope="row">{index2 + 1}</th>
                        <td>{i}</td>
                        <td>
                          <input
                            className="form-control"
                            name="email"
                            type="email"
                            defaultValue={dd.email || ""}
                            //   defaultValue={vv?.email ||""}
                            onChange={(e) =>handleChange(e, newObj,newArray,newIndex,index2,"email") 
                            // seconed methos use deirtly update and add data
                            // {
                            //   let val = e.target.value;
                            //   newObj["email"] = val;
                            //   newArray[newIndex].userdata[index2] = newObj;
                            //   setFormData([...newArray]); // Update formData
                            //   setRender(!Render);
                            // }
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="form-control"
                            name="age"
                            type="number"
                            defaultValue={dd.age || ""}
                            onChange={(e) =>handleChange(e, newObj,newArray,newIndex,index2,"age") }
                            // onChange={(e) => {
                            //   let val = e.target.value;
                            //   newObj["age"] = val;
                            //   newArray[index1].userdata[index2] = newObj;
                            //   setFormData([...newArray]); // Update formData
                            //   setRender(!Render);
                            // }}
                          />
                        </td>
                        <td>
                          <input
                            className=""
                            name="active"
                            type="checkbox"
                            checked={dd.active}
                            onChange={(e) =>handleChange(e, newObj,newArray,newIndex,index2,"active") }
                            //   let val = e.target.checked;
                            //   newObj["active"] = val;
                            //   newArray[index1].userdata[index2] = newObj;
                            //   setFormData([...newArray]); // Update formData
                            //   setRender(!Render);
                            // }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      <div className="d-flex justify-content-end w-75">
        <button type="submit" onClick={Submitdata} class="btn btn-primary">
          {/* {Editid != null ? "Update" : "Submit"} */}
          Add data
        </button>
      </div>
    </div>
  );
}

export default ChekboxAddData;
