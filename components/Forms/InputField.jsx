export default function InputField({
  name = "",
  type = "text",
  label = "Write something",
  value = "",
  placeholder = "Write something",
  isDisabled = false,
  isRequired = false,
  isReadOnly = false,
  min = 0,
  max = 10000000,
  extraClassName = "",
  inputClassName = "",
  labelClassName = "",
  onChange = () => {},
  onFocus = () => {},
}) {
  return (
    <div className={`w-full flex flex-col gap-1 ${extraClassName}`}>
      <label
        htmlFor={name}
        className={`text-sm font-semibold text-paragraph ${labelClassName}`}
      >
        {label}
      </label>
      <input
        className={`w-full text-stroke px-3 py-2 border rounded-sm outline-none ring-0 focus:border-primary ${inputClassName}`}
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        required={isRequired}
        readOnly={isReadOnly}
        min={min}
        max={max}
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
}
