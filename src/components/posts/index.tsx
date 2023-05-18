import { useMediaQuery } from "../../hooks";

export interface PostProps {
  title: string;
  date: string;
  time: string;
  image: string;
  url: string;
}

interface Props {
  posts: PostProps[];
}

const Posts = ({ posts }: Props) => {
  const isMobile = useMediaQuery(728);

  return (
    <div
      className={
        isMobile ? "flex flex-col gap-[10px]" : "grid grid-cols-3 gap-[10px]"
      }
    >
      {posts.map((post, index) => (
        <a
          href={post.url}
          key={index}
          className="cursor-pointer"
          title={post.title}
        >
          <div className={isMobile ? "flex row gap-2" : "flex flex-col gap-1"}>
            <img
              src={post.image}
              alt={post.title}
              height={isMobile ? "100px" : "132px"}
              width={isMobile ? "100px" : "235px"}
              style={
                isMobile
                  ? {
                      height: "100px",
                      width: "100px",
                      borderRadius: "2px",
                      objectFit: "cover",
                    }
                  : {
                      height: "132px",
                      width: "235px",
                      borderRadius: "2px",
                      objectFit: "cover",
                    }
              }
            />
            <div className="flex flex-col">
              <span className="flex font-['Roboto'] text-sm text-[#666]">
                {[post.time, post.date].join(" ")}
              </span>
              <p className="font-['Merriweather'] text-sm text-[#004071] leading-[22px] hover:underline">
                {post.title}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Posts;
