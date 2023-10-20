"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Profile from "@components/Profile"
import { useSearchParams } from "next/navigation";

const page = ({ params }) => {

  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const router = useRouter();
  const { data: session } = useSession();

  const [posts, setPosts ] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (params?.id) fetchPosts();

  }, [params.id]);

  console.log(posts)

  return (
    <Profile 
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={posts}
  />
  )
}

export default page