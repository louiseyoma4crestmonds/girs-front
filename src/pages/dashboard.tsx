import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession, getSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Router from "next/router";
import { destroyCookie } from "nookies";
import Button from "@/atoms/Button";
import Mappy from "@/organisms/Mappy";
import SelectBox from "@/molecules/SelectBox";
import { getTouristSites } from "./api/user";

function Dashboard(): JSX.Element {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      Router.replace("/sign-in");
    }
  }, [status]);

  console.log("auth stat", status);
  const router = useRouter();
  const authStatus = useSession();
  const [touristSites, setTouristSites] = useState<any>([]);
  const [touristSitesCoords, setTouristSitesCoords] = useState<any>([]);
  const [choice, setChoice] = useState<any>("");
  const [destinationLongitude, setDestinationLongitude] = useState<number>();
  const [destinationLatitude, setDestinationLatitude] = useState<number>();

  useEffect(() => {
    getTouristSites(authStatus.data?.user.user.token.token.userToken).then(
      (res) => {
        setTouristSitesCoords(res.data.data[0]);
        for (let i = 0; touristSites.length < res.data.data[0].length; i += 1) {
          touristSites.push(res.data.data[0][i].place);
        }
      }
    );
  }, []);

  useEffect(() => {
    for (let i = 0; i < touristSitesCoords.length; i += 1) {
      if (touristSitesCoords[i].place === choice) {
        setDestinationLatitude(Number(touristSitesCoords[i].latitude));
        setDestinationLongitude(Number(touristSitesCoords[i].longitude));
      }
    }
  });

  return (
    <div className="w-full bg-home px-8 h-screen flex place-content-center">
      <div className=" w-full  flex flex-row-reverse gap-x-8">
        <div className="w-full h-5/6 flex  place-content-center rounded mt-24">
          <div className="border rounded bg-white w-full h-auto py-8 px-4">
            <div>
              <div>
                <div
                  tabIndex={0}
                  role="button"
                  onKeyPress={() => {}}
                  onClick={() => {
                    router.push({ pathname: "/" });
                  }}
                  className="cursor-pointer"
                >
                  <div className="text-xl font-bold">Cross River State</div>
                  <div className="text-primaryTwo500">
                    Tourist Geographic Information Retrieval System
                  </div>
                </div>
              </div>
            </div>
            <div className="py-8">
              <hr />
            </div>

            <div className="mt-4 space-y-8">
              <div className="self-center flex flex-row-reverse">
                <Button
                  variant="primary"
                  color="purpleSecondary"
                  width="large"
                  onClick={() => {
                    signOut({ redirect: false, callbackUrl: "/logout" });
                    destroyCookie(null, "next-auth.csrf-token");
                    destroyCookie(null, "csrftoken");
                    destroyCookie(null, "__Secure-next-auth.callback-url");
                    destroyCookie(null, "__Host-next-auth.csrf-token");
                    destroyCookie(null, "next-auth.session-token");
                  }}
                >
                  <div className="w-full text-center">Logout</div>
                </Button>
              </div>
              <div className="flex gap-x-2">
                <div className="z-50 self-center w-full">
                  <SelectBox
                    selectOptions={touristSites}
                    getInputedValue={setChoice}
                  />
                </div>
                <div className="w-full self-center">
                  <Button
                    onClick={() => {
                      router.push({
                        pathname: "/dashboard",
                        query: {
                          destinationLatitude: destinationLatitude,
                          destinationLongitude: destinationLongitude,
                        },
                      });
                      setTimeout(() => {
                        router.reload();
                      }, 1000);
                    }}
                    variant="primary"
                    color="purple"
                    width="large"
                  >
                    <div className="w-full text-center">Get Directions</div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full flex place-content-center ml-8">
          <div className="self-center">
            {router.query.destinationLongitude !== undefined &&
            router.query.destinationLatitude !== undefined ? (
              <Mappy
                desLongitude={destinationLongitude || 9}
                desLattitude={destinationLatitude || 4}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
