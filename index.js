import express from "express";
const app = express()
const port = 3000

app.use(express.json());

const dbData = [
    {
      user: "apu bala",
      roll: "25",
      sub: "bengali",
    },
    {
      user: "lina bala",
      roll: "26",
      sub: "bengali",
    },
    {
      user: "piu bala",
      roll: "27",
      sub: "bengali",
    },
    {
      user: "rimi bala",
      roll: "28",
      sub: "bengali",
    },
  ];




app.get("/:roll", (req,res)=>{
    // req.params.id
    const findRoll = req.params.roll
    console.log(findRoll);
    const findDataRoll = dbData.findIndex((item)=> item.roll === findRoll)
        // console.log(item.roll);
    console.log(findDataRoll);

    if(findDataRoll === -1){
       return res.send('no data')
    }else{
       return res.send(dbData[findDataRoll])
    }
    })



    app.post("/pushData" , (req,res)=>{
        dbData.push(req.body)
        return res.send(dbData)
    })

    app.put("/update/:roll", (req, res) => {
        const findRoll = req.params.roll;
        console.log(findRoll);
        const index = dbData.findIndex((item) => item.roll === findRoll);
        console.log(index);
        if (index === -1) return res.send("No data");
        else{
        dbData[index].user = req.body.user;
        console.log(req.body.user);
        // dbData[index].sub = req.body.sub;
        console.log(dbData);
        return res.send(dbData[index]); 
        }
      });


      app.delete("/delete/:roll", (req, res) => {
        const findRoll = req.params.roll;
        const index = dbData.findIndex((item) => item.roll === findRoll);
        if (index === -1) return res.send("No data");
        dbData.splice(index, 1);
        return res.send(dbData[index]);
      });



    



app.get("/" , (req,res) =>{
    res.send(dbData)
})




app.listen(port, ()=>{
    console.log(`this port ${port} is runing`);
})