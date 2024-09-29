import express from "express";
const app = express();

app.get('/',(req, res)=>{
    res.send('hi from backend');
});


app.listen(8000,()=>{
    console.log('server runing on port 8000');
})