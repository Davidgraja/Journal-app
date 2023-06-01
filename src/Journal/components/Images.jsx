import { useSelector } from "react-redux"
import { ImageCard } from "./ImageCard";

export const Images = () => {

    const {active} = useSelector(state => state.journal);
    
    const {imageUrl = [] } = active;
    return (

        <figure className=" mt-4 p-3  w-full  min-h-[300px] grid justify-evenly gap-2  grid-cols-personalized ">

                    
                    {
                        imageUrl.map( image => (
                            <ImageCard key={image} url={image}/>
                        ))
                    }

        </figure>
    )
}
