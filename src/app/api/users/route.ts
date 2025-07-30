import {generateMockUsers} from "@/lib"
import {NextResponse} from "next/server"

const users = generateMockUsers(500)

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const userId = searchParams.get("id")
  console.log({userId})
  if (userId) {
    const user = users.find((u) => u.id === userId)
    if (!user) {
      return NextResponse.json({error: "User not found"}, {status: 404})
    }
    return NextResponse.json(user)
  }

  return NextResponse.json(users)
}
