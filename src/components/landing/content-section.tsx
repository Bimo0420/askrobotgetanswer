"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Rocket,
  Users,
  Globe,
} from "lucide-react";

const contentItems = [
  {
    id: "item-1",
    icon: Zap,
    question: "Что делает ваш продукт уникальным?",
    answer:
      "Наш продукт использует передовые технологии искусственного интеллекта и машинного обучения для решения сложных бизнес-задач. Мы предлагаем интуитивный интерфейс, который легко интегрируется с существующими системами и масштабируется под любые потребности вашего бизнеса.",
  },
  {
    id: "item-2",
    icon: Shield,
    question: "Насколько безопасны ваши решения?",
    answer:
      "Безопасность — наш приоритет. Мы используем шифрование end-to-end, регулярно проходим аудиты безопасности и соответствуем международным стандартам защиты данных, включая GDPR и ISO 27001. Все данные хранятся в защищенных центрах обработки данных с многоуровневой системой защиты.",
  },
  {
    id: "item-3",
    icon: Rocket,
    question: "Как быстро можно начать работу?",
    answer:
      "Вы можете начать работу уже сегодня! Наша платформа настроена за несколько минут. Мы предоставляем подробную документацию, видео-уроки и персональную поддержку для быстрого старта. Большинство наших клиентов полностью настраивают систему в течение первого дня.",
  },
  {
    id: "item-4",
    icon: Users,
    question: "Какая поддержка доступна?",
    answer:
      "Мы предлагаем круглосуточную техническую поддержку через email, чат и телефон. Наша команда экспертов готова помочь вам в любое время. Также доступны обучающие вебинары, база знаний и персональные консультации для вашей команды.",
  },
  {
    id: "item-5",
    icon: Globe,
    question: "Работаете ли вы с международными клиентами?",
    answer:
      "Да, мы работаем с клиентами по всему миру. Наша платформа поддерживает множество языков и валют, соответствует различным региональным требованиям и стандартам. Мы гордимся нашим глобальным присутствием и опытом работы с международными компаниями.",
  },
];

export function ContentSection() {
  return (
    <section
      id="content-section"
      className="container mx-auto px-4 py-20 md:px-8"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              staggerChildren: 0.1,
            },
          },
        }}
        className="mx-auto max-w-4xl"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-muted-foreground">
            Узнайте больше о наших решениях и возможностях
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {contentItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <AccordionItem
                  value={item.id}
                  className="rounded-lg border px-6 transition-colors hover:bg-accent/50"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-left font-semibold">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <div className="pl-14">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </motion.div>
    </section>
  );
}

