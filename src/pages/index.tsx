import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

const skillsArr: string[] = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Redux",
  "TypeScript",
  "HTML & CSS",
  "Node.js",
  "Git",
  "MongoDB",
];
const hobbiesArr: string[] = [
  "Coding, ",
  "Gaming, ",
  "Music, ",
  "Movies, ",
  "Video Editing, ",
  "Video Creator, ",
  "Voice Over.",
];
const languageArr: string[] = ["English", "Hindi", "Punjabi"];

const empHistory = [
  {
    title: "MERN stack developer, Codedrill Infotech.pvt.ltd, Chandigarh",
    fromAndToData: "February 2021 - February 2022",
    skills: [...skillsArr],
  },
  {
    title: "Frontend developer ( Contract ), Cvent Inc, Chandigarh",
    fromAndToData: "May 2022 - September 2022",
    description:
      "Worked on Cvent.com as a frontend devleoper on Behalf of Growth natives.pvt.ltd",
    skills: [...skillsArr],
  },
  {
    title: "Frontend developer, GrowthNatives.pvt.ltd, Chandigarh",
    fromAndToData: "February 2021 - Present",
    skills: [...skillsArr],
  },
];

const educationHistory = [
  {
    name: "10th, Jyoti Public High School, Jalandhar City",
    fromAndToData: "March 2016 - March 2017",
  },
  {
    name: "12th, Doaba College, Jalandhar City",
    fromAndToData: "April 2018 - April 2019",
  },
  {
    name: "BCA, Doaba College, Jalandhar City",
    fromAndToData: "July 2019 - July 2022",
  },
];

export default function Home() {
  return (
    <>
      <div className={styles["root-container"]}>
        <div className={styles["resume-container"]}>
          <div className={styles["image-intro-details-container"]}>
            <div className={styles["profile_image_container"]}>
              <Image
                src={"/profile-img.jpg"}
                alt="profile image"
                width={300}
                height={380}
                // fill
              />
            </div>
            <div className={styles["intro_detail_container"]}>
              <div className={styles["name-container"]}>
                <h1 className={inter.className}>Vishal Kumar</h1>
              </div>
              <div className={styles["profile"]}>
                <p className={inter.className}>Frontend Developer</p>
              </div>
              <div className={styles["address"]}>
                <p className={inter.className}>
                  R5, Residential Area, Sector 91 road, Sector 74, Mohali,
                  160055, India
                </p>
              </div>
              <div className={styles["contact-container"]}>
                <p className={inter.className}>
                  07986342637 -{" "}
                  <a
                    href="mailto:drcybex@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    drcyberx@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className={styles["resume-body-container"]}>
            <div className={styles["left-row"]}>
              <div className={styles["date_place_of_birth_container"]}>
                <h4 className={inter.className}>Date / Place of birth</h4>
                <p className={inter.className}>12-02-2000, Darbhanga, Bihar</p>
              </div>
              <div className={styles["skills_container"]}>
                <h4 className={inter.className}>Skills</h4>
                {skillsArr.map((item: string) => (
                  <p className={inter.className} key={item}>
                    {item}
                  </p>
                ))}
              </div>
              <div className={styles["hobbies_container"]}>
                <h4 className={inter.className}>Hobbies</h4>
                {hobbiesArr.map((item: string) => (
                  <span className={inter.className} key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className={styles["langugage_container"]}>
                <h4 className={inter.className}>Languages</h4>
                {languageArr.map((item: string) => (
                  <p className={inter.className} key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles["right-row"]}>
              <div className={styles["profile-info-section"]}>
                <h4 className={inter.className}>Profile</h4>
                <p className={inter.className}>
                  Hi , This is Vishal a Front-end developer with approx 2.5
                  years of experience in Technologies like React.js , Next.js ,
                  Html, css, scss, git . I also had a working experience in
                  backend technologies like Node.js, MongoDB, Express, GraphQL,
                  etc.
                </p>
              </div>
              <div className={styles["employment-history-section"]}>
                <h4 className={inter.className}>
                  Employment History ( 2+ years)
                </h4>
                {empHistory.map((item: any) => (
                  <div
                    className={styles["employment-history"]}
                    key={item.title}
                  >
                    <div className={styles["history"]}>
                      <h4 className={inter.className}>{item.title}</h4>
                    </div>
                    <div className={styles["from_and_to_date"]}>
                    <p className={inter.className}>{item.fromAndToData}</p>
                    </div>
                    {item?.description ? (
                      <div className={styles["history_description"]}>
                        <p className={inter.className}>{item?.description}</p>
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className={styles["skills"]}>
                      <p className={inter.className}>Skills : {item.skills.join(",")}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles["employment-history-section"]}>
                <h4 className={inter.className}>
                  Education
                </h4>
                {educationHistory.map((item: any) => (
                  <div
                    className={styles["employment-history"]}
                    key={item.name}
                  >
                    <div className={styles["history"]}>
                      <h4 className={inter.className}>{item.name}</h4>
                    </div>
                    <div className={styles["from_and_to_date"]}>
                    <p className={inter.className}>{item.fromAndToData}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <Head>
<title>Create Next App</title>
<meta name="description" content="Generated by create next app" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />
</Head>
<main className={styles.main}>
<div className={styles.description}>
  <p>
    Get started by editing&nbsp;
    <code className={styles.code}>src/pages/index.tsx</code>
  </p>
  <div>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      By{' '}
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
    </a>
  </div>
</div>

<div className={styles.center}>
  <Image
    className={styles.logo}
    src="/next.svg"
    alt="Next.js Logo"
    width={180}
    height={37}
    priority
  />
  <div className={styles.thirteen}>
    <Image
      src="/thirteen.svg"
      alt="13"
      width={40}
      height={31}
      priority
    />
  </div>
</div>

<div className={styles.grid}>
  <a
    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={inter.className}>
      Docs <span>-&gt;</span>
    </h2>
    <p className={inter.className}>
      Find in-depth information about Next.js features and&nbsp;API.
    </p>
  </a>

  <a
    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={inter.className}>
      Learn <span>-&gt;</span>
    </h2>
    <p className={inter.className}>
      Learn about Next.js in an interactive course with&nbsp;quizzes!
    </p>
  </a>

  <a
    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={inter.className}>
      Templates <span>-&gt;</span>
    </h2>
    <p className={inter.className}>
      Discover and deploy boilerplate example Next.js&nbsp;projects.
    </p>
  </a>

  <a
    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={inter.className}>
      Deploy <span>-&gt;</span>
    </h2>
    <p className={inter.className}>
      Instantly deploy your Next.js site to a shareable URL
      with&nbsp;Vercel.
    </p>
  </a>
</div>
</main> */
}
