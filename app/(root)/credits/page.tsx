import { SignedIn, auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import Checkout from "@/components/shared/Checkout";

const Credits = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      
      <section className=" h-full w-full mt-2 mb-2">
        <ul className="flex justify-center items-center gap-14 max-md:flex-col">
          {plans.map((plan) => (
            <li key={plan.name} className=" p-3 border-slate-400 border-2 shadow-md rounded-xl flex flex-col items-center justify-center gap-2">
              {/* <div className=""> */}
                <Image src={plan.icon} alt="check" width={50} height={50} />
                <p className=" text-purple-500">
                  {plan.name}
                </p>
                <p className=" text-3xl text-slate-800">${plan.price}</p>
                <p className=" text-slate-500">{plan.credits} Credits</p>
              {/* </div> */}

              {/* Inclusions */}
              <ul className="">
                {plan.inclusions.map((inclusion) => (
                  <li
                    key={plan.name + inclusion.label}
                    className=" flex gap-2 mt-4 text-slate-500 p-2"
                  >
                    <Image
                      src={`/assets/icons/${
                        inclusion.isIncluded ? "check.svg" : "cross.svg"
                      }`}
                      alt="check"
                      width={24}
                      height={24}
                    />
                    <p className="">{inclusion.label}</p>
                  </li>
                ))}
              </ul>

              {plan.name === "Free" ? (
                <Button variant="outline" className=" rounded-full">
                  Free Consumable
                </Button>
              ) : (
                <SignedIn>
                  <Checkout
                    plan={plan.name}
                    amount={plan.price}
                    credits={plan.credits}
                    buyerId={user._id}
                  />
                </SignedIn>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Credits;