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



  useEffect(()=>{
    let localdata = JSON.parse(localStorage.getItem("userData"))
    if(localdata){
 
        console.log("localdata",localdata)


        setFormData(localdata)
    }

  },[])


  console.log("findindex----------", formData);
  const [Render, setRender] = useState(false);

  const Submitdata = (e) => {
    e.preventDefault();

    localStorage.setItem("userData", JSON.stringify(formData));
    alert("sucessfully data submit");
  };
  const handelChange =(e,item,i,newArray,collageIndex ,index2,keys)=>{
    console.log("collageIndex",collageIndex)
    if(collageIndex == -1){
        const val = e.target.type === "checkbox" ?e.target.checked :e.target.value
        const data ={
            collage:item.collage,
            userData:[]
        }
        data.userData[index2]= {[keys]:val, name:i}
        newArray.push(data)
        setFormData([...newArray])
       

    
    }else{
       let usern = newArray[collageIndex].userData[index2] ||{}
         usern[keys] = e.target.type === "checkbox" ?e.target.checked :e.target.value
         usern["name"]=i
         newArray[collageIndex].userData[index2] =usern
    //    console.log("q1132323-----------",collageIndex,index2 )
        setFormData([...newArray])

    }
  


  }


  return (
    <div className="">
      {Render == Render &&
        data?.map((item, index1) => {
            let newArray = formData
            let collageIndex = newArray.findIndex((i)=>i.collage===item.collage)
            let newupdateddata =formData.find((i)=>i.collage ==item.collage)
            {/* console.log("newupdateddata",newupdateddata) */}
       

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
                    let ChildData =newupdateddata?.userData[index2] ||{}
                    console.log("newupdateddata",ChildData)

                    
                    return (
                      <tr key={index2}>
                        <th scope="row">{index2 + 1}</th>
                        <td>{i}</td>
                        <td>
                          <input
                            className="form-control"
                            name="email"
                            type="email"
                            value={ChildData.email || ""}
                            onChange={(e)=>handelChange(e,item,i,newArray,collageIndex ,index2, "email")}
                    
                          />
                        </td>
                        <td>
                          <input
                            className="form-control"
                            name="age"
                            type="number"
                            value={ChildData.age ||""}

                            onChange={(e)=>handelChange(e,item,i,newArray,collageIndex ,index2, "age")}
                           
                          />
                        </td>
                        <td>
                          <input
                            className=""
                            name="active"
                            checked={ChildData.active ||""}
                             type="checkbox"
                            onChange={(e)=>handelChange(e,item,i,newArray,collageIndex ,index2, "active")}
                           
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
