import UserProfile from "../components/User/UserProfile";
import VideoItem from "../components/Video/VideoItem";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <VideoItem />,
    },
    {
        path: "/user",
        element: <UserProfile />,
    },
    // {
    //     path: "/videos",
    //     element: <VideoItem />,
    // },
]);

export default router;
