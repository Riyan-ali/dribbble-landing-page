import { useState } from "react";
import styles from "./mobileSearch.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const MobileSearch = () => {
    const [inputValue, setInputValue] = useState("");
    const [isInputActive, setIsInputActive] = useState(false);
    const options = ["Shots", "Designers", "Projects", "Teams"];
    
    const [currentOption, setCurrentOption] = useState(options[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleOptionClick = (option) => {
        setCurrentOption(option);
        setIsDropdownOpen(false);
    };

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    };

    const inputFocusHandler = () => {
        setIsInputActive(true);
    };

    const inputBlurHandler = () => {
        if (!inputValue) {
            setIsInputActive(false);
        }
    };

    return (
        <div className={`${styles.searchContainer} ${isInputActive ? styles.active : styles.inactive}`}>
            <input 
                type="text" 
                value={inputValue} 
                className={styles.searchInput} 
                placeholder="What are you looking for?" 
                onChange={inputChangeHandler} 
                onFocus={inputFocusHandler} 
                onBlur={inputBlurHandler}
            />
            {inputValue && <span className={styles.clear} onClick={() => setInputValue("")} ><MdOutlineClear /></span>}
            <div 
                className={styles.option} 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                {currentOption}
                <span className={styles.arrow}>{isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
            </div>
            {isDropdownOpen && (
                <div className={styles.dropdown}>
                    {options.map((option, index) => (
                        <div 
                            key={index} 
                            className={styles.dropdownItem} 
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
            <span className={styles.searchIcon} ><IoSearchOutline /></span>
        </div>
    );
};

export default MobileSearch;
