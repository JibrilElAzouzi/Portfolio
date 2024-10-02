"use client";
import ArrowUpRightIcon from "public/icon/arrow-up-right.svg";
import React from "react";
import { metaData, socialLinks } from "app/config";
import Image from "next/image";
const YEAR = new Date().getFullYear();

function SocialLink({ href, name }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5"
    >
      <span className="font-semibold">{name}</span>
      <Image src={ArrowUpRightIcon} alt="icon" />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-col items-center text-lg gap-8 transition-opacity duration-300 hover:opacity-90 social-links sm:flex-row sm:justify-center sm:gap-4 mt-10">
      <SocialLink href={socialLinks.cv} name="Cv" />
      <SocialLink href={socialLinks.github} name="Github" />
      <SocialLink href={socialLinks.linkedin} name="LinkedIn" />
      <SocialLink href={socialLinks.email} name="Email" />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="footer-container flex flex-col items-center">
      <div className="mt-8 sm:mt-0">
        <SocialLinks />
      </div>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
          }
          .social-links {
            flex-direction: column;
            text-align: center;
            font-size: 0.875rem;
            gap: 4px;
          }

          .social-links a {
            gap: 0.5rem;
          }
        }

        article {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
      `}</style>
    </div>
  );
}
