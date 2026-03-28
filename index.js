require('dotenv').config()
const express =require ('express');

const app =express();

const port =3000

app.get('/',(req,res)=>{
    res.send('Hellow ')
});
app.get('/login',(req,res)=>{
    res.send('<h1> please login at my web page<h1/>')
});


app.get('/dheeraj',(req,res)=>{
    res.send('<h1> Hello Dheeraj Kumar Kaishe ho kya kar rhe ho</h1>')

})
app.listen(process.env.PORT,()=>{
    console.log(` Example app listening on port ${port}`);
    
});
