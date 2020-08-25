import React, { useState, useEffect } from "react";
import produce from "immer";

import { loadLists } from "../../services/api";
import { ContainerList, NewList, LabelCreate } from "./styles";

import Modal from "../Modal";
import List from "../List";
import BoardContext from "./context";

const data = loadLists();

function Board() {
    const [modalIsOpened, setModalIsOpened] = useState(false);
    const [lists, setLists] = useState(data);

    // useEffect(() => {
    //     console.log(lists);
    // }, [lists]);

    async function move(fromList, toList, from, to) {
        setLists(
            produce(lists, (draft) => {
                const dragged = draft[fromList].cards[from];

                draft[fromList].cards.splice(from, 1);
                draft[toList].cards.splice(to, 0, dragged);
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
        console.log("ola2");
        setLists(
            produce(lists, (draft) => {
                draft.push(newItem);
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
            value={{ lists, move, addCard, addList, changeListName }}
        >
            {/* <Container> */}
            <ContainerList>
                {lists.map((item, index) => (
                    <List key={item.title} index={index} data={item} />
                ))}

                <NewList onClick={addList}>
                    <LabelCreate>Adicionar Lista</LabelCreate>
                </NewList>
            </ContainerList>
            {/* </Container> */}
            <Modal show={modalIsOpened} onClose={() => console.log("olá")}>
                <h1>Teste</h1>
                <h1>Teste</h1>
                <h1>Teste</h1>
            </Modal>
        </BoardContext.Provider>
    );
}

export default Board;
