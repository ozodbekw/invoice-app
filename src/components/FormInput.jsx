function FormInput({ type, label, name }) {
  return (
    <label className="flex flex-col gap-[10px] mt-6">
      <span className="text-[#7E88C3] dark:text-[#DFE3FA] font-normal text-[12px] leading-[15px] ">
        {label}
      </span>
      <input
        type={type}
        name={name}
        className="border-1 border-[#DFE3FA] dark:bg-[#1E2139] dark:border-[#1E2139] rounded-[4px] focus:outline-0 py-4 px-5 text-[#0C0E16] dark:text-white font-medium text-[12px] "
        required
      />
    </label>
  );
}

export default FormInput;
