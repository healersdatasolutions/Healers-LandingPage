"use client";

import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { motion, AnimatePresence } from "framer-motion";
import ClientTweetCard from "./magicui/client-tweet-card";
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn, IconBoxAlignRightFilled, IconBrandInstagram } from "@tabler/icons-react";
// import DotPattern from "./magicui/dot-pattern";
import { InstagramEmbed } from 'react-social-media-embed';

const FeatureBox = ({ title, description }) => {
  const colorChoice = ["bg-violet-600", "bg-blue-700", "bg-yellow-700"][Math.floor(Math.random() * 3)];
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className={`${colorChoice} bg-opacity-10 border text-black dark:text-gray-300 border-gray-200 dark:border-violet-700 dark:hover:bg-violet-800 hover:dark:border-white text-center transition duration-300 rounded-lg p-2 w-full h-[5rem] flex flex-col justify-evenly items-center overflow-y-hidden`}
      initial={{ y: 0 }}
      whileHover={{ y: -10 }}
      animate={{ y: 0 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {!isHovered && (
          <motion.h4
            className="text font-semibold mb-1"
            initial={{ y: 0 }}
            exit={{ y: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {title}
          </motion.h4>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isHovered && (
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-200 overflow-y-hidden"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SkeletonOne = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div className="h-full rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 grid grid-cols-2 mx-auto gap-16 p-6 items-center justify-center">
        <img
          src="https://www.citizenshospitals.com/static/uploads/130789a4-764e-4ee3-88fe-68f9278452d6-1692966652977.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-lg h-24 w-24 col-span-1 "
        />
        <div className="col-span-1 flex flex-col items-start">

        <p className="text-xl font-semibold text-neutral-500">Dr. John</p>
        <p className="text-sm font-semibold text-neutral-500 mt-1">Neurosurgeon</p>
        <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Available
        </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div className="h-full w-full rounded-lg overflow-hidden">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
  <InstagramEmbed url="https://www.instagram.com/p/DBHd06gz6W-/" width={628} captioned />
</div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg">
        <ClientTweetCard id="1835722369819971792" className="shadow-2xl" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
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
          <FeatureBox key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
     
    </motion.div>
  );
};

const SkeletonFive = () => {
  const features = [
    { title: "Mobile Application", description: "User-friendly Android app" },
    { title: "Health Record Access", description: "Convenient digital records" },
    { title: "Reward System", description: "Every 10th appointment free" },
    { title: "NFTs & Crypto Tokens", description: "Redeemable for services" },
  ];

  return (
    <motion.div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-2">
      <div className="grid grid-cols-2 gap-2 flex-grow">
        {features.map((feature, index) => (
          <FeatureBox key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </motion.div>
  );
};

const SkeletonSix = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
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
        <p className="text-xs text-neutral-500"><span className="text-green-500">You:</span> Does the patient have any past allergies?</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-gray-600 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726531200&semt=ais_hybrid"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500"><span className="text-blue-500">AI:</span> Yes, the patient has a history of asthma. The patient is allergic to dust and pollen.</p>
      </motion.div>
    </motion.div>
  );
};

export default function BentoGridThirdDemo() {
  const items = [
    {
      title: "Live Doctor's Availability",
      description: <span className="text-sm">Check real-time availability of specialists for consultations.</span>,
      header: <SkeletonOne />,
      className: "md:col-span-1",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Ask The AI",
      description: <span className="text-sm">Ask AI to summarize the patient data for you.</span>,
      header: <SkeletonSix />,
      className: "md:col-span-1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Follow Us on Twitter",
      description: <span className="text-sm">Get the latest updates on our Twitter handle, @Healers_Healthcare</span>,
      header: <SkeletonThree />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "For Hospitals",
      description: <span className="text-sm">Comprehensive solutions for efficient hospital management and growth.</span>,
      header: <SkeletonFour />,
      className: "md:col-span-1",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "For Patients",
      description: <span className="text-sm">User-friendly app with rewards and convenient health record access.</span>,
      header: <SkeletonFive />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Follow Us on Instagram",
      description: <span className="text-sm">Stay updated with our latest posts and healthcare tips.</span>,
      header: <SkeletonTwo />,
      className: "md:col-span-1",
      icon: <IconBrandInstagram className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <>
      <p className="mt-36 mb-10 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
        The More You Can Do With Healers
      </p> 
      <div className="relative">
      <div className="absolute opacity-60 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[10%] -translate-x-[20%] size-[18.85rem] lg:size-[68.85rem]">
          <img className="w-full rotate-[180deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
        </div>
      </div>
      <div className="absolute opacity-40 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[30%] translate-x-[90%] size-[18.85rem] lg:size-[68.85rem]">
          <img className="w-full rotate-[230deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
        </div>
      </div>
      <BentoGrid className="max-w-6xl mx-auto mt-32 md:auto-rows-[20rem] ">
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
      </div>
    </>
  );
}