export default function CardItems(props) {
  return (
    <>
      <div className="p-10 bg-orange-200">
        <h3 className="text-orange-400 font-bold mb-4">{props.id}</h3>
        <div className="bg-white rounded-lg shadow-2xl md:flex">
          {props.id === "Starter" && (
            <img
              src="/starters.jpg"
              alt="Food items"
              className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          )}
          {props.id === "Dessert" && (
            <img
              src="/desserts.png"
              alt="Food items"
              className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          )}
          {props.id === "Side Dish" && (
            <img
              src="/sidedish.jpg"
              alt="Food items"
              className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          )}
          {props.id === "Main Course" && (
            <img
              src="/maincourse.jpg"
              alt="Food items"
              className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          )}
          <div className="p-6">
            <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">
              {props.id} Items
            </h2>

            <p className="text-orange-700">{props.data[0]}</p>
            <p className="text-orange-700">{props.data[1]}</p>
            <p className="text-orange-700">{props.data[2]}</p>
            <p className="text-orange-700">{props.data[3]}</p>
          </div>
        </div>
      </div>
    </>
  );
}
