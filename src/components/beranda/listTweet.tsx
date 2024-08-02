import { getTweet } from "@/libs/actions/tweet"
import { CardTweet } from "./card"

export const ListTweet = async () => {
    const { result } = await getTweet()
    
    return (
        <div>
            {
                result.tweets.map((item) => {
                    return (
                        <div key={item.id}>
                            <CardTweet data={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}