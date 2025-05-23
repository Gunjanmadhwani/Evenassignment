// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "./card";
import Card from "./card";

function App() {
  // const [count, setCount] = useState(0);
  const carddata = [
    {
      key: 0,
      src: "https://even.in/doctors/DrChandrika.png",
      backgroundColor: "#FBE277",
      name: "Dr. Chandrika Kambam",
      experience: "24 Years Experience",
      qualification: "Internal Medicine  |  MBBS, MD, MBA, PGDMLE",
      previousExp: [
        "Director of Clinical Services at HCG group",
        "VP Clinical Services at Columbia Asia, India",
        "Physician at Brockton Hospital, USA",
      ],
      shortName: "Dr. Chandrika K",
    },
    {
      key: 1,
      src: "https://even.in/doctors/DrBinitaP.png",
      backgroundColor: "#2CC48B",
      name: "Dr. Binita Priyambada",
      experience: "20 Years Experience",
      qualification: "General Surgery (MBBS, MS),  Family Medicine (M. Med)",
      previousExp: [
        "Senior Consultant & Head Clinical Services at Docprime",
        "Senior Resident Surgery at Max Superspecialty Hospital",
        "Resident General Surgery at Safdarjung Hospital",
      ],
      shortName: "Dr. Binita P",
    },
    {
      key: 2,
      src: "https://even.in/doctors/DrMohammad.png",
      backgroundColor: "#FEBACD",
      name: "Dr. Mohammad Hanief",
      experience: "13 Years Experience",
      qualification:
        "MBBS, Fellowship in Diabetology and Critical Care, PGP (AIML)",
      previousExp: [
        "Medical Consultant at Fortis Hospital, New Delhi",
        "Medical Director at Primarin Healthcare",
        "Consultant at Apollo, Cure.fit, Fortis, CurAi and Tata Health",
      ],
      shortName: "Dr. Mohammad H",
    },
    {
      key: 3,
      src: "https://even.in/doctors/DrRakshithS.png",
      backgroundColor: "#dbdcf1",
      name: "Dr. Rakshith Shetty",
      experience: "9 Years Experience",
      qualification: "Internal Medicine  |  MBBS, MD",
      previousExp: [
        "Consultant Physician at various hospitals in south Bangalore",
        "MD Internal Medicine from K.S Hedge Medical Academy",
      ],
      shortName: "Dr. Rakshith S",
    },
    {
      key: 5,
      src: "https://even.in/doctors/DrRamya.png",
      backgroundColor: "#2CC48B",
      name: "Dr. Ramya",
      experience: "7 Years Experience",
      qualification: "General Medicine | MBBS",
      previousExp: [
        "Resident at Motherhood Women and Children's Hospital",
        "Resident Medical Officer at Cytecare and Vikram Hospitals",
        "Consultant General Physician at Practo",
      ],
      shortName: "Dr. Ramya C",
    },
    {
      key: 6,
      src: "https://even.in/doctors/DrChanakya.png",
      backgroundColor: "#FEBACD",
      name: "Dr. Chanakya Saini",
      experience: "7 Years Experience",
      qualification: "General Physician | MBBS",
      previousExp: [
        "Clinical Resident at Apex Hospitals, Jaipur",
        "Consultant General Physician at Mfine",
        "Medical officer at Express Clinics, Bangalore",
      ],
      shortName: "Dr. Chanakya S",
    },
    {
      key: 9,
      src: "https://even.in/doctors/DrShefalika.png",
      backgroundColor: "#dbdcf1",
      name: "Psy. Shefalika Sahai",
      experience: "6 Years Experience",
      qualification: "Clinical Psychologist",
      previousExp: [
        "MPhil Clinical Psychology from Dr. Ram Manohar Lohia Hospital, New Delhi",
        "M.Sc Psychology (Clinical) from Christ University, Bangalore",
      ],
      shortName: "Shefalika S",
    },
    {
      key: 10,
      src: "https://even.in/doctors/DrBLAvinash.png",
      backgroundColor: "#FBE277",
      name: "Dr. B L Avinash",
      experience: "9 Years Experience",
      qualification: "Consultant Physician (MBBS, MD),  Internal medicine",
      previousExp: [
        "Consultant Physician Apollo hospital",
        "Asst. Professor MVJ Medical College & Research Hospital",
        "Senior Resident Shivamogga Institute of Medical Sciences",
      ],
      shortName: "Dr. B L Avinash",
    },
    {
      key: 11,
      src: "https://even.in/doctors/PtKhusboo.png",
      backgroundColor: "#2CC48B",
      name: "Pt. Khushboo B",
      experience: "15 Years Experience",
      qualification: "Senior Physiotherapist  |  MSK and Sports Therapist",
      previousExp: [
        "Consultant at Plum Insurance (remote)",
        "Consultant at Care.fit (Senior phyiotherapist)",
        "Visiting consultant at Apollo clinic Bellendur",
      ],
      shortName: "Pt. Khushboo B",
    },
    {
      key: 12,
      src: "https://even.in/doctors/DrReshma.png",
      backgroundColor: "#FEBACD",
      name: "Dr. Reshma",
      experience: "11 Years Experience",
      qualification: "General Medicine  |  MBBS",
      previousExp: [
        "Health care consultant manager at mFine",
        "NHM Doctor in OBG dept at Government Taluk Hospital",
      ],
      shortName: "Dr. Reshma",
    },
    {
      key: 14,
      src: "https://even.in/doctors/PsySwathi.png",
      backgroundColor: "#DADBF1",
      name: "Psy. Swathi J Bhat",
      experience: "5 Years Experience",
      qualification: "Clinical Psychologist",
      previousExp: [
        "Consultant Clinical Psychologist at MindTalk clinic under Cadabam's group",
        "Clinical Psychologist at CIMBS hospital, New Delhi",
      ],
      shortName: "Psy. Swathi J Bhat",
    },
    {
      key: 15,
      src: "https://even.in/doctors/PtLavanya.png",
      backgroundColor: "#FBE277",
      name: "Pt. Lavanya Parashivakumar",
      experience: "7 Years Experience",
      qualification:
        "Bachelors of Physiotherapy | Masters in Exercise & Sports Science",
      previousExp: [
        "Apollo Specialty Hospitals, Jayanagar, Bangalore",
        "RNR Fit Gymnastics Academy",
        "Founder of SECTPAS Project",
      ],
      shortName: "Pt. Lavanya P",
    },
    {
      key: 17,
      src: "https://even.in/doctors/DrRoshan.png",
      backgroundColor: "#FEBACD",
      name: "Dr. Roshan Manoharan",
      experience: "6 Years Experience",
      qualification: "Dermatologist  |  MBBS , MD(DVL)",
      previousExp: [
        "Assistant professor - MVJ Medical College and Hospital",
        "Private practitioner in Prabha Venkatesh skin and Orthopaedic clinic, Bangalore",
      ],
      shortName: "Dr. Roshan Manoharan",
    },
    {
      key: 19,
      src: "https://even.in/doctors/DrBheemaraya.png",
      backgroundColor: "#DADBF1",
      name: "Dr.Bheemaraya D",
      experience: "16 years experience",
      qualification:
        "Internal Medicine Specialist | MBBS ,MD INTERNAL MEDICINE, CCEBDM (PHFI ) Certified Yoga Therapist",
      previousExp: ["Siri Hospital, Bangalore", "Beato organisation"],
      shortName: "Dr.Bheemaraya D",
    },
    {
      key: 25,
      src: "https://even.in/doctors/DrSavitha.png",
      backgroundColor: "#FBE277",
      name: "Dr. Savitha Shetty",
      experience: "26 Years Experience",
      qualification: "Gynaecologist  |  MBBS, DGO. MD. MRCOG",
      previousExp: [
        "Consultant -Apollo hospitalsConsultant-Cloud Nine Hospitals",
        "Consultant -Columbia Asia Hospital, Yeshwantpur",
        "Specialist-Ministry of Health,Oman",
        "Consultant Gynaecologist -MIOT Hospitals",
      ],
      shortName: "Dr. Savitha Shetty",
    },
  ];

  return (
    <>
      <div>
        <h1>India's top medical professionals are now your family doctors</h1>
        <div className="sc">
          {carddata.map((data) => (
            <Card {...data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
