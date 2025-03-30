import Button from "./components/Button";
import TextField from "./components/TextField";
import wix from "./assets/wix.jpg";
import google from "./assets/google.png";
import arrow from "./assets/arrow.png";
import logo from "./assets/logo.svg";

export default function Dribble() {
  return (
    <div className=" font-header w-full h-screen min-lg:flex  ">
      <section className=" hidden min-lg:flex flex-col flex-grow w-[40%] min-h-full ">
        <div className=" min-lg:flex flex-col justify-between min-lg:pb-10 bg-blueBlack text-white px-10 pt-16 h-1/2 ">
          <a href="#">
            <img className=" w-45" src={logo} alt="logo" />
          </a>
          <div>
            <p className=" mb-10 text-[1.8rem]">
              The new Figma to Wix Studio plugin{" "}
            </p>
            <span>
              <a href="#">
                <span className=" font-header text-white underline">
                  Learn more
                </span>
                <img className="w-5 ml-1.5" src={arrow} alt="arrow" />
              </a>
            </span>
          </div>
        </div>

        <div className=" w-full h-1/2 overflow-hidden">
          <a href="#" className=" w-full">
            <img
              className="w-full object-cover aspect-square"
              src={wix}
              alt="wix"
            />
          </a>
        </div>
      </section>

      <section className=" w-full  h-screen min-lg:block flex flex-col justify-center items-center px-1.5">
        <main className=" min-lg:w-100 max-w-100 h-full px-2.5 min-lg:px-16 pt-5  ">
          <div className=" w-full h-auto ">
            <header>
              <h2 className=" m-1 font-bold font-header text-blueBlack text-2xl mb-10">
                Sign in to Dribble
              </h2>
            </header>
            <div className=" w-full ">
              <Button
                icon={google}
                alt="google-icon"
                value="Sign in with Google"
              />
            </div>
            <div class="flex items-center my-4">
              <hr class="flex-grow border-gray-300" />
              <span class="px-3 text-gray-500 text-sm">
                or sign in with email
              </span>
              <hr class="flex-grow border-gray-300" />
            </div>
            <form className="flex flex-col justify-start items-center gap-3">
              <TextField
                label="userEmail"
                id="userEmail"
                value="Username or Email"
              />
              <TextField label="password" id="password" value="Password" />
              <Button value="Sign In" />
              <div className="">
                <span className=" text-gray-500 font-header mr-1">
                  Don't have an account?
                </span>
                <a href="#">
                  <span className=" font-header text-blueBlack underline">
                    Sign Up
                  </span>
                </a>
              </div>
            </form>
          </div>
        </main>
      </section>
    </div>
  );
}
