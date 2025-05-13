'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/data/teamData";

const TeamSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-10 text-center" id="team">
      <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight relative z-10">OUR TEAM</h4>
      <div className="text-base">
        <motion.div
          className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mt-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.ol
            role="list"
            className="-mx-3 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
          >
            {teamMembers.slice(0, 4).map((member) => (
              <motion.li
                key={member.id}
                className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:gap-y-6 lg:grid-cols-1 xl:px-12"
                variants={item}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg h-72">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      alt={member.name}
                      src={member.image}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div  className="cursor-pointer">
                  <div className="hover:text-secondary-color">
                    <h2 className="text-lg font-bold">{member.name}</h2>
                    <h3 className="text-base font-normal tracking-widest text-secondary-color">
                      {member.role}
                    </h3>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ol>
          <div className="mt-10">
            <Link
              href="/team"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#dca958] via-[#fbbc57] to-[#e69c31] rounded-md shadow-sm hover:from-[#dca958] hover:via-[#ffa424] hover:to-[#e69c31]"
            >
              View All Team Members
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;