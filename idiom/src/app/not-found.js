import Image from "next/image"
import logo from '../../public/logo.svg'

export default function notFound () {
    return(
        <main className="flex flex-col justify-center items-center h-screen bg-pink-300 text-white">
            <div className="flex flex-col items-center justify-between h-1/4">
                <Image
                    src={logo}
                    alt="logo"
                    width={100}
                    height={100}
                    priority
                />
                <h1>404 Not found</h1>
            </div>
        </main>
    )
}