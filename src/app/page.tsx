// "use client"
// import {useRouter} from "next/navigation"
// import {useEffect} from "react"

// export default function HomePage() {
//   const router = useRouter()

//   useEffect(() => {
//     router.replace("/sign-in")
//   }, [router])

//   // default landing page for future use

//   return null
// }

import Link from "next/link"

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/about'>About</Link>
    </div>
  )
}
