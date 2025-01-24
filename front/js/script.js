const getRickMorty=() =>{
    const crtNameInput=document.getElementById('crtName');
    const crtInfo=document.getElementById('crtInfo');

    const name=crtNameInput.value.toLowerCase();

    fetch (`http://localhost:4000/characters/${name}`)
    .then(response=>response.json())
    .then(data=>{
        const {name,status,species,gender,origin,image}=data
        
        crtInfo.innerHTML=`
        <h2>${name}</h2>
        <p>Status: ${status}</p>
        <p>Species:${species}</p>
        <p>Gender:${gender}</p>
        <p>Origin:${origin.name}</p>
         <img src="${image}" alt="${name}"></img>

        `
    })
    .catch(error=>crtInfo.innerHTML=`<p>No se ha podido acceder al personaje</p>`)
}