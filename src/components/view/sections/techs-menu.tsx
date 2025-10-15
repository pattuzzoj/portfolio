import { Tabs } from "@ark-ui/react";
import CardTech from "@/components/card/card-tech";
import Astro from "@/assets/icons/Astro.svg";
import Nextjs from "@/assets/icons/Next.js.svg";
import ReactIcon from "@/assets/icons/React.svg";
import Solidjs from "@/assets/icons/Solid.js.svg";
import Tailwind from "@/assets/icons/Tailwind CSS.svg";
import Nestjs from "@/assets/icons/Nest.js.svg";
import Express from "@/assets/icons/Express.svg";
import Nodejs from "@/assets/icons/Node.js.svg";
import Prisma from "@/assets/icons/Prisma.svg";
import Drizzle from "@/assets/icons/Drizzle.svg";
import Postgres from "@/assets/icons/PostgresSQL.svg";
import MongoDB from "@/assets/icons/MongoDB.svg";
import Vitest from "@/assets/icons/Vitest.svg";
import Jest from "@/assets/icons/Jest.svg";
import Git from "@/assets/icons/Git.svg";
import Docker from "@/assets/icons/Docker.svg";
import Deno from "@/assets/icons/Deno.svg";
import { useTranslation } from "react-i18next";

export default function TechsMenu() {
  const { t } = useTranslation();
  
  return (
    <div>
      <Tabs.Root className="flex flex-col items-center gap-6" defaultValue="front-end">
        <Tabs.List className="w-fit flex justify-evenly items-center gap-4 rounded-lg p-2 bg-slate-800">
          <Tabs.Trigger className="rounded-md p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="front-end">{t("home:technologies.sections.front-end.label")}</Tabs.Trigger>
          <Tabs.Trigger className="rounded-md p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="back-end">{t("home:technologies.sections.back-end.label")}</Tabs.Trigger>
          <Tabs.Trigger className="rounded-md p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="database">{t("home:technologies.sections.database.label")}</Tabs.Trigger>
          <Tabs.Trigger className="rounded-md p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="tests">{t("home:technologies.sections.tests.label")}</Tabs.Trigger>
          <Tabs.Trigger className="rounded-md p-0.5 md:p-1 text-sm md:text-base data-selected:bg-blue-600 hover:bg-slate-700" value="tools">{t("home:technologies.sections.tools.label")}</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="front-end" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech
            title={t("home:technologies.sections.front-end.items.astro.title")}
            description={t("home:technologies.sections.front-end.items.astro.description")}
          >
            <img src={Astro.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.front-end.items.nextjs.title")}
            description={t("home:technologies.sections.front-end.items.nextjs.description")}
          >
            <img src={Nextjs.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.front-end.items.solidjs.title")}
            description={t("home:technologies.sections.front-end.items.solidjs.description")}
          >
            <img src={Solidjs.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.front-end.items.react.title")}
            description={t("home:technologies.sections.front-end.items.react.description")}
          >
            <img src={ReactIcon.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.front-end.items.tailwind.title")}
            description={t("home:technologies.sections.front-end.items.tailwind.description")}
          >
            <img src={Tailwind.src} className="h-8 w-8" />
          </CardTech>
        </Tabs.Content>
        <Tabs.Content value="back-end" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech
            title={t("home:technologies.sections.back-end.items.nestjs.title")}
            description={t("home:technologies.sections.back-end.items.nestjs.description")}
          >
            <img src={Nestjs.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.back-end.items.express.title")}
            description={t("home:technologies.sections.back-end.items.express.description")}
          >
            <img src={Express.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.back-end.items.deno.title")}
            description={t("home:technologies.sections.back-end.items.deno.description")}
          >
            <img src={Deno.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.back-end.items.node.title")}
            description={t("home:technologies.sections.back-end.items.node.description")}
          >
            <img src={Nodejs.src} className="h-8 w-8" />
          </CardTech>
        </Tabs.Content>
        <Tabs.Content value="database" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech
            title={t("home:technologies.sections.database.items.drizzle.title")}
            description={t("home:technologies.sections.database.items.drizzle.description")}
          >
            <img src={Drizzle.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.database.items.prisma.title")}
            description={t("home:technologies.sections.database.items.prisma.description")}
          >
            <img src={Prisma.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.database.items.postgres.title")}
            description={t("home:technologies.sections.database.items.postgres.description")}
          >
            <img src={Postgres.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.database.items.mongodb.title")}
            description={t("home:technologies.sections.database.items.mongodb.description")}
          >
            <img src={MongoDB.src} className="h-8 w-8" />
          </CardTech>
        </Tabs.Content>
        <Tabs.Content value="tests" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech
            title={t("home:technologies.sections.tests.items.vitest.title")}
            description={t("home:technologies.sections.tests.items.vitest.description")}
          >
            <img src={Vitest.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.tests.items.jest.title")}
            description={t("home:technologies.sections.tests.items.jest.description")}
          >
            <img src={Jest.src} className="h-8 w-8" />
          </CardTech>
        </Tabs.Content>
        <Tabs.Content value="tools" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTech
            title={t("home:technologies.sections.tools.items.git.title")}
            description={t("home:technologies.sections.tools.items.git.description")}
          >
            <img src={Git.src} className="h-8 w-8" />
          </CardTech>
          <CardTech
            title={t("home:technologies.sections.tools.items.docker.title")}
            description={t("home:technologies.sections.tools.items.docker.description")}
          >
            <img src={Docker.src} className="h-8 w-8" />
          </CardTech>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
