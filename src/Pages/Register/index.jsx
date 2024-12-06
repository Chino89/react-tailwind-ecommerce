import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    formState: { errors, dirtyFields, touchedFields },
    handleSubmit,
  } = useForm({
    defaultValues: {
      mode: "onChange",
      checkbox: false,
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2>Hello, and Wellcome to Shopi!</h2>
      <div className="w-80 h-auto border border-black rounded-lg p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2"
        >
          <label htmlFor="email">Email:</label>
          <input
            className="border border-slate-400 outline-green-700 rounded-lg p-1"
            {...register("email", {
              required: "email is required",
              pattern: {
                value:
                  /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)\.)+[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="yourmail@gmail.com"
          />
          <p className="text-red-700 text-sm text-center">
            {errors.email?.message}
          </p>
          {dirtyFields.email ||
            (touchedFields.email && (
              <p className="text-red-700 text-sm text-center">
                Remember to complete this field.
              </p>
            ))}
          <label htmlFor="Password">Password:</label>
          <input
            className="border border-slate-400 outline-green-700 rounded-lg p-1"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 caracters" },
            })}
            type="password"
            placeholder="Tu contraseña"
          />
          <p className="text-red-700 text-sm text-center">
            {errors.password?.message}
          </p>
          {dirtyFields.password ||
            (touchedFields.password && (
              <p className="text-red-700 text-sm text-center">
                Remember to complete this field.
              </p>
            ))}
          <div className="flex gap-1">
            <input
              type="checkbox"
              {...register("checkbox", {
                required: "You should check our terms and conditions",
              })}
            />
            <label htmlFor="checkbox"> Our terms and conditions</label>
          </div>
          <p className="text-red-700 text-sm text-center">
            {errors.checkbox?.message}
          </p>
          <button className="py-2 w-full rounded-lg bg-green-300">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
