import Header from "./components/header";
import AddDomain from "./components/add-domain";
import ChooseList from "./components/choose-list";
import { useState } from "react";

function App() {
    const [chosedList, setChosedList] = useState(false);

    const choosedButtonClicked = () => {
        setChosedList(true);
    }

    const addButtonClicked = () => {
        setChosedList(false);
    }

    return (
        <div className="window">
            <Header/>
            <main>
                {chosedList ? <AddDomain onClick={addButtonClicked} /> : <ChooseList onClick={choosedButtonClicked} />}
            </main>
        </div>
    );
}

export default App;