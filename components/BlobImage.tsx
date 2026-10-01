import Image from "next/image";
import SparkleIcon from "@/components/SparkleIcon";

export default function BlobImage({
  src,
  alt,
  handwritten,
}: {
  src: string;
  alt: string;
  handwritten: string;
}) {
  return (
    <div className="blob-scene">
      <div className="blob-outline" />
      <div className="blob-image">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 85vw, 42vw"
          priority
        />
      </div>
      <SparkleIcon className="sparkle-one" />
      <SparkleIcon className="sparkle-two" size={16} />
      <p className="handwritten">{handwritten}</p>
    </div>
  );
}
