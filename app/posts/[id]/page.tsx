import { TwoColSingleFeatureWithStats } from "components";
import API from "service";
import { IPost } from "types";
import { notFound } from "next/navigation";

const PostDetail = async ({ params }: { params: { id: IPost["id"] } }) => {
  const res = await API.getBlogDetail(params.id);
  const resPost = await API.getBlogPopular({ size: 3 });
  if (!res) return notFound();

  return (
    <TwoColSingleFeatureWithStats data={res || {}} posts={resPost || []} />
  );
};

export default PostDetail;
