import { ShoppingCartIcon } from "../assets/Icons";

const ShoppingCart = () => {
  return (
    <div className="relative">
      <ShoppingCartIcon width={"1.5em"} height={"1.5em"} />
      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs">
        1
      </span>
    </div>
  );
};

export default ShoppingCart;
