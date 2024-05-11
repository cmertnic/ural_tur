'use client'
import style from './Block.module.scss'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ROUTER } from "@/router/router.enum";
import Swipper from "@/features/swipper/swipper";
const Actions = () => {
  return (
   
      <div className={style.Block}>
        <div className={style.Block_row}>
         <Swipper></Swipper>
          </div>   
        </div>


  );
};

export default Actions;