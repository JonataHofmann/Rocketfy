import React, { useState, useEffect } from "react";
import produce from "immer";

import { loadLists } from "../../services/api";
import { ContainerList, NewList, LabelCreate } from "./styles";

import Modal from "../Modal";
import List from "../List";
import BoardContext from "./context";
import Example from "../DropDown";

const data = loadLists();

function Board() {
    const [modalIsOpened, setModalIsOpened] = useState(false);
    const [lists, setLists] = useState(data);

    async function moveCard(fromList, toList, from, to) {
        setLists(
            produce(lists, (draft) => {
                const dragged = draft[fromList].cards[from];

                draft[fromList].cards.splice(from, 1);
                draft[toList].cards.splice(to, 0, dragged);
            })
        );
    }
    async function moveList(from, to) {
        setLists(
            produce(lists, (draft) => {
                const dragged = draft[from];

                draft.splice(from, 1);
                draft.splice(to, 0, dragged);
            })
        );
    }
    async function addCard(newItem, fromList) {
        setLists(
            produce(lists, (draft) => {
                draft[fromList].cards.push(newItem);
            })
        );
    }

    async function addList() {
        const newItem = {
            title: "Nova Lista",
            creatable: false,
            cards: [],
        };
        setLists(
            produce(lists, (draft) => {
                draft.push(newItem);
            })
        );
    }

    async function deleteList(index) {
        setLists(
            produce(lists, (draft) => {
                draft.splice(index, 1);
            })
        );
    }

    async function changeListName(index, newName) {
        setLists(
            produce(lists, (draft) => {
                draft[index].title = newName;
            })
        );
    }

    return (
        <BoardContext.Provider
            value={{
                lists,
                moveCard,
                moveList,
                addCard,
                addList,
                deleteList,
                changeListName,
            }}
        >
            {/* <Container> */}
            <ContainerList>
                {lists.map((item, index) => (
                    <List
                        key={item.title + "_" + index}
                        index={index}
                        data={item}
                    />
                ))}

                <NewList onClick={addList}>
                    <LabelCreate>Adicionar Lista</LabelCreate>
                </NewList>
            </ContainerList>
            {/* </Container> */}
            {/* <Modal show={modalIsOpened} onClose={() => console.log("olá")}>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
            </Modal> */}
        </BoardContext.Provider>
    );
}

export default Board;
