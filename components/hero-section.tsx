"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center min-h-[50vh] ">
      <div className="flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="space-y-4 text-center"
        >
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl bg-clip-text text-[#2C3539]">
            FRONT-END DEVELOPER
          </h1>
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl bg-clip-text text-[#2C3539]">
            박승재
          </h1>
          <h2 className="text-md font-medium md:text-lg lg:text-xl text-[#696969]">
            안녕하세요 저는 프론트엔드 개발자를 꿈꾸는 대학생 박승재라고 합니다
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
