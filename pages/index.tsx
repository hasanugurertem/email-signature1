import Head from "next/head";
import Customization from "@/components/Customization";
import Header from "@/components/Header";
import Info from "@/components/Info";
import Upload from "@/components/Upload";
import { Preview } from "@/components/Preview";
import Step from "@/components/Step";
import Template from "@/components/Template";
import { useStepStore } from "@/store/stepStore";
import { useTemplateStore } from "@/store/templateStore";

export default function Home() {
  const { step } = useStepStore();
  const { template } = useTemplateStore();

  return (
    <>
      <Head>
        <title>Professional email signature generator</title>
      </Head>

      <div className="">
        <Header />
      </div>

      <div className="flex w-full py-10 bg-background">
        <aside className="sticky hidden basis-1/12 h-screen top-8 lg:block bg-window border-x-2 border-grays-4">
          {/* Left column area */}
          <div className="grid justify-items-end" style={{ marginTop: "75px" }}>
  <Step />
</div>
        </aside>
        <main className=" basis-4/12 bg-window overflow-y-auto max-h-screen">
          {step === 1 && <Template />}
          {step === 2 && <Info />}
          {step === 3 && <Customization />}
          {step === 4 && <Upload />}
          
        </main>

        <aside className="sticky hidden basis-7/12 h-screen top-8 p-5 xl:block bg-window border-x-2 border-grays-4">

          <div className="p-10">
            <Preview
              outerDiv={template.id}
              profileIcon={template.id}
              userInfo={template.id}
              linkIcons={template.id}
            />
          </div>
        </aside>
      </div>
    </>
  );
}
