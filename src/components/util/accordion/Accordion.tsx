import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import "./style.scss";

export default function AccordionMui() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const accordionList = [
    {
      id: 1,
      title: "Farobiy IT Academy bu nima?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, adipisci aut? Explicabo quos quis ipsa atque commodi maxime cumque blanditiis ad a ullam, at dolores ea molestiae itaque repudiandae ipsum debitis architecto voluptate officia odit doloremque reiciendis eum provident iste. Expedita voluptatum necessitatibus, beatae eveniet adipisci facilis ipsum a odio.",
    },
    {
      id: 2,
      title: "Farobiy IT Academy a'zoligimga nimalar kiradi?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, adipisci aut? Explicabo quos quis ipsa atque commodi maxime cumque blanditiis ad a ullam, at dolores ea molestiae itaque repudiandae ipsum debitis architecto voluptate officia odit doloremque reiciendis eum provident iste. Expedita voluptatum necessitatibus, beatae eveniet adipisci facilis ipsum a odio.",
    },
    {
      id: 3,
      title: "Farobiy IT Academy dan nimani o'rganishim mumkin?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, adipisci aut? Explicabo quos quis ipsa atque commodi maxime cumque blanditiis ad a ullam, at dolores ea molestiae itaque repudiandae ipsum debitis architecto voluptate officia odit doloremque reiciendis eum provident iste. Expedita voluptatum necessitatibus, beatae eveniet adipisci facilis ipsum a odio.",
    },
    {
      id: 4,
      title: "Sinovim tugagandan keyin nima bo'ladi?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, adipisci aut? Explicabo quos quis ipsa atque commodi maxime cumque blanditiis ad a ullam, at dolores ea molestiae itaque repudiandae ipsum debitis architecto voluptate officia odit doloremque reiciendis eum provident iste. Expedita voluptatum necessitatibus, beatae eveniet adipisci facilis ipsum a odio.",
    },
    {
      id: 5,
      title: "Farobiy IT Academy da dars bera olamanmi?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, adipisci aut? Explicabo quos quis ipsa atque commodi maxime cumque blanditiis ad a ullam, at dolores ea molestiae itaque repudiandae ipsum debitis architecto voluptate officia odit doloremque reiciendis eum provident iste. Expedita voluptatum necessitatibus, beatae eveniet adipisci facilis ipsum a odio.",
    },
  ];

  return (
    <div className="mt-8 grid gap-5">
      {accordionList.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === `panel${item.id}`}
          onChange={handleChange(`panel${item.id}`)}
          sx={{
            borderRadius: "2.5rem!important",
            paddingInline: "1rem",
            paddingBlock: "1.25rem",
            boxShadow: 0,
            bgcolor: "var(--grey)",
          }}
        >
          <AccordionSummary
            expandIcon={<AddCircleIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              <p className="font-medium text-lg sm:text-xl md:text-2xl text-[var(--black)]">
                {item.title}
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="text-sm md:text-base lg:text-xl">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                adipisci aut? Explicabo quos quis ipsa atque commodi maxime
                cumque blanditiis ad a ullam, at dolores ea molestiae itaque
                repudiandae ipsum debitis architecto voluptate officia odit
                doloremque reiciendis eum provident iste. Expedita voluptatum
                necessitatibus, beatae eveniet adipisci facilis ipsum a odio.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
