// import dynamic from "next/dynamic"
// import { useState, useEffect } from "react"
import ExperiencesList from "../components/ExperiencesList"

// const InvitationCheck = dynamic(() => import("../components/InvitationCheck"), {
//     ssr: false
// })

export default function Home() {

    return <div><ExperiencesList /> </div>
}
