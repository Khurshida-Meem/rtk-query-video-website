import { useGetVideosQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import VideoLoader from "../ui/loaders/VideoLoader";
import Video from "./Video";

export default function Videos() {

  const { data: videos, isLoading, isError } = useGetVideosQuery();

  let content = null;

  if (isLoading) {
    content = (
      <>
        <VideoLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="An error occured" />;
  }

  if (!isLoading && !isError && videos?.length === 0) {
    content = <Error message="No Videos Found" />;
  }

  if (!isLoading && !isError && videos?.length > 0) {
    content = videos?.map((video) => <Video key={video.id} video={video} />);
  }

  return content;
}
