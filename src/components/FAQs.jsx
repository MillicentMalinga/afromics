import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 

const faqs = [

  {
    question: "What is Afromics?",
    answer: "Afromics is a platform that connects genomic scientists, bioinformaticians and research organisations in a bid to accelerate genomics research in Africa. We provide a platform for data sharing, storage and analysis between organisations and researchers.", 
    id: 1

  }, 
  {
    question: "What services do you offer?",
    answer: "We offer secure data management solutions, collaboration with other organisations and researchers to share data, resources and expertise to accelerate genomics research in Africa and user management solutions.", 
    id: 2
  },
  {
    question: "How do I get started?",
    answer: "You can get started by registering on our platform. Once registered, you can start sharing, storing and analysing genomic data with other researchers and organisations on the platform.", 
    id: 3
  }, 
  {
    question: "What can I do as an independent researcher on Afromics?",
    answer: "You can submit a research proposal and if there are any scientists working on or interested in the research, they can reach out to you and you can collaborate with them.",
    id: 4
  }
]
export function FrequentQuestions(props) {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="bg-white my-20 py-20">
      <div className="mx-auto w-4/5 flex flex-col">
        <div className="flex-col">
          <p className="font-body-plex text-sm font-bold">Have Questions?</p>
      <p className="text-2xl font-light text-blue-gray-800 mb-10 font-body-plex">Check Our Frequently Asked Questions</p>
     
      </div>
      <div className="flex flex-col gap-4">
      {faqs.map((faq, index) => (
        <Accordion open={open === faq.id} className="mb-2 shadow-md border border-t-blue-gray-50 px-4">
        <AccordionHeader
          onClick={() => handleOpen(faq.id)}
          className={`border-b-0 transition-colors font-body-plex ${
            open === faq.id ? "text-blue-gray-500 hover:!text-blue-700" : ""
          }`}
        >
          {faq.question}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal font-body-plex text-left">
          {faq.answer}
        </AccordionBody>
      </Accordion>
      ))}
      </div>
     
     
    </div>
    </div>
  );
}