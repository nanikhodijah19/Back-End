import { UserInput, UserLogin } from "@/types/user"

export const registerUser = async (data: UserInput) => {
    const res = await fetch('http://localhost:2000/api/auth', {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    })

    return res.json()
}

export const loginUser = async (data: UserLogin) => {
    const res = await fetch('http://localhost:2000/api/auth/login', {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    })
    const response = await res.json()

    return { result: response, ok: res.ok }
}