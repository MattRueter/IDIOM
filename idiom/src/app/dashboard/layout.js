import { Navbar } from "@/components/Navbar";
import { Menu } from "@/components/Menu";

export const metadata = {
  title: 'Dashboard',
  description: 'Logged in user dashboard.',
}

const menuButtons=["Show folders","Show sets"];
export default function RootLayout({ children }) {

  const handleClick =() => {
    console.log("hello from Dashboard menu.")
}

 return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="flex flex-col items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
        <Menu handleClick={handleClick}buttonOptions={menuButtons}/>
        {children}
        </main>
      </body>
    </html>
  )
}
