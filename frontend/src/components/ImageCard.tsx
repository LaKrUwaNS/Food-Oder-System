// src/components/serviceImageCard.tsx
import Image from 'next/image';

interface Props {
    src: string;
    alt: string;
}

const ImageCard = ({ src, alt }: Props) => {
    return (
        <div className="rounded-xl border-2 border-orange-400 overflow-hidden shadow-lg max-w-[180px]">
            <Image
                src={src}
                alt={alt}
                width={512}
                height={512}
                className="object-cover w-full h-auto"
            />
        </div>
    );
};

export default ImageCard;


