import react from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';


const category = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Data Scientist",
    "Graphic Designer",
    "Data Entry",
    "Content Writing",
    "Copy Writing"
]

const CategoryCarousel = () => {
    return (
        <div>
            <Carousel
            className="w-full max-w-xl mx-auto my-20"
            opts={{
                loop: true, // enables infinite looping
            }}
        >
            <CarouselContent className='p-4 gap-4'>
                {category.map((cat, index) => (
                    <CarouselItem
                        className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
                        key={index}
                    >
                        <Button variant="secondary" className="w-full rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            {cat}
                        </Button>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 z-10 flex items-center justify-center w-10 h-full bg-white rounded-l-lg shadow-md">
                <span className="sr-only">Previous</span>
            </CarouselPrevious>
            <CarouselNext className="absolute right-0 z-10 flex items-center justify-center w-10 h-full bg-white rounded-r-lg shadow-md">
                <span className="sr-only">Next</span>
            </CarouselNext>
        </Carousel>

        </div>
        
    )
}

export default CategoryCarousel;