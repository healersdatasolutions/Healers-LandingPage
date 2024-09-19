"use client";
import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { motion } from "framer-motion";
import { VelocityScroll } from "./magicui/scroll-based-velocity";
import { Suspense, lazy } from "react";
import ClientTweetCard from "./magicui/client-tweet-card";
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn, IconBoxAlignRightFilled } from "@tabler/icons-react"
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const FeatureBox = ({ title, description }) => (
  <motion.div
    className="border border-gray-200 dark:border-gray-700 rounded-lg p-2 flex flex-col justify-between h-full"
    whileHover={{ borderColor: "#9333ea", boxShadow: "0 0 0 2px rgba(147, 51, 234, 0.3)" }}
  >
    <h4 className="text-sm font-semibold mb-1">{title}</h4>
    <p className="text-xs text-gray-600 dark:text-gray-400">{description}</p>
  </motion.div>
);

export async function TweetDemo() {
  return <ClientTweetCard id="1835722369819971792" className="shadow-2xl" />;
}

export function BentoGridThirdDemo() {
  return (
    <>
    <p id="" className="mt-36 mb-10 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
    The More You Can Do With Healers
  </p> 
    <BentoGrid className=" max-w-7xl mx-auto mt-32 md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg] z-20", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    {/* <div className="z-10 rotate-6">
            <VelocityScroll
            text="Wait We Have More"
            default_velocity={1}
            className=" font-display text-center text-4xl font-bold tracking-[-0.02em] text-black/70 drop-shadow-sm dark:text-white/30 md:text-7xl md:leading-[5rem]"
          />
        </div> */}
    </>
  );
}


const SkeletonOne = () => {
  const features = [
    { title: "Patient Data Management", description: "Secure and organized record-keeping" },
    { title: "Appointment Scheduling", description: "Streamlined OPD management" },
    { title: "Digital Solutions", description: "Customized landing pages and SEO" },
    { title: "Promised Growth", description: "20-30% increase in operations" },
  ];

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-2"
    >
      <div className="grid grid-cols-2 gap-2 flex-grow">
        {features.map((feature, index) => (
          <BackgroundBeamsWithCollision>

            <FeatureBox key={index} title={feature.title} description={feature.description} />
          </BackgroundBeamsWithCollision>
        ))}
      </div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const features = [
    { title: "Mobile Application", description: "User-friendly Android app" },
    { title: "Health Record Access", description: "Convenient digital records" },
    { title: "Reward System", description: "Every 10th appointment free" },
    { title: "NFTs & Crypto Tokens", description: "Redeemable for services" },
  ];

  return (
    <motion.div
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-2"
    >
      <div className="grid grid-cols-2 gap-2 flex-grow">
        {features.map((feature, index) => (
           <BackgroundBeamsWithCollision>

             <FeatureBox key={index} title={feature.title} description={feature.description} />
           </BackgroundBeamsWithCollision>
        ))}
      </div>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg">
        {/* Adding the ClientTweetCard here */}
        <ClientTweetCard id="1835722369819971792" className="shadow-2xl" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
     
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,

    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1]  border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://www.citizenshospitals.com/static/uploads/130789a4-764e-4ee3-88fe-68f9278452d6-1692966652977.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-xl text-xs text-center font-semibold text-neutral-500 mt-4">
        Dr. John
        </p>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-2">
        Neurosurgeon
        </p>
        <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Available
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-indian-doctor-woman-smiling-at-camera-png-image_12531120.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-xl text-xs text-center font-semibold text-neutral-500 mt-4">
        Dr. Amy
        </p>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-2">
        ENT
        </p>
        <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Busy
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlNl9hX3Bob3RvX29mX2FfbWlkZGxlX2FnZV9mZW1hbGVfaW5kaWFuX2RvY3Rvcl9pc19mZGVlZjk4NC04NDQwLTQyOWEtOGViMy1mMDIxZTJkYWRlZTNfMS5wbmc.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-xl text-xs text-center font-semibold text-neutral-500 mt-4">
        Dr. Lily
        </p>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-2">
        Pediatrician
        </p>
        <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Available
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-gray-600 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500"><p className="text-green-500">You:</p> Does the patient has any past alergies?</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-gray-600 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726531200&semt=ais_hybrid"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500"><p className="text-blue-500">AI</p>
          Yes, the patient has a history of asthma. The patient is allergic to dust and pollen.
        </p>
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "For Hospitals",
    description: (
      <span className="text-sm">
        Comprehensive solutions for efficient hospital management and growth.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "For Patients",
    description: (
      <span className="text-sm">
        User-friendly app with rewards and convenient health record access.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Follow Us on Twitter",
    description: (
      <span className="text-sm">
       Get the latest updates on our Twitter handle, @Healers_Healthcare
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Live Doctor's Availability",
    description: (
      <span className="text-sm">
        Check real-time availability of specialists for consultations.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Ask The AI",
    description: (
      <span className="text-sm">
       Ask AI to summarize the patient data for you.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
