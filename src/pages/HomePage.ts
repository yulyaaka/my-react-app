import { observer } from "mobx-react-lite";
import { PostsListWithLoader } from "../components/PostList";
import { useGetPostsQuery } from "../services/postsApi_service";
import React from "react";


export const HomePage = observer ((): React.ReactElement | null => (
    // const { data: posts, isloading } = useGetPostsQuery();
    // const limitedPosts = posts?.slice(0, 3);

    return <PostsListWithLoader isLoading={isLoading} posts={limitedPosts} />
));