import { ITweet } from "@/types/tweet";
import { CreateTweet } from "@/types/user";
import { getCookie } from "./server";

export const getTweet = async () => {
    interface Response {
        status: string;
        tweets: ITweet[]
    }
    const res = await fetch('http://localhost:2000/api/tweets', {
        next: { revalidate: 60, tags: ['tweets'] }
        // cache: 'no-cache'
    })
    const response: Response = await res.json()

    return { result: response, ok: res.ok }
}

export const createTweet = async (data: CreateTweet) => {
    const token = await getCookie('token')
    const res = await fetch(`http://localhost:2000/api/tweets`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token?.value}`
        },
        method: "POST",
        body: JSON.stringify(data)
    })
    const response = await res.json()

    return { result: response, ok: res.ok }
}