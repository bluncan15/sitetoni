const CategoryItem = ({id, src, name, description}) => {
  return (
    <a href="/sitetoni/products" className="text-black cursor-pointer">
      <div className="overflow-hidden border-2 border-[#0ac0ac] rounded-lg p-4 shadow-sm  h-[300px]">
        <img
          src={src}
          alt={name}
          className="w-full h-48 object-cover mb-2 rounded hover:scale-110 transition ease-in-out duration-500 "
        />
        <p className="pt-3 pb-1 text-sm ">{name}</p>
        <p className="text-sm font-medium">
          {description}
        </p>
      </div>
    </a>
  );
}

export default CategoryItem;