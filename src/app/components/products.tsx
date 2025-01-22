"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./cards/cards";
import { TextGenerateEffect } from "./textgen/text";
import Link from "next/link";
import { Lens } from "./lens/lens";
export function Products() {
    const [hovering, setHovering] = useState(false);
  return (
    <>
    <TextGenerateEffect words="Products" className="text-center mt-[10rem] text-9xl"/>
    <div className="flex flex-row gap-5 flex-wrap justify-center items-center" id="Products">    
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         Mens
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
        <Lens hovering={hovering} setHovering={setHovering}>
          <Image
            src= "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/jean/jean jacket.webp"
            height="1000"
            width="1000"
            className="h-[425px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          </Lens>
        </CardItem>
      </CardBody>
    </CardContainer>
{/*---------------------------------------------------------------------------------------------------------------*/}
<CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         Womens
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
        <Lens hovering={hovering} setHovering={setHovering}>
          <Image
            src= "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/women/6.jpg"
            height="1000"
            width="1000"
            className="h-[425px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          </Lens>
        </CardItem>
      </CardBody>
    </CardContainer>
    {/*---------------------------------------------------------------------------------------------------------------*/}
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         Sneakers
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
        <Lens hovering={hovering} setHovering={setHovering}>
          <Image
            src= "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/sneaker/5.webp"
            height="1000"
            width="1000"
            className="h-[425px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          </Lens>
        </CardItem>
      </CardBody>
    </CardContainer>
    </div>
    </>
  );
}
