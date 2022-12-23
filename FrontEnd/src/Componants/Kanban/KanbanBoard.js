/* eslint-disable jsx-a11y/anchor-is-valid */
// KanbanBoard.tsx
import { DndContext, rectIntersection } from "@dnd-kit/core";
import KanbanLane from "./KanbanLane";
import AddCard from "./AddCard";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import React from "react";
import {useEffect } from "react";
import {useParams } from "react-router-dom";
export default function KanbanBoard() {
    const [todoItems, setTodoItems] = useState([]);
    const [doneItems, setDoneItems] = useState([]);
    const [inProgressItems, setInProgressItems] = useState([]);
    const [uItems, setuItems] = useState([]);
    const addNewCard = (title) => {
        setuItems([...uItems, { title }]);
    };
    const [ViewProjectData, setViewProjectData] = useState([{
        Name: '',
        Type: '',
        UsedSolutions: '',
        AssociatedServers: '',
        AssociatedClient: '',
        Status: '',
        ProjectProgress: '',
        StartDate: '',
        FinishDate: '',
        ProjectDescription: ''
    }])
    let { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3001/ViewProject/${id}`)
            .then(response => {
                return response.json();
            })
            .then(project => {

                setViewProjectData(project)

            })

    }, [id]) //
    return (
        <div>
            <Navbar />
            <Menu />
            <div className="content-wrapper kanban">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <h1 className="display-4">Kanban Board of {ViewProjectData.name}</h1>
                            </div>
                            <div className="col-sm-6 d-none d-sm-block">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Kanban Board</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <DndContext
                    collisionDetection={rectIntersection}
                    onDragEnd={(e) => {
                        const container = e.over?.id;
                        const title = e.active.data.current?.title ?? "";
                        const index = e.active.data.current?.index ?? 0;
                        const parent = e.active.data.current?.parent ?? "ToDo";
                        if (container === "ToDo") {
                            setTodoItems([...todoItems, { title }]);
                        } else if (container === "Done") {
                            setDoneItems([...doneItems, { title }]);
                        } else if (container === "Unassigned") {
                            setuItems([...uItems, { title }]);
                        } else {
                            setInProgressItems([...inProgressItems, { title }]);
                        }
                        if (parent === "ToDo") {
                            setTodoItems([
                                ...todoItems.slice(0, index),
                                ...todoItems.slice(index + 1),
                            ]);
                        } else if (parent === "Done") {
                            setDoneItems([
                                ...doneItems.slice(0, index),
                                ...doneItems.slice(index + 1),
                            ]);
                        } else if (parent === "Unassigned") {
                            setuItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
                        } else {
                            setInProgressItems([
                                ...inProgressItems.slice(0, index),
                                ...inProgressItems.slice(index + 1),
                            ]);
                        }
                    }}
                >
                    <div className="mb-4 "><AddCard addCard={addNewCard} /></div>
                    
                    <section className="content pb-3">
                        <div className="container-fluid h-100">
                            <div className="card card-row card-primary">
                                <div className="card-header">

                                    <h3 className="card-title">
                                        To Do
                                    </h3>
                                </div>
                                <Flex>
                                    <KanbanLane title="ToDo" items={todoItems} />
                                </Flex>

                            </div>
                            <div className="card card-row card-default">
                                <div className="card-header bg-info">
                                    <h3 className="card-title">
                                        In Progress
                                    </h3>
                                </div>
                                <Flex>

                                    <KanbanLane title="In Progress" items={inProgressItems} />

                                </Flex>
                            </div>
                            <div className="card card-row card-success">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        Done
                                    </h3>
                                </div>
                                <Flex>
                                    <KanbanLane title="Done" items={doneItems} />
                                </Flex>
                            </div>
                            <div className="card card-row card-secondary">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        Unassigned
                                    </h3>
                                </div>
                                <Flex>
                                    <KanbanLane title="Unassigned" items={uItems} />
                                </Flex>
                            </div>
                        </div>
                    </section>
                </DndContext>
            </div>
        </div>

    );
}