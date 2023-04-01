const express=require("express")
const path=require("path")


const app=express();

app.set('port', process.env.PORT || '3000')

app.use(express.json());
app.use(express.static(path.join(__dirname,'public/build')))
const servidor=app.listen(app.get('port'),()=>{
    console.log("servidor conectado");
})