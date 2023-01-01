require('../src/db/mongoose')
const User = require('../src/models/user')


// User.findByIdAndUpdate("618a9eedcf81438443783873",{age:22}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:22})

// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const userAndCount = async(id, age)=>{
    const user = await User.findByIdAndUpdate (id, {age})
    const count = await User.countDocuments({age})
    return count
}
userAndCount("618a9eedcf81438443783873", 17).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})