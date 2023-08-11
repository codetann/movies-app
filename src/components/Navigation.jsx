import { HStack, VStack, Text, Box } from "@chakra-ui/react";
import { FaHome, FaFilm, FaTv, FaHeadSideMask } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import React from "react";

export default function Navigation() {
  return (
    <VStack h="100vh" w="15rem" p="1rem">
      <Box py="2rem">
        <Text>Logo</Text>
      </Box>
      <VStack gap="1rem" w="100%">
        <NavLink icon={<FaHome />} url="/" label="Home" />
        <NavLink icon={<FaFilm />} url="/movies" label="Movies" />
        <NavLink icon={<FaTv />} url="/tv-shows" label="TV Shows" />
        <NavLink icon={<BsPersonFill />} url="/people" label="People" />
      </VStack>
    </VStack>
  );
}

function NavLink({ icon, url, label }) {
  const location = useLocation();

  const isActive = location.pathname === url;
  return (
    <HStack
      w="100%"
      p=".5rem 1rem"
      cursor="pointer"
      borderRadius="md"
      background={isActive ? "purple.400 !important" : "transparent"}
      color={isActive ? "whiteAlpha.900" : "whiteAlpha.700"}
      _hover={{
        background: "whiteAlpha.200",
      }}
    >
      {icon}
      <Text>{label}</Text>
    </HStack>
  );
}
