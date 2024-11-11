import Image from "next/image";
import { Button } from "../button";

export default function Slider() {
    let home_images_urls = ['/home/Slides_1.png', '/home/Slides_2.png', '/home/Slides_3.png']

    return (
        <div className="flex justify-center">
            <Image 
                src='/home/Slides_1.png' 
                alt='slider image 1'
                width={1220}
                height={1220}
            />
        </div>

    )
}