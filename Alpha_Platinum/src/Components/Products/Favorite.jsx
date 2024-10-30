import { FaRegHeart, FaCartPlus } from "react-icons/fa";
// import { addFavorite, removeFavorite } from "../Redux/FavoriteSlice";
import { useSelector } from "react-redux";

const Favorite = () => {

    //  const data_Fav = useSelector((state) => state.favorite)
       console.log(data_Fav)

  return (
    <>
      <div className="heading  ">
        <div className="content flex justify-between items-center bg-[#addadd] border-1 border-white h-20 p-10">
          <h1 className="text-xl font-semibold">FAVORITE</h1>
          <div className="flex ">
            <p>Home /</p>
            <p>Favorite</p>
          </div>
        </div>
      </div>

      <div className="head p-6 rounded-md border-2">
        <h1 className="bg-[#49A6A2] ">Favorite</h1>
        <div className="cart-box">
          <div className="mx-4 flex items-center justify-center flex-col border-2 border-grey w-auto rounded-md h-[300px] relative">
            <img
              // src={product.image}
              // alt={product.name}
              className="h-36 w-40 cursor-pointer"
              // onClick={() => onImageClick(product.id)}
            />
            <div className="flex gap-16 w-64 absolute top-3 left-2">
              {/* <p className="bg-[#49A6A2] text-white rounded-r-lg text-md px-2">{product.min_max_price.discount_in_percentage}% OFF</p> */}
              <FaRegHeart className="ml-24 text-gray-500" />
            </div>
            <div className="flex flex-col items-center transform hover:translate-y-[-4px] transition-transform duration-200 ease-in-out">
              {/* <p className="p-1 text-md mt-5">{product.name}</p> */}
              {/* <p className="text-lg">₹{product.min_max_price.max_special_price.toFixed(2)}</p> */}
              <button
                className="flex gap-2 items-center active:scale-50 rounded-lg bg-[#49A6A2] text-white py-1 px-2"
                // onClick={() => onAddToCart(product)} // Trigger the add to cart function
              >
                <FaCartPlus />
                <p>Add to Cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorite;
