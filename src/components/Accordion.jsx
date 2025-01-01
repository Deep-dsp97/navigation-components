import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }){

    const [ expandedIndex, setExpandedindex ] = useState(-1);

    // Define Event Handlers outside of Map function 
    // to make the code more structured and readable
    //  BEST PRACTICES
    const handleClick = (nextClick) => {
        setExpandedindex((currentIndex) => {
            // Try to Understand this again
            if(expandedIndex === nextClick){
                return -1;
            }else{
                return nextClick;
            }
        })
    }

    const renderedItems = items.map((item, index) => {

        const isExpanded = index === expandedIndex;

        const icon = <span className="text-xl">
            { isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>;

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>{item.label}{icon}</div>
                {/* Take first falsy value and last truthy value */}
                { isExpanded && <div className="border-b p-5">{item.content}</div> }
            </div>
        );
    });
    return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion;