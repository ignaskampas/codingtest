import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./table.css";

export default function Table() {
    const [peopleData, setPeopleData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(
            "/services/test/people/organisation/31de2868-f982-4037-a40b-49aa82295f66/detailed"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPeopleData(data);
            });
    }, []);

    return (
        <div>
            {peopleData && (
                <table>
                    <tbody>
                        <tr>
                            <th>First Name</th>
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
                            <th>Relationship Created</th>
                        </tr>
                        {peopleData.map((item, idx) => (
                            <tr
                                key={idx}
                                onClick={() =>
                                    navigate(
                                        "/personDetails/" +
                                            item.childEntityGuid +
                                            "/"
                                    )
                                }
                            >
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.dob}</td>
                                <td>{item.email}</td>
                                <td>
                                    {item.phone ? item.phone : "Not provided"}
                                </td>
                                <td>{item.houseName}</td>
                                <td>{item.street}</td>
                                <td>{item.town}</td>
                                <td>{item.county}</td>
                                <td>{item.countryName}</td>
                                <td>{item.postcode}</td>
                                <td>{item.lat}</td>
                                <td>{item.lng}</td>
                                <td>{item.relationshipCreated}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
