import Router, { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import LandingpageFirstSection from "@/atoms/LandingpageFirstSection";
import LandingPageFooter from "@/atoms/LandingPageFooter";
import LandingpageNav from "@/molecules/LandingpageNav";
import Button from "@/atoms/Button";

function Home(): JSX.Element {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    Router.push(
      {
        pathname: "/dashboard",
      },
      "/dashboard"
    );
  } else {
    return (
      <div>
        <div className="px-4 mt-5 tablet:mt-2 tablet:px-8 laptop:px-14 laptop:mt-14 desktop:px-40">
          <LandingpageNav />
          <LandingpageFirstSection />

          <div className=" w-full space-y-20" id="pricing">
            <div className="self-center"></div>
            <div className=" w-full flex gap-20 place-content-center phone:flex-col w-full pb-16">
              <Button
                id="startForFree"
                variant="primary"
                color="purple"
                onClick={() => {
                  router.push({
                    pathname: "/registration/FreeAccountRegistration",
                    query: { package: "FREE" },
                  });
                }}
              >
                <span className="w-full text-center">Register</span>{" "}
              </Button>
            </div>
          </div>
        </div>

        <LandingPageFooter />
      </div>
    );
  }
  return (
    <div className="flex place-content-center h-screen">
      <div className="self-center">Loading...</div>
    </div>
  );
}

export default Home;
