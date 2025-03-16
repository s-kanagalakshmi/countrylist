import { useState } from "react";

const Countries = ({ country, setcountry, favorite, setfavorite }) => {
    const [disabledButtons, setDisabledButtons] = useState([])

    function addcountry(id) {
        if (!favorite.includes(id)) { 
            setfavorite([...favorite, id])
            setDisabledButtons([...disabledButtons, id])
        }
    }

    return (
        <section className="flex items-center justify-center">
            <ul className="flex flex-col justify-center bg-gray-100 p-6 rounded-lg shadow-md">
                {
                    country?.map((item, index) => (
                        <li className="flex justify-between gap-20" key={index}>
                            {item}
                            <button 
                                disabled={disabledButtons.includes(item)} 
                                className={`px-4 py-2 border-2 rounded ${
                                    disabledButtons.includes(item) 
                                        ? "bg-gray-500 cursor-not-allowed" 
                                        : "bg-green-600"
                                } text-white`}
                                onClick={() => addcountry(item)}
                            >
                                {disabledButtons.includes(item) ? "Favourite" : "Favourite"}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Countries;
