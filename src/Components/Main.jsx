import React, { useEffect } from "react";
import { useState } from "react";
function Main()
{
    const[meme,setMeme] = useState({
         toptext: "When someone says React is easy",
  bottomtext: "ReAcT iS eAsY",
  imageUrl: "https://i.imgflip.com/1otk96.jpg"
    })

    const [allMemes,setAllMemes] = useState([])

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then((res)=>res.json())
        .then((data)=>setAllMemes(data.data.memes))
    },[])
    function handleChange(event)
    {
        const {value,name} = event.target;
        setMeme((prevMeme) =>({
            ...prevMeme,
            [name] : value,
        }));
    }

    function getRandomMeme(e){
        e.preventDefault();
        const randomIndex = Math.floor(Math.random()* allMemes.length);
        const url = allMemes[randomIndex].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            imageUrl:url,
        }));
    }
    return(
        <main>
            <form onSubmit={getRandomMeme}>
                <span>
                <label>
                    Top text:
                </label>
                <input
                 type="text"
                 value={meme.toptext}
                 onChange={handleChange}
                 name="toptext"
                />
                <label>
                    Bottom Text:
                   </label>
                <input
                 type="text"
                 name ="bottomtext"
                 onChange={handleChange}
                 value={meme.bottomtext}
                />
                </span>
                <button type="submit">Get a new meme image</button>
            </form>
            <div className="meme">
                <img src={meme.imageUrl} className="meme-img" alt="Meme Inge"/>
                <h2 className="meme-text top">{meme.toptext}</h2>
                <h2 className="meme-text bottom">{meme.bottomtext}</h2>
            </div>
        </main>
    )
}
export default Main;