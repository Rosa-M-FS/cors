const express=require('express');
const app=express();

const axios=require('axios');
const cors=require('cors');
app.use(cors());

app.get('/characters/:name', async (req,res)=>{
    const name=req.params.name
    const url=`https://rickandmortyapi.com/api/character/?name=${name}`

    try {
        const response = await axios.get(url)

        const {name,status,species,gender,origin,image}=response.data.results[0];
        res.json({name,status,species,gender,origin,image})
    } catch (error) {
        res.status(404).json({error:'Personaje no encontrado'})
    }
})

const PORT=4000;
app.listen(PORT,()=>{
    console.log(`Express escuchando en http://localhost:${PORT}`)
});