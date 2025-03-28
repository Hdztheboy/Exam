import url from "./Url.js";

async function getData(){
    try {
        const disneyData = await fetch(url);
        if (!disneyData.ok){
            throw new Error ("sorry..", disneyData.status);
        }
        const trasformData = await disneyData.json();
        return trasformData.data
        
    } catch (error) {
        console.log(error.message) 
    }
}
export default getData;