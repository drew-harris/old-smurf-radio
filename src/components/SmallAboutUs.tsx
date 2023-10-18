import { titan } from "@/font";

export default function SmallAboutUs() {
  return (
    <div>
      <h1 className={`mb-4 text-3xl font-bold ${titan.className}`}>About Us</h1>
      <div className="pb-8">
        Student Managed University Radio Frequency is SMU’s college radio
        program! We were officiated in April of 2023. This program is open to
        all music and/or radio enthusiasts, and we strive to provide a community
        for people across all majors. Music brings everyone together and we are
        proud to further that connection on campus. In the past, due to the
        monetary and technological restrictions of traditional radio
        broadcasting, SMU’s radio station was discontinued. However, S.M.U.R.F.
        has recessitated the radio, with a modern twist, allowing for remote,
        online, broadcasting and listening. Now, members can broadcast from the
        comfort of their home, and listeners can tune in anywhere, anytime. This
        allows for a broader reach, equipped to keep up with modern
        technological advances. If you love radio and want to be a part of this
        organization, contact us! If you want to listen, click the banner!
      </div>
    </div>
  );
}
