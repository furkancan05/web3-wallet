import React from "react";
import Image from "next/image";

// components
import BANNER from "~/assets/banner.svg";
import Container from "~/components/shared/Container";

export default function Banner() {
  return (
    <Container>
      <div className="flex flex-col w-fit h-fit mx-auto items-center md:flex-row uppercase gap-20 mt-20">
        <p className="uppercase text-3xl font-black h-fit">
          Connect your wallet to <br /> view your portfolio!
        </p>

        <Image alt="" src={BANNER} className="w-[300px] h-[300px]" />
      </div>
    </Container>
  );
}
