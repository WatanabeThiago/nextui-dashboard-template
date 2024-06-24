import { Card as NextUICard, CardHeader, Image } from "@nextui-org/react";


type CardProps = {
    description: string
    title: string
    main: string

    src: string
    alt: string
}
export default function Card({
    description,
    main,
    title,

    src,
    alt
}: CardProps) {
    return (
        <NextUICard
            isPressable
            className="w-full h-[150px] col-span-12  shadow-lg">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/80 uppercase font-bold">{description}</p>
                <h4 className="text-white font-medium text-xl">{title}</h4>

                <h4 className='mt-0 text-white text-5xl  font-bold'>
                    {main}
                </h4>
            </CardHeader>

            <Image
                removeWrapper
                isBlurred
                alt={alt}
                className="z-0 w-full h-full object-cover filter brightness-75"
                src={src}
            />

        </NextUICard>
    )
}