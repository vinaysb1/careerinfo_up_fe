import React, { useState } from "react";
import careers from "../mockdata/data";
import "./CareerList.css"; // Import CSS file
import CareerCard from "./CareerCard";

const CareerList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm("");
    };

    const filteredCareers = careers.filter(career => {
        const searchTokens = searchTerm.toLowerCase().split(/\s+/);
        return searchTokens.some(token => {
            return (
                career.title.toLowerCase().includes(token) ||
                career.description.toLowerCase().includes(token)
            );
        });
    }).sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        const aIndex = aTitle.indexOf(searchTerm.toLowerCase());
        const bIndex = bTitle.indexOf(searchTerm.toLowerCase());

        // Sort by full token match first
        if (aIndex === 0 && bIndex !== 0) {
            return -1;
        } else if (bIndex === 0 && aIndex !== 0) {
            return 1;
        }

        // Then sort alphabetically
        return aTitle.localeCompare(bTitle);
    });

    return (
        <div className="career-list">
            <div className="search-container">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search careers..."
                    className="search-input"
                />
                {searchTerm && (
                    <button onClick={handleClearSearch} className="clear-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="clear-icon"
                        >
                            <path
                                fill="none"
                                d="M0 0h24v24H0z"
                            />
                            <path
                                fill="rgba(0,0,0,.54)"
                                d="M18.29 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.71a.996.996 0 1 0-1.41 1.41L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.88a.996.996 0 1 0 1.41-1.41L13.41 12l4.88-4.89a.996.996 0 0 0 0-1.4z"
                            />
                        </svg>
                    </button>
                )}
            </div>
            <div className="card-container">
                {filteredCareers.map((career) => (
                    <CareerCard key={career.id} career={career} />
                ))}
            </div>

        </div>
    );
};

export default CareerList;