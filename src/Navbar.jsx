
import { Navigate, useNavigate } from "react-router-dom"
const Navbar = () => {
    const navigate=useNavigate()
    return (
        <>
            <h1 className='text-5xl font-bold text-center text-red-600 '>Countries List</h1>
            <nav className='bg-amber-400'>
                <ul className='flex justify-center gap-5 p-4 underline'>
                    <li onClick={() => navigate("/countries")}>List Of Countries</li>
                    <li onClick={()=>navigate("/favorite")}>My Favourite Country List</li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar


