import { TwoColSingleFeatureWithStats } from "components";
import API from "service";
import { IPost } from "types";

const PostDetail = async ({ params }: { params: { id: IPost["id"] } }) => {
  console.log(params);
  const res = await API.getBlogDetail(params.id);
  const resPost = await API.getBlogPopular({ size: 3 });
  return (
    <TwoColSingleFeatureWithStats
      data={res.data || {}}
      posts={resPost.data || []}
    />
  );
};

export default PostDetail;
