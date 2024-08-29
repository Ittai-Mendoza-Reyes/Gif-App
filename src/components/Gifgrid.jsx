import { GifItem } from "./GifItem.jsx";
import { useFetchGif } from "../hooks/useFetchGif.js";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGif(category);

    return (
        <>
            <h3>{category}</h3>
            {
                // isLoading
                // ? (<h5>Cargando imagenes...</h5>)
                // :null
                isLoading && (<h5>Cargando imagenes...</h5>)
            }
            <div className="card-grid">
                {images.map((image) => (
                    <GifItem 
                    key={image.id}
                    {...image}
                    />
                ))}
            </div>
        </>
    )
}