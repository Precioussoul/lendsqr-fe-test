"use client"
import {useRouter} from "next/navigation"
import {useEffect} from "react"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/sign-in")
  }, [router])

  // default landing page for future use instances

  return null
}
