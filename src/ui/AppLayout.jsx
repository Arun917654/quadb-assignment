import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="">
      {isLoading && <Loader />}

      <div className="overflow-none">
        <main className="m-auto  mx-auto mt-20 flex max-w-6xl justify-center ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
