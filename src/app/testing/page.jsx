"use client";

import NdForm from "@/components/Common/Form/NdForm";
import NdInput from "@/components/Common/Form/NdInput";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";

export const couponSchema = z.object({
  name: z.string(1, { message: "Name is requred" }),
  email: z.string().email(),
  password: z.string(),
});

const page = () => {
  const handleLogin = async (values) => {
    console.log(values);
    // try {
    //    const res = await userLogin(values);
    //    if (res?.data?.accessTokeLn) {
    //       toast.success(res?.message);
    //       storeUserInfo({ accessToken: res?.data?.accessToken });
    //       // router.push("/dashboard");
    //    } else {
    //       setError(res.message);
    //       // console.log(res);
    //    }
    // } catch (err: any) {
    //    console.error(err.message);
    // }
  };

  // const user = fetchuserdata

  return (
    <div>
      <NdForm onSubmit={handleLogin} resolver={zodResolver(couponSchema)} defaultValues={{}}>
        <NdInput name="name" placeholder="enter full name" label="Full Name" />
        <NdInput name="email" placeholder="enter email" label="Full Email" />
        <NdInput type="password" name="password" placeholder="password adf" label="Password" />
        <Button type="submit">Submit</Button>
      </NdForm>
    </div>
  );
};

export default page;
