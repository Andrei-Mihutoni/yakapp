import React from "react";

export default function Card(props) {

    return (
        <article className={props.highlight ? "highlight" : ""}>
            <h2>{props.task}</h2>


        </article>
    )
}
