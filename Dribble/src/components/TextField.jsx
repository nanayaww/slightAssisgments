export default function TextField({ label, id, value }) {
  return (
    <div className="w-full mb-5 text-blueBlack">
      {value == "Password" ? (
        <div className="flex justify-between mb-1.5">
          <label className=" text-lg font-bold font-header" htmlFor={label}>
            {value}
          </label>{" "}
          <span>
            <a className=" text-blueBlack" href="#">
              Forgot?
            </a>
          </span>
        </div>
      ) : (
        <label
          className=" block font-bold font-header mb-1.5 text-lg "
          htmlFor={label}
        >
          {value}
        </label>
      )}
      <input
        className="box-border w-full p-5 rounded-2xl border-1 border-[rgba(0,0,0,0.1)]  hover:shadow-[0_0_0_4px_#ff64d81a] focus:shadow-[0_0_0_4px_#ff64d81a] focus:outline-none "
        type="text "
        id={id}
      />
    </div>
  );
}
