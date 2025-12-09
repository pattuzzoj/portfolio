import { useTranslation } from "react-i18next";
import { Tabs } from "@ark-ui/react";
import CardTech from "@/features/main/components/card/card-tech";
import Astro from "@/shared/assets/icons/Astro.svg";
import Nextjs from "@/shared/assets/icons/Next.js.svg";
import ReactIcon from "@/shared/assets/icons/React.svg";
import Solidjs from "@/shared/assets/icons/Solid.js.svg";
import Tailwind from "@/shared/assets/icons/Tailwind CSS.svg";
import Nestjs from "@/shared/assets/icons/Nest.js.svg";
import Express from "@/shared/assets/icons/Express.svg";
import Nodejs from "@/shared/assets/icons/Node.js.svg";
import Prisma from "@/shared/assets/icons/Prisma.svg";
import Drizzle from "@/shared/assets/icons/Drizzle.svg";
import Postgres from "@/shared/assets/icons/PostgresSQL.svg";
import MongoDB from "@/shared/assets/icons/MongoDB.svg";
import Vitest from "@/shared/assets/icons/Vitest.svg";
import Jest from "@/shared/assets/icons/Jest.svg";
import Git from "@/shared/assets/icons/Git.svg";
import Docker from "@/shared/assets/icons/Docker.svg";
import Deno from "@/shared/assets/icons/Deno.svg";

export default function TechsMenu() {
  const { t } = useTranslation();
  
  return (
    <div>
      <Tabs.Root className="flex flex-col items-center gap-6" defaultValue="front-end">
        <Tabs.List className="w-fit flex justify-evenly items-center gap-4 rounded-xl p-2 bg-slate-800">
          <Tabs.Trigger className="rounded-xl p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="front-end">{t("home:technologies.sections.front-end.label")}</Tabs.Trigger>
          <Tabs.Trigger className="rounded-xl p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="back-end">{t("home:technologies.sections.back-end.label")}</Tabs.Trigger>
          <Tabs.Trigger className="rounded-xl p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="database">{t("home:technologies.sections.database.label")}</Tabs.Trigger>
          <Tabs.Trigger className="rounded-xl p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="tests">{t("home:technologies.sections.tests.label")}</Tabs.Trigger>
          <Tabs.Trigger className="rounded-xl p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="tools">{t("home:technologies.sections.tools.label")}</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="front-end" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech
            title={t("home:technologies.sections.front-end.items.astro.title")}
            description={t("home:technologies.sections.front-end.items.astro.description")}
            href={t("home:technologies.sections.front-end.items.astro.href")}
          >
            <img src={Astro.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.front-end.items.nextjs.title")}
            description={t("home:technologies.sections.front-end.items.nextjs.description")}
            href={t("home:technologies.sections.front-end.items.nextjs.href")}
          >
            <img src={Nextjs.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.front-end.items.solidjs.title")}
            description={t("home:technologies.sections.front-end.items.solidjs.description")}
            href={t("home:technologies.sections.front-end.items.solidjs.href")}
          >
            <img src={Solidjs.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.front-end.items.react.title")}
            description={t("home:technologies.sections.front-end.items.react.description")}
            href={t("home:technologies.sections.front-end.items.react.href")}
          >
            <img src={ReactIcon.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.front-end.items.tailwind.title")}
            description={t("home:technologies.sections.front-end.items.tailwind.description")}
            href={t("home:technologies.sections.front-end.items.tailwind.href")}
          >
            <img src={Tailwind.src} className="h-8 w-8" />
          </CardTech>
        </Tabs.Content>
        <Tabs.Content value="back-end" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech
            title={t("home:technologies.sections.back-end.items.nestjs.title")}
            description={t("home:technologies.sections.back-end.items.nestjs.description")}
            href={t("home:technologies.sections.back-end.items.nestjs.href")}
          >
            <img src={Nestjs.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.back-end.items.express.title")}
            description={t("home:technologies.sections.back-end.items.express.description")}
            href={t("home:technologies.sections.back-end.items.express.href")}
          >
            <img src={Express.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.back-end.items.deno.title")}
            description={t("home:technologies.sections.back-end.items.deno.description")}
            href={t("home:technologies.sections.back-end.items.deno.href")}
          >
            <img src={Deno.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.back-end.items.node.title")}
            description={t("home:technologies.sections.back-end.items.node.description")}
            href={t("home:technologies.sections.back-end.items.node.href")}
          >
            <img src={Nodejs.src} className="h-8 w-8" />
          </CardTech>
        </Tabs.Content>
        <Tabs.Content value="database" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech
            title={t("home:technologies.sections.database.items.drizzle.title")}
            description={t("home:technologies.sections.database.items.drizzle.description")}
            href={t("home:technologies.sections.database.items.drizzle.href")}
          >
            <img src={Drizzle.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.database.items.prisma.title")}
            description={t("home:technologies.sections.database.items.prisma.description")}
            href={t("home:technologies.sections.database.items.prisma.href")}
          >
            <img src={Prisma.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.database.items.postgres.title")}
            description={t("home:technologies.sections.database.items.postgres.description")}
            href={t("home:technologies.sections.database.items.postgres.href")}
          >
            <img src={Postgres.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.database.items.mongodb.title")}
            description={t("home:technologies.sections.database.items.mongodb.description")}
            href={t("home:technologies.sections.database.items.mongodb.href")}
          >
            <img src={MongoDB.src} className="h-8 w-8" />
          </CardTech>
        </Tabs.Content>
        <Tabs.Content value="tests" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech
            title={t("home:technologies.sections.tests.items.vitest.title")}
            description={t("home:technologies.sections.tests.items.vitest.description")}
            href={t("home:technologies.sections.tests.items.vitest.href")}
          >
            <img src={Vitest.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.tests.items.jest.title")}
            description={t("home:technologies.sections.tests.items.jest.description")}
            href={t("home:technologies.sections.tests.items.jest.href")}
          >
            <img src={Jest.src} className="h-8 w-8" />
          </CardTech>
        </Tabs.Content>
        <Tabs.Content value="tools" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech
            title={t("home:technologies.sections.tools.items.git.title")}
            description={t("home:technologies.sections.tools.items.git.description")}
            href={t("home:technologies.sections.tools.items.git.href")}
          >
            <img src={Git.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.tools.items.docker.title")}
            description={t("home:technologies.sections.tools.items.docker.description")}
            href={t("home:technologies.sections.tools.items.docker.href")}
          >
            <img src={Docker.src} className="h-8 w-8" />
          </CardTech>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
