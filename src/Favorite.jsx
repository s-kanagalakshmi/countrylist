const Favorite = ({ favorite, setfavorite }) => {
    function removeFromFavorites(id) {
        setfavorite(favorite.filter(item => item !== id));
    }

    return (
        <section className="flex items-center justify-center">
            <ul className="flex flex-col justify-center bg-gray-100 p-6 rounded-lg shadow-md">
                {favorite.length > 0 ? (
                    favorite.map((item, index) => (
                        <li key={index} className="flex justify-between gap-10 p-2 border-b">
                            {item}
                            <button 
                                className="px-4 py-2 bg-red-500 text-white rounded" 
                                onClick={() => removeFromFavorites(item)}
                            >
                                Remove
                            </button>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500">No favorite countries yet.</p>
                )}
            </ul>
        </section>
    );
};

export default Favorite;
