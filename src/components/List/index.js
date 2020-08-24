import React from "react";
import Card from "../Card";
import { MdAdd } from "react-icons/md";
import { Container } from "./styles";

function List({ data, index: listIndex }) {
    return (
        <Container done={data.done}>
            <header>
                <h2>{data.title}</h2>
                {data.creatable && (
                    <button ype="button">
                        <MdAdd size={24} color="#FFF" />
                    </button>
                )}
            </header>

            <ul>
                {data.cards.map((card, index) => (
                    <Card
                        key={index}
                        index={index}
                        listIndex={listIndex}
                        data={card}
                        isEmptyArea={false}
                    />
                ))}
                <Card
                    index={data.cards.length}
                    listIndex={listIndex}
                    isEmptyArea
                />
            </ul>
        </Container>
    );
}

export default List;
