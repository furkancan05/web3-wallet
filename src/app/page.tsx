"use client";

import { redirect } from "next/navigation";
import React from "react";

export default function Home() {
  const userAddress = "asdasd";

  React.useEffect(() => {
    if (userAddress) return redirect("/portfolio");
  }, []);

  return <></>;
}
