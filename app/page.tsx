import AnswerBlock from "./components/molecule/answerBlock/answerBlock";
import "./page.css";

export default function Home() {
    return (
        <div className="homeContainer">
            <h1>Page</h1>
            <div className="blocksContainer">
                <AnswerBlock
                    picture="https://www.w3schools.com/w3images/avatar2.png"
                    name="John Doe"
                />
                <AnswerBlock
                    picture="https://www.w3schools.com/w3images/avatar2.png"
                    name="John Doe"
                />
            </div>
        </div>
    );
}
