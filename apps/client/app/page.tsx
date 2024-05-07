"use client";

import { signIn } from "next-auth/react";

export default function Page(): JSX.Element {
  const onClick = async () => {
    const session = await signIn("kakao", {
      redirect: true,
      callbackUrl: "/",
    });
    console.log(session);
  };
  return (
    <>
      <main>메인 페이지 입니다.</main>
    </>
  );
}
