import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function CarouselBlog({carouselData}) {
  return (
    <Carousel className="rounded-xl">
        {
            carouselData.map((data, index) => (
            
                <figure className="relative h-96 w-full">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
src={data.image}        alt="Cover"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray" className="font-body-plex">
            {data.title}
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            {data.createdAt}
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
          {}
        </Typography>
      </figcaption>
    </figure>
           
                
            ))
        }
    
  
       
    
    </Carousel>
  );
}

