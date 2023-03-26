import express from "express";
import fs from "fs"
const app = express();

const PORT = process.env.PORT;

app.use(express.json())


app.get('/', function(request,response){
    response.send("How you doin.......")
})


//creating the file app

app.get('/createFile', function(request,response){


    //for the file's content
    let date = new Date()
    let fileContent = date.getTime().toLocaleString();
    console.log(fileContent);


    //for the file's name
    let day = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`
    console.log(day)

    //creating the file
    fs.writeFile(`./${day}.txt`,fileContent,(err)=>{
        if(err){
            console.log('you failed bugga')
        }else{
            console.log('you created da bugga')
        }
    })
    response.send("files created");
})

//reading the file that was created

app.get('/readFile',function(request,response){
    fs.readdir("./",(err,Files)=>{
        if(err)
            console.log(err)
        else
            response.json({Files})
    });
})

app.listen(PORT, ()=>console.log(`i started at ${PORT} da bugga`))