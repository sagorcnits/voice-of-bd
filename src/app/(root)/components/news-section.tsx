import NewsCard from "@/components/news-card";

interface NewsArr {
  title: string;
  image: string;
}

const newsArr: NewsArr[] = [
  {
    title: "শেষটা ভালো হলো না বার্সা-লিভারপুলের",
    image:
      "https://images.dailyamardesh.com/original_images/UEFA_Champions_League_vk5ibvu.jpg",
  },
  {
    title: "শেষটা ভালো হলো না বার্সা-লিভারপুলের",
    image:
      "https://images.dailyamardesh.com/original_images/UEFA_Champions_League_vk5ibvu.jpg",
  },
  {
    title: "শেষটা ভালো হলো না বার্সা-লিভারপুলের",
    image:
      "https://images.dailyamardesh.com/original_images/UEFA_Champions_League_vk5ibvu.jpg",
  },
  {
    title: "শেষটা ভালো হলো না বার্সা-লিভারপুলের",
    image:
      "https://images.dailyamardesh.com/original_images/UEFA_Champions_League_vk5ibvu.jpg",
  },
  {
    title: "শেষটা ভালো হলো না বার্সা-লিভারপুলের",
    image:
      "https://images.dailyamardesh.com/original_images/UEFA_Champions_League_vk5ibvu.jpg",
  },
  {
    title: "শেষটা ভালো হলো না বার্সা-লিভারপুলের",
    image:
      "https://images.dailyamardesh.com/original_images/UEFA_Champions_League_vk5ibvu.jpg",
  },
  {
    title: "শেষটা ভালো হলো না বার্সা-লিভারপুলের",
    image:
      "https://images.dailyamardesh.com/original_images/UEFA_Champions_League_vk5ibvu.jpg",
  },
  {
    title: "শেষটা ভালো হলো না বার্সা-লিভারপুলের",
    image:
      "https://images.dailyamardesh.com/original_images/UEFA_Champions_League_vk5ibvu.jpg",
  },
  {
    title: "শেষটা ভালো হলো না বার্সা-লিভারপুলের",
    image:
      "https://images.dailyamardesh.com/original_images/UEFA_Champions_League_vk5ibvu.jpg",
  },
];

const NewsSection = () => {
  return (
    <section className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-16">
      {newsArr.map((news, id) => (
        <NewsCard key={id} news={news} />
      ))}
    </section>
  );
};

export default NewsSection;
