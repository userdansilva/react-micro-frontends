import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

interface FormValues {
  username: string;
}

function Login() {
  const { register, handleSubmit } = useForm<FormValues>({
    mode: "onChange",
  });

  const { login } = useAuth();

  return (
    <div className="th-flex th-items-center th-justify-center th-h-screen th-bg-slate-100">
      <div className="th-bg-white th-p-10 th-rounded-lg th-space-y-6">
        <h1 className="th-font-bold th-text-2xl th-text-slate-900">
          MF POC App
        </h1>

        <form className="th-flex th-flex-col th-gap-5" onSubmit={handleSubmit(login)}>
          <input
            type="text"
            placeholder="github username"
            className="th-border-2 th-border-slate-200 th-w-60 th-p-3 th-rounded-md"
            {...register("username")}
          />

          <button
            type="submit"
            className="th-bg-slate-800 th-text-white th-p-3 th-rounded-lg"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
