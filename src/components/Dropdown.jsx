import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({options, onChange, value}) => {

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handle = (event) => {

            if(!divEl.current){
                return;
            }

            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handle, false);

        return () => {
            document.addEventListener('click', handle);
        }
    }, [] );

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionsClick = (option) => {
        // Close Options
        setIsOpen(false);
        // what option user has selected
        onChange(option);
    }

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={ () => handleOptionsClick(option)} key={option.value}>{option.label}</div>
    })

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {value?.label || 'Select..'}
                <GoChevronDown/>
            </Panel>
            { isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown