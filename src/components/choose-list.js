import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { ForwardIcon } from "@heroicons/react/24/solid";
import CodeBlock from './code-block';
import {Title, readFile, FileDialog} from './utils';
import { useState } from "react";


export default function ChooseList({ onClick }) {
    const [isFileSelected, setIsFileSelected] = useState(false);
    const [fileName, setFileName] = useState("");
    const [codePlace, setCodePlace] = useState("");

    const handleSelect = (e) => {
        readFile(e).then(result => {
            setIsFileSelected(result.status);
            setFileName(result.current.name);
            setCodePlace(result.code);
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <>
            <Title title="Choose List" icon={<GlobeAltIcon className="world-icon"/>} />
            <form>
                <div className="add-domain">
                    <FileDialog file_name={fileName} id="select_list" accept=".json" text="Select List" onChange={handleSelect} />
                </div>
                {isFileSelected && (
                    <>
                        <div className="code">
                            <CodeBlock id="show_code" lang="json" copy={true}>
                                {codePlace}
                            </CodeBlock>
                        </div>
                        <div className="control-domain">
                            <button onClick={onClick} tabIndex={5} type="submit" className="btn-control btn-add">
                                <ForwardIcon className="add-icon"/>
                                <span>Next</span>
                            </button>
                        </div>
                    </>
                )}
            </form>
        </>
    );
}