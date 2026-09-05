export type EducationItem = {
  institution: string;
  degree: string;
  result?: string;
  start: string;
  end: string;
  location: string;
};

export const education: EducationItem[] = [
  {
    institution: "NED University",
    degree: "Master of Software Engineering",
    result: "1st Division",
    start: "2023",
    end: "2025",
    location: "Karachi, Pakistan",
  },
  {
    institution: "Dawood University",
    degree: "Bachelor of Electronic Engineering",
    result: "1st Division",
    start: "2018",
    end: "2022",
    location: "Karachi, Pakistan",
  },
  {
    institution: "S.M.I.T Education Program",
    degree: "Diploma in Web and Mobile App Development",
    start: "2018",
    end: "2019",
    location: "Karachi, Pakistan",
  },
  {
    institution: "P.E.C.H.S Science College",
    degree: "Intermediate (Pre-Engineering)",
    result: "1st Division",
    start: "2015",
    end: "2017",
    location: "Karachi, Pakistan",
  },
  {
    institution: "Aisha Bawany Academy",
    degree: "Matriculation (Computer Science)",
    result: "1st Division",
    start: "2013",
    end: "2015",
    location: "Karachi, Pakistan",
  },
];
