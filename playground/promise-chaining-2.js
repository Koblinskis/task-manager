require('../src/db/mongoose')
const Task = require('../src/models/task')

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('5e0a772848fedf3b7c30e29c').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})