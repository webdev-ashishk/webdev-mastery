import Image from "next/image";

const LatestPost = () => {
  return (
    <div className="hover:scale-y-105 rounded-lg  m-4 w-[200px] pt-1 border-2 hover:bg-gradient-to-r from-purple-400">
      <Image
        className="rounded-lg"
        src={
          "https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg"
        }
        width={200}
        height={200}
        alt="course-image"
      ></Image>
      <ul className="px-2">
        <li className="font-bold">
          TATA COMMUNICATIONS is Hiring 2024, 2023, 2022, 2021, 2020, 2019 &
          2018 Batch || Off Campus Drive
        </li>
        <li>30/11/2023</li>
      </ul>
    </div>
  );
};

export default LatestPost;
