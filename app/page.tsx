import FeatureCard from "@/components/feature-card";
import { featuresData } from "@/constants/data";
import Link from "next/link";

export default function page() {
  return (
    <main className="relative overflow-clip">
      <div
        className={`bg-[#D76C82] w-[100px] h-[100px] aspect-square rounded-full blur-3xl absolute -top-[20px] -right-[50px]`}
      />
      <div
        className={`bg-[#D76C82] w-[100px] h-[100px] aspect-square rounded-full blur-3xl absolute -top-[20px] -left-[50px]`}
      />
      <div className="container pb-12 flex items-center flex-col  min-h-dvh gap-[3rem] md:gap-[5rem]">
        <div className=" mt-[3rem] md:mt-[7rem]">
          <h1 className="text-5xl md:text-7xl font-bold font-serif capitalize text-balance text-center">
            Revolutionize Your{" "}
            <span className="bg-gradient-to-r capitalize from-purple-800 via-pink-800 to-red-800 bg-clip-text text-transparent">
              finance experience
            </span>
          </h1>
          <p className="text-lg md:text-lg text-center max-w-prose mx-auto mt-7">
            Our new platform combines cutting-edge technology with intuitive
            design to help you manage your finances more effectively.
          </p>
          <div className="flex justify-center gap-7 mt-12 flex-wrap">
            <Link
              href="/sign-up"
              className="py-2 px-5 bg-primary/40 rounded-lg text-foreground w-[150px] text-center border border-primary relative overflow-clip group"
            >
              <div
                className={`bg-primary group-hover:block hidden w-[50px] h-[50px] aspect-square rounded-full blur-3xl absolute top-0 right-0`}
              />
              Get started
            </Link>
            <Link
              href="/login"
              className="py-2 px-5 bg-secondary rounded-lg text-foreground w-[150px] text-center border hover:border-accent/30 duration-300 ease-in-out relative overflow-clip group"
            >
              <div
                className={`bg-accent group-hover:block hidden w-[50px] h-[50px] aspect-square rounded-full blur-3xl absolute top-0 right-0`}
              />
              login
            </Link>
          </div>
        </div>
        <div className="grid custom-grid w-full gap-8 mt-7 ">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
