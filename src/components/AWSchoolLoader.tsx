"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AWSchoolLoader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-paper">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        <Image
          src="/assets/favicon.png"
          alt="Amoxtli School"
          width={120}
          height={120}
          priority
        />
      </motion.div>
    </div>
  );
};

export default AWSchoolLoader;
