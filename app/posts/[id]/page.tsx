import { TwoColSingleFeatureWithStats } from "components";
import API from "service";
import { IPost } from "types";
// import { notFound } from "next/navigation";
// import { useEffect, useState } from "react";

const PostDetail = async ({ params }: { params: { id: IPost["id"] } }) => {
  // const [posts, setPosts] = useState([]);
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   (async () => {
  //     const res = await API.getBlogDetail(params.id);
  //     const posts = await API.getBlogPopular({ size: 3 });
  //     setPosts(posts);
  //     setData(res);
  //     if (!res) return notFound();
  //   })();
  // }, []);

  const data = await API.getBlogDetail(params.id);
  const posts = await API.getBlogPopular({ size: 3 });
  return <TwoColSingleFeatureWithStats data={data} posts={posts} />;
};

export default PostDetail;
