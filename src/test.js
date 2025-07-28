// function getUser(id){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             if(id === 1){
//                 resolve({ id: 1, name: "John Doe" });
//             } else {
//                 reject("User not found");
//             }
//         },2000)
//     })
// }

async function getUser(id) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if(id === 1){
        return {id:1, name: "John Doe"};
    }else{
        throw "User not found";
    }
}

// getUser(1).then(user=>{
//     console.log("User found:", user);
// }).catch(error=>console.error("Error: ", error));

async function loadUser(id){
    console.log("Loading user...");

    try{
        const data = await getUser(id);
        console.log(data);
    }catch (error){
        console.log(error);
    } finally{
        console.log("Done Loading");
    }
}

loadUser(1); 