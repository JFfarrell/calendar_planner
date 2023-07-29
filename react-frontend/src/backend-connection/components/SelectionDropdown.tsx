import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  option_type: string;
  options: string[];
  errors: FieldErrors;
  register: UseFormRegister<{
    description: string;
    activity_duration: number;
    category: "Run" | "Bike" | "Swim" | "Other";
  }>;
}

const SelectionDropdown = ({ options, errors, register, option_type }: Props) => {
  return (
    <div className="mb-3">
      <label htmlFor="option" className="form-label">
        {option_type}
      </label>
      <select {...register("category")} id="option" className="form-select">
        <option value=""></option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors.category && <p className="text-danger">{errors.root?.message}</p>}
    </div>
  );
};

export default SelectionDropdown;
