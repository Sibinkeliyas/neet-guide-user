import PracticeNow from "@/components/icons/PracticeNow";
import StudyMaterials from "@/components/icons/StudyMaterials";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const DashboardItems = () => {
  return (
    <>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1" className="border-[1px] rounded-t-md">
          <AccordionTrigger className="hover:no-underline data-[state=open]:bg-[#D1DDF7] data-[state=open]:text-[#101010]">
            Biology
          </AccordionTrigger>
          <AccordionContent className="px-4 py-0">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1-1"
            >
              <AccordionItem value="item-1-1">
                <AccordionTrigger
                  hideIcon
                  className="mb-0 hover:no-underline data-[state=open]:text-[#0B57D0] "
                >
                  Living world
                </AccordionTrigger>
                <AccordionContent className="pl-2">
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex justify-between item-center py-2"
                  >
                    <p className="mb-0">1.1 Introduction</p>
                    <ChevronRightIcon />
                  </Link>
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex justify-between item-center py-2"
                  >
                    <p className="mb-0"> 1.2 What is Living</p>
                    <ChevronRightIcon />
                  </Link>
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex items-center py-2"
                  >
                    <p className="mb-0">1.3 Diversity in the living world </p>
                    <ChevronRightIcon className="ml-auto" />
                  </Link>
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex items-center py-2"
                  >
                    <StudyMaterials />
                    <p className="mb-0 ml-3">Study Notes </p>{" "}
                    <ChevronRightIcon className="ml-auto" />
                  </Link>
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex items-center py-2"
                  >
                    <PracticeNow />
                    <p className="mb-0 ml-3">Practice now </p>{" "}
                    <ChevronRightIcon className="ml-auto" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1-2">
                <AccordionTrigger
                  hideIcon
                  className="mb-0 hover:no-underline data-[state=open]:text-[#0B57D0] "
                >
                  Biological classification
                </AccordionTrigger>
                <AccordionContent className="pl-2">
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex justify-between item-center py-2"
                  >
                    <p className="mb-0">1.1 Introduction</p>
                    <ChevronRightIcon />
                  </Link>
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex justify-between item-center py-2"
                  >
                    <p className="mb-0"> 1.2 What is Living</p>
                    <ChevronRightIcon />
                  </Link>
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex items-center py-2"
                  >
                    <p className="mb-0">1.3 Diversity in the living world </p>
                    <ChevronRightIcon className="ml-auto" />
                  </Link>
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex items-center py-2"
                  >
                    <StudyMaterials />
                    <p className="mb-0 ml-3">Study Notes </p>{" "}
                    <ChevronRightIcon className="ml-auto" />
                  </Link>
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex items-center py-2"
                  >
                    <PracticeNow />
                    <p className="mb-0 ml-3">Practice now </p>{" "}
                    <ChevronRightIcon className="ml-auto" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1-3" className="border-0">
                <AccordionTrigger
                  hideIcon
                  className="mb-0 hover:no-underline data-[state=open]:text-[#0B57D0] "
                >
                 Planet kingdom
                </AccordionTrigger>
                <AccordionContent className="pl-2">
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex justify-between item-center py-2"
                  >
                    <p className="mb-0">1.1 Introduction</p>
                    <ChevronRightIcon />
                  </Link>
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex justify-between item-center py-2"
                  >
                    <p className="mb-0"> 1.2 What is Living</p>
                    <ChevronRightIcon />
                  </Link>
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex items-center py-2"
                  >
                    <p className="mb-0">1.3 Diversity in the living world </p>
                    <ChevronRightIcon className="ml-auto" />
                  </Link>
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex items-center py-2"
                  >
                    <StudyMaterials />
                    <p className="mb-0 ml-3">Study Notes </p>{" "}
                    <ChevronRightIcon className="ml-auto" />
                  </Link>
                  <Link
                    href="#"
                    className="no-underline text-[#101010] flex items-center py-2"
                  >
                    <PracticeNow />
                    <p className="mb-0 ml-3">Practice now </p>{" "}
                    <ChevronRightIcon className="ml-auto" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="border-[1px] rounded-t-md mt-5"
        >
          <AccordionTrigger className="hover:no-underline data-[state=open]:bg-[#D1DDF7] data-[state=open]:text-[#101010]">
            Zoology
          </AccordionTrigger>
          <AccordionContent className="px-4 py-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-2-1">
                <AccordionTrigger>Living world</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2-2">
                <AccordionTrigger>Biological classification</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2-3" className="border-y-0">
                <AccordionTrigger>Plant kingdom</AccordionTrigger>
                <AccordionContent>
                  {`Yes. It's animated by default, but you can disable it if you
                  prefer.`}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default DashboardItems;
