import images from "@/constants/images";
import Image from "next/image";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid md:grid-cols-2 min-h-dvh">
      <section className="hidden md:block h-full w-full overflow-clip">
        <Image
          src={images.signUpImage}
          alt="sign up"
          className="w-full h-full object-cover object-center"
          priority
        />
      </section>
      <section className="grid place-items-center h-full w-full">
        {children}
      </section>
    </main>
  );
}
