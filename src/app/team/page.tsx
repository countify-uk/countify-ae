'use client';
import React from "react";
import MainHeader from "@/components/mainHeader";
import { teamMembers } from "@/data/teamData";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const TeamPage = () => {
  return (
    <>
    <section className="bg-gradient-to-tr from-[#0a112d] to-[#1a3a8f] bg-contact bg-no-repeat bg-cover bg-center">
    <MainHeader
        title="OUR TEAM"
        description="Meet the dedicated professionals behind Countify. Our expert team is committed to delivering reliable accounting solutions tailored to your success."
      />
      <div className="container">
        <section className="py-10" id="team">
          <div className="max-w-6xl mx-auto p-4">

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 justify-center mt-12">
            {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group  border-gray-700 bg-white dark:hover:border-transparent text-gray-900"
                >
                  <Link href={member.profileLink}>
                    <div className="flex flex-col sm:-mx-4 sm:flex-row">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                      />
                      <div className="mt-4 sm:mx-4 sm:mt-0">
                        <h2 className="text-xl font-semibold text-gray-900 capitalize md:text-2xl ">
                          {member.name}
                        </h2>
                        <p className="mt-2 text-gray-900 capitalize ">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-900 capitalize ">
                      {member.description}
                    </p>
                    <div className="flex mt-4 -mx-2">
                    {member.socials.facebook && (
                          <a
                            href={member.socials.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 mx-2 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14px"
                              fill="#fff"
                              viewBox="0 0 155.139 155.139"
                            >
                              <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" />
                            </svg>
                          </a>
                        )}
                      {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0077b5] hover:bg-[#0055b5]"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14px"
                              fill="#fff"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z" />
                            </svg>
                          </a>
                        )}
                    </div>
                  </Link>
                </motion.div>
              ))}
          
            </div>
          </div>
        </section>
      </div>
      </section>
    </>
  );
};

export default TeamPage;