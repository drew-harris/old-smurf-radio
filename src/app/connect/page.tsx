import { titan } from "@/font";

export default function Connect() {
  return (
    <>
      <h1 className={`${titan.className} text-3xl`}>Connect with S.M.U.R.F!</h1>
      <div className="flex flex-col gap-2 p-2">
        <a href="https://www.instagram.com/smuradiofrequency/">Instagram</a>
        <a href="https://connect.smu.edu/organization/smurf">SMU 360</a>
        <a href="https://docs.google.com/forms/d/1PK8aNZ6NIcGpKPBOPmd4bLNuRgZjwD6Eisbsdzu2k7U/edit">
          Member Application
        </a>
      </div>
    </>
  );
}
