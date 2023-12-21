import Image from "next/image"
import logo from '../../public/logo.svg'
import errorImg from '../../public/404.svg'

export default function notFound () {
    return(
        <main className="flex flex-col items-center h-screen bg-white text-black p-6">
            <div className="flex flex-col items-center justify-between">
                <Image
                    src={logo}
                    alt="logo"
                    width={100}
                    height={100}
                />
                <Image
                    src={errorImg}
                    alt="not found cartoon"
                    width={500}
                    height={500}
                    priority
                />
                <h1>Error. Page not found</h1>
            </div>
        </main>
    )
}