"use client";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById("content-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCTA = () => {
    const element = document.getElementById("cta-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroHighlight
      containerClassName="min-h-screen"
      className="flex flex-col items-center justify-center px-4 py-20 md:px-8"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              staggerChildren: 0.2,
            },
          },
        }}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          Добро пожаловать в{" "}
          <Highlight className="text-black dark:text-white">
            будущее
          </Highlight>
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-8 text-lg text-muted-foreground md:text-xl"
        >
          Современное решение для вашего бизнеса. Инновационные технологии,
          которые помогут вам достичь новых высот.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            size="lg"
            onClick={scrollToCTA}
            className="w-full sm:w-auto"
          >
            Начать сейчас
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContent}
            className="w-full sm:w-auto"
          >
            Узнать больше
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </HeroHighlight>
  );
}

