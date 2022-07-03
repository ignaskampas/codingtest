import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import "./home.css";
import FilterForm from "../FilterForm/FilterForm";

export default function Home() {
    const [peopleData, setPeopleData] = useState(null);
    const [filteredResults, setFilteredResults] = useState(null);
    const [filterQuery, setFilterQuery] = useState({});

    function filterResults() {
        if (peopleData) {
            const keys = Object.keys(filterQuery);
            var newFilteredResults = [];

            for (let i = 0; i < peopleData.length; i++) {
                var rowMatches = true;
                for (let j = 0; j < keys.length; j++) {
                    if (peopleData[i][keys[j]] !== filterQuery[keys[j]]) {
                        rowMatches = false;
                    }
                }
                if (rowMatches) {
                    newFilteredResults.push(peopleData[i]);
                }
            }
            setFilteredResults(newFilteredResults);
        }
    }

    useEffect(() => {
        filterResults();
    }, [peopleData]);

    useEffect(() => {
        filterResults();
    }, [filterQuery]);

    useEffect(() => {
        fetch(
            "/services/test/people/organisation/31de2868-f982-4037-a40b-49aa82295f66/detailed"
        )
            .then((response) => response.json())
            .then((data) => {
                setPeopleData(data);
            });
    }, []);

    return (
        <div className="home">
            <FilterForm setFilterQuery={setFilterQuery} />
            {filteredResults && (
                <div>
                    <div>Showing {filteredResults.length} results</div>
                    <Table data={filteredResults} />
                </div>
            )}
        </div>
    );
}
