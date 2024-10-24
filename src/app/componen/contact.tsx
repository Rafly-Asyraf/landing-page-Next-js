import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center py-28"
    >
      <div className="bg-slate-100 shadow-xl items-center p-14">
        <h1 className="text-3xl font-bold mb-5 ">Contact Us</h1>
        <form className="max-w-md mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <Input
              variant={"custom"}
              type="email"
              name="email"
              id="email"
              placeholder=""
              required
            />
            <Label
              htmlFor="email"
              variant={"labelAnimasi"} 
            >
              Email address
            </Label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
          <Input
              variant={"custom"}
              type="telephone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              placeholder=""
              required
            />
            <Label
              htmlFor="floating_phone"
              variant={"labelAnimasi"}
            >
              Phone number
            </Label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
            <Input
              variant={"custom"}
              type="text"
              name="frist_name"
              id="frist_name"
              placeholder=""
              required
            />
            <Label
              htmlFor="frist_name"
              variant={"labelAnimasi"}
            >
              First name
            </Label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
            <Input
              variant={"custom"}
              type="text"
              name="last_name"
              id="last_name"
              placeholder=""
              required
            />
            <Label
              htmlFor="last_name"
              variant={"labelAnimasi"}
            >
              Last name
            </Label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group">
          <Input
              variant={"custom"}
              type="text"
              name="floating_company"
              id="floating_company"
              placeholder=""
              required
            />
            <Label
              htmlFor="floating_company"
              variant={"labelAnimasi"}
            >
              Massage
            </Label>
          </div>

          <Button variant={"purple"} className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
