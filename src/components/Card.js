import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack style={{backgroundColor: "white",borderRadius: "10px", gap:"15px"}}>
      <Image src={imageSrc} style={{borderRadius: "10px", margin:"-15px", width:"100%", height:"auto", display:"block"}}/>
      <div style={{display:"flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", padding: "15px", gap: "15px"}}>
        <Heading size="md" style={{color: "black",}}>{title}</Heading>
        <Text style={{color: "grey",}}>{description}</Text>
        <a href="#" style={{color: "black",}}>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
      </div>
    </VStack>
  );
};

export default Card;
