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
        const searchTokens = searchTerm.toLowerCase().split(/\s+/);

        // Calculate the index of the first appearance of each search token in the titles
        const aIndices = searchTokens.map(token => aTitle.indexOf(token));
        const bIndices = searchTokens.map(token => bTitle.indexOf(token));

        // Compare the indices of the first appearance of search tokens in each title
        for (let i = 0; i < searchTokens.length; i++) {
            if (aIndices[i] !== -1 && bIndices[i] === -1) {
                return -1;
            } else if (aIndices[i] === -1 && bIndices[i] !== -1) {
                return 1;
            } else if (aIndices[i] !== -1 && bIndices[i] !== -1) {
                if (aIndices[i] < bIndices[i]) {
                    return -1;
                } else if (aIndices[i] > bIndices[i]) {
                    return 1;
                }
            }
        }

        // If all tokens are not found in one title but found in the other, sort based on length
        if (aIndices.every(index => index === -1) && bIndices.some(index => index !== -1)) {
            return -1;
        } else if (bIndices.every(index => index === -1) && aIndices.some(index => index !== -1)) {
            return 1;
        }

        // Then sort alphabetically if tokens are not found in either title
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