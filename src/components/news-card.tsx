import Image from "next/image";

interface NewsCardProps {
  news: {
    title: string;
    image: string;
  };
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <div className="space-y-4 p-4 border rounded-md cursor-pointer">
      <div className="h-[200px] relative">
        <Image
          className="object-cover rounded-md"
          fill
          src={news.image}
          alt=""
        />
      </div>
      <p>{news.title}</p>
    </div>
  );
};

export default NewsCard;
