import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import "./table.css";

export default function Table(props) {
    const [peopleData, setPeopleData] = useState(null);
    const navigate = useNavigate();

    const itemsPerPage = 100;
    const [currentPageData, setCurrentPageData] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        setPeopleData(props.data);
    }, [props.data]);

    useEffect(() => {
        if (peopleData) {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentPageData(peopleData.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(peopleData.length / itemsPerPage));
        }
    }, [itemOffset, itemsPerPage, peopleData]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % peopleData.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="content">
            {currentPageData && (
                <div>
                    <table className="people-table">
                        <tbody>
                            <tr className="table-header-cells">
                                <th className="first-cell-in-row">
                                    First Name
                                </th>
                                <th>Last Name</th>
                                <th>DOB</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>House Name</th>
                                <th>Street</th>
                                <th>Town</th>
                                <th>County</th>
                                <th>Country</th>
                                <th>Post Code</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th className="last-cell-in-row">
                                    Relationship Created
                                </th>
                            </tr>
                            {currentPageData.map((item, idx) => (
                                <tr
                                    className="person-row"
                                    key={idx}
                                    onClick={() =>
                                        navigate(
                                            "/personDetails/" +
                                                item.childEntityGuid +
                                                "/"
                                        )
                                    }
                                >
                                    <td className="first-cell-in-row">
                                        {item.firstName}
                                    </td>
                                    <td>{item.lastName}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        {item.phone
                                            ? item.phone
                                            : "Not provided"}
                                    </td>
                                    <td>{item.houseName}</td>
                                    <td>{item.street}</td>
                                    <td>{item.town}</td>
                                    <td>{item.county}</td>
                                    <td>{item.countryName}</td>
                                    <td>{item.postcode}</td>
                                    <td>{item.lat}</td>
                                    <td>{item.lng}</td>
                                    <td className="last-cell-in-row">
                                        {item.relationshipCreated}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="paginate-container-center">
                        <ReactPaginate
                            breakLabel="..."
                            previousLabel="<"
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            renderOnZeroPageCount={null}
                            containerClassName="pagination"
                            activeClassName="active"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
