import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../Schemas";
import SelectionDropdown from "./SelectionDropdown";

type ExpenseFormData = z.infer<typeof schema>;
const categories = ["Run", "Bike", "Swim", "Other"];

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ActivityForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="Activity Duration" className="form-label">
          Activity Duration
        </label>
        <input
          {...register("activity_duration", { valueAsNumber: true })}
          id="Activity Duration"
          type="number"
          className="form-control"
        />
        {errors.activity_duration && (
          <p className="text-danger">{errors.activity_duration.message}</p>
        )}
      </div>
      <SelectionDropdown
        option_type="Activity Type"
        options={categories}
        errors={errors}
        register={register}
      ></SelectionDropdown>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ActivityForm;
