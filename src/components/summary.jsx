import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Button,
  Input,
 
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Summary() {
  const [shows, setShows] = useState([]);
  const params = useParams();
  const id = params.id;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  console.log(shows);
  const { name, image, language, summary } = shows;
  useEffect(() => {
    async function load() {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await res.json();
      const filteredData = data.filter((item) => item.show.id == id);
      console.log("jshhdhd");
      setShows(filteredData[0].show);
    }
    load();
  }, [id]);
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(summary, "text/html");

  // Extract the text content without HTML tags
  const textContent = parsedHtml.body.textContent;
  //   console.log(name);
  return (
    <div className="m-auto  flex h-[600px] flex-row bg-slate-300">
      <img className=" w-auto" src={image && image.original} alt="" />
      <div className="flex  flex-col items-center text-center">
        <h1 className="mb-5 mt-4 text-center text-5xl font-normal text-stone-700">
          {name}
        </h1>
        <p className="p-7 text-base capitalize italic text-stone-700">
          {textContent}
        </p>

        <button
          onClick={onOpen}
          className="mt-8 inline-block h-14 w-40 rounded-full bg-yellow-600 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-500 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
        >
          Book Ticket
        </button>
      </div>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Movie Ticket</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Movie name</FormLabel>
              <Input ref={initialRef} value={name} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}></FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                alert("Congrats Your Seats Are Reserverd");
                onClose();
              }}
              colorScheme="blue"
              mr={3}
            >
              Book
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
