import { useState, useEffect } from 'react'

const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })

    const [allMemeImages, setMemeImages] = useState([])


    useEffect ( () => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(memeData => setMemeImages(memeData.data.memes))
    }, [])


    const randomImage = () => {
        const dataArray = allMemeImages
        let randomURL = dataArray[Math.floor(Math.random() * dataArray.length)].url
        setMeme(()=> {
            return {
                ...meme,
                randomImage: randomURL
            }
        })
       
    }

    const handleForm = (event) => {
        const {name, value} = event.target
        setMeme( (prevMeme)=>{
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <>        
        <div className="form">
            <input className="form--input" onChange={handleForm} name="topText" type="text" value={meme.topText}/>
            <input className="form--input" onChange={handleForm} name="bottomText" type="text" value={meme.bottomText}/>
            <button onClick={randomImage} className="form--button">Get a new meme image</button>
        </div>
        <div className="meme">
                <h1 className='centeredTop'>{meme.topText}</h1>
                <h2 className='centeredBot'>{meme.bottomText}</h2>
                <img className="form--image" alt="ImageGenerated" src={meme.randomImage} />
            </div>
        </>


    )
}

export default Meme