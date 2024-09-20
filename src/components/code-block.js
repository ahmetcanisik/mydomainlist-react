import hljs from "highlight.js";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "react-tooltip";
import 'highlight.js/styles/github-dark.min.css';

export default function CodeBlock({ id = 'codeBlock_default0', lang = 'html', copy = false, children }) {
    const [tooltipContent, setTooltipContent] = useState("Copy");
    const [formattedCode, setFormattedCode] = useState("");

    useEffect(() => {
        try {
            const highlightedCode = hljs.highlight(children, {language: lang}).value;
            setFormattedCode(highlightedCode);
        } catch (error) {
            console.error("Error highlighting code:", error);
            setFormattedCode(children); // Fallback to unhighlighted code
        }
    }, [children, lang]);

    const copiedActions = () => {
        if (copy) {
            setTooltipContent("Copied!");
            setTimeout(() => {
                setTooltipContent("Copy");
            }, 1000);
        }
    };

    return (
        <div className="flex justify-start items-center my-10">
            <CopyToClipboard text={children} onCopy={copiedActions}>
                <pre className="relative overflow-x-auto word-breaks">
                    <code data-tooltip-id={id} className={`hljs rounded-lg shadow-lg ${lang} p-0`} dangerouslySetInnerHTML={{ __html: formattedCode }}></code>
                </pre>
            </CopyToClipboard>
            {copy && <Tooltip id={id} content={tooltipContent} place="top-start" className="text-xs" variant={tooltipContent === 'Copy' ? 'dark' : "success"} />}
        </div>
    );
};