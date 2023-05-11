const InputField = ({ placeholder, type, name, title }) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-[#444444] font-semibold text-base" htmlFor="">
        {title}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        className="border py-2 px-4 border-[#E8E8E8] rounded-md"
        type={type}
      />
    </div>
  );
};

export default InputField;
