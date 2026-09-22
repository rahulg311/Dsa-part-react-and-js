function instaChatid (chatid,fn){
    setTimeout(()=>{
        console.log("user chat id ",chatid)
        fn({id:3,name:"rahul"})
    },1000)
    
}
function instaChatname (chatid,fn){
    setTimeout(()=>{
        console.log("user chat  ",chatid)
        fn(["postdata", "postdata2"])
    },1000)
    
}
function instaChatdata (chatid,fn){
    setTimeout(()=>{
        console.log("user chat post ",chatid)
        fn(["data2", "data3"])
    },1000)
    
}





instaChatid(1,function(user){
    instaChatname(user.name,function(userchat){
         instaChatdata(userchat[0],function(comment){
             console.log("final result",comment)
         });
  });
});  




// avoid callback heel 
function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched user");
      resolve({ id: userId, name: "Rahul" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched posts for user " + userId);
      resolve(["Post1", "Post2"]);
    }, 1000);
  });
}

function getComments(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched comments for " + post);
      resolve(["Comment1", "Comment2"]);
    }, 1000);
  });
}

// Async/Await se clean code
async function fetchData() {
  const user = await getUser(1);
  const posts = await getPosts(user.id);
  const comments = await getComments(posts[0]);
  console.log("All done!", comments);
}

fetchData();

