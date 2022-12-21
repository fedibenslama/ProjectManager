// KanbanLane.tsx
import { Flex} from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import KanbanCard from "./KanbanCard";



export default function KanbanLane({ title, items }) {
    const { setNodeRef } = useDroppable({
        id: title,
    });
    return (
        <Flex flex="3" padding="5" flexDirection="column" minH="10rem" >
            {/* <Text fontWeight="bold" className="text-center"  >{title}</Text> */}
            <Flex
                className="card-header"
                ref={setNodeRef}
                backgroundColor="white"
                // borderRadius="8"
                flex="1"
                // border="2px solid gray.500"
                // boxShadow="0px 0px 5px 2px #2121213b"
                padding="2"
                flexDirection="column"
            >
                {items.map(({ title: cardTitle }, key) => (
                    <KanbanCard title={cardTitle} key={key} index={key} parent={title} />
                ))}
            </Flex>
        </Flex>
    );
}