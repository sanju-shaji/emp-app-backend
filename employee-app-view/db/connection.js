const mongoose=require('mongoose');
const url='mongodb+srv://sanju:Abc1234@cluster0.g9obo.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(url).then(()=>{
    console.log('connection established')
}).catch(()=>{
    console.log('error in connection')
})