"use client";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import login from "../action/login";

import Button from "@/components/Buttons/Button";
import InputField from "@/components/Forms/InputField";

const schema = object({
  email: string().email("Provide a valid email").required("Provide an email"),
  password: string()
    .required("Provide a password")
    .min(8, "Password should be more or equal 8 characters."),
});

export default function LoginForm() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const result = await login(data.email, data.password);

    if (result.error) {
      toast.error(result.error.message);
    } else {
      if (result.data.user.role === "user") {
        router.push("/me");
      }
      if (result.data.user.role === "admin") {
        router.push("/we");
      }
      toast.success("Login successful");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-main mx-auto max-w-xl mt-12 px-6 py-4 rounded flex flex-col gap-3"
    >
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputField
            name="email"
            type="email"
            placeholder="Email"
            label="Email"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputField
            name="password"
            type="password"
            label="Password"
            value={value}
            placeholder="XXXXXXXXXXX"
            onChange={onChange}
            onBlur={onBlur}
            error={errors.password?.message}
          />
        )}
      />

      <Button isLoading={isSubmitting} type="submit">
        Login
      </Button>
    </form>
  );
}
