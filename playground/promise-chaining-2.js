require("../src/db/mongoose");

const Task = require("../src/models/task");

// Task.findByIdAndDelete("618a958a4659e43ec734f679").then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((res)=>{
//     console.log(res)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });
  return count;
};
deleteTaskAndCount("618b7adf44de32eb30214f87", false)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
