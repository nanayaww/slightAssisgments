export default function Button({ icon, alt, value }) {
  return (
    <div className=" w-full">
      <button
        className={` w-full mb-3.5 px-5 py-3 rounded-full flex items-center justify-center gap-5  font-header font-bold text-base box-border border-1 border-[#e7e7e9] hover:border-[dbdbde] bg-[#fff] ${
          value === "Sign In"
            ? "bg-blueBlack text-white hover:bg-[#727088]"
            : null
        } cursor-pointer`}
        type="submit"
      >
        {value === "Sign in with Google" ? (
          <img className="w-3.5" src={icon} alt={alt}></img>
        ) : null}{" "}
        {value}
      </button>
    </div>
  );
}
