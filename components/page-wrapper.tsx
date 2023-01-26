"use client"

import { motion } from "framer-motion";
import React from 'react'
import classNames from "classnames";


export const PageWrapper = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <motion.div
      initial={{ opacity: 0,  }}
      animate={{ opacity: 1,  }}
      transition={{ duration: 0.75, ease: "easeInOut"}}
      exit={{ opacity: 0}}
      className={classNames("", className)}
    >
      {children}
    </motion.div>
  );