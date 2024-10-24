import Image from "next/image";

interface CardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ src, alt, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={src}
        alt={alt}
        className="w-20 h-20 md:w-28 md:h-28 border bg-opacity-35 bg-gray-400 p-4 rounded-3xl shadow-xl"
        width={50}
        height={50}
      />
      <h1 className="mt-5 md:mt-10 font-bold">{title}</h1>
      <p className="max-w-xs">{description}</p>
    </div>
  );
};

export default Card;
