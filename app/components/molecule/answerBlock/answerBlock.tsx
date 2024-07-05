import React from "react";
import "./answerBlock.css";

type Props = {
    picture: string;
    name: string;
};

const AnswerBlock = (Props: Props) => {
    return (
        <div className="container_right">
            <img className="image" src={Props.picture} alt="right picture" />
            <p className="name">{Props.name}</p>
        </div>
    );
};

export default AnswerBlock;
