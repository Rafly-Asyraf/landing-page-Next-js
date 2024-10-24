import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row justify-center items-center py-16 md:py-28 bg-gray-200">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20">
        <div>
          <Image src="/images/jampink.png" alt="jam" width={400} height={400} className="max-w-full h-auto" />
        </div>
        <div className="bg-white p-6 md:p-10 w-full md:w-1/2  rounded-md shadow-2xl text-left">
          <h1 className="text-2xl md:text-3xl font-bold">About The Product</h1>
          <p className="max-w-screen-sm pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            possimus, suscipit labore necessitatibus expedita cum inventore
            pariatu
          </p>
          <p className="mt-5 font-bold">
            - Lorem ipsum dolor sit <br />
            - amet consectetur adipisicing <br />
            - Praesentium possimus <br />
            - expedita cum inventore <br />
          </p>
        </div>
      </div>
    </section>
  );
}
