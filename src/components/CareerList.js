import React, { useState } from "react";
import careers from "../mockdata/data";

const CareerList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm("");
    };

    const filteredCareers = careers.filter((career) =>
        career.title.toLowerCase().includes(searchTerm.toLowerCase()) || career.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Careers</h2>
            <div style={{ marginBottom: "10px" }}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search careers..."
                />
                {searchTerm && (
                    <button onClick={handleClearSearch}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
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
            <ol>
                {filteredCareers.map((career) => (
                    <li key={career.id}>
                        {career.title} : {career.description}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default CareerList;