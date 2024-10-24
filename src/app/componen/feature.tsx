import Card from "@/components/ui/card";
export default function Feature() {
  return (
    <section
      id="feature"
      className="flex flex-col justify-center items-center p-10 md:p-28"
    >
      <div className="text-center pb-10">
        <h1 className="text-2xl md:text-3xl font-bold">Product Feature</h1>
        <p className="max-w-screen-sm pt-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          possimus, suscipit labore necessitatibus expedita cum inventore
          pariatu.
        </p>
      </div>
      <div className="mt-10 mb-10">
        {/* Responsive Flexbox */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-x-20 justify-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <Card
              src="/images/quality.png"
              alt="quality"
              title="High Quality"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <Card
              src="/images/freandly.svg"
              alt="freandly"
              title="user Friendly"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <Card
              src="/images/design.svg"
              alt="awesome design"
              title="awesome design"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
