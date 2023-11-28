import Image from "next/image";

const LatestPost = () => {
  return (
    <div className="border-2 border-solid border-green-400 m-4 w-[200px]">
      <Image
        src={
          "https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg"
        }
        width={200}
        height={200}
        alt="course-image"
      ></Image>
      <ul>
        <li className="text-bold">Title</li>
        <li>description</li>
        <li>publish date</li>
      </ul>
    </div>
  );
};

export default LatestPost;
