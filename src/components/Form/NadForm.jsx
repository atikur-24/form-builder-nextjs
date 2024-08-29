import { Form } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";

const NadForm = ({ children, onSubmit, resolver, defaultValues }) => {
  const formConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;

  const submit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </Form>
  );
};

export default NadForm;
