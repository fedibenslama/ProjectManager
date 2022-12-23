import { Flex, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export default function AddCard({
  addCard,
}) {
  const [title, setTitle] = useState("");

  return (
    
    <Flex w="60%" p="5" alignItems="center">
      
      <Input
        type="text"
        flex="4"
        className="form-control form-control-lg"
        placeholder="Task Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <Button
        flex="1"
        marginX="3"
        className="btn btn-lg btn-danger"
      
        onClick={() => {
          setTitle("");
          addCard(title);
        }}
      >
        Add Task
      </Button>
    </Flex>
  );
}