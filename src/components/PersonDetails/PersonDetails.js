import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./personDetails.css";

export default function PersonDetails() {
    const { id } = useParams();
    const [personData, setPersonData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        function handleErrors(response) {
            if (!response.ok) {
                navigate("not-found");
                throw Error(response.statusText);
            }
            return response;
        }
        fetch(`/services/test/person/${id}`)
            .then(handleErrors)
            .then((response) => response.json())
            .then((data) => {
                setPersonData(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="person-details">
            <h2>Person Details</h2>
            {personData && (
                <table className="person-table">
                    <tbody>
                        <tr>
                            <th>Person Guid:</th>
                            <td>{personData.personGuid}</td>
                        </tr>
                        <tr>
                            <th>User Guid:</th>
                            <td>{personData.userGuid}</td>
                        </tr>
                        <tr>
                            <th>First Name:</th>
                            <td>{personData.firstName}</td>
                        </tr>
                        <tr>
                            <th>Last Name:</th>
                            <td>{personData.lastName}</td>
                        </tr>
                        <tr>
                            <th>Sex:</th>
                            <td>
                                {personData.sex
                                    ? personData.sex
                                    : "Not provided"}
                            </td>
                        </tr>
                        <tr>
                            <th>DOB:</th>
                            <td>{personData.dob}</td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td>{personData.email}</td>
                        </tr>
                        <tr>
                            <th>Phone:</th>
                            <td>
                                {personData.phone
                                    ? personData.phone
                                    : "Not provided"}
                            </td>
                        </tr>
                        <tr>
                            <th>House Name:</th>
                            <td>{personData.houseName}</td>
                        </tr>
                        <tr>
                            <th>Street:</th>
                            <td>{personData.street}</td>
                        </tr>
                        <tr>
                            <th>Town:</th>
                            <td>{personData.town}</td>
                        </tr>
                        <tr>
                            <th>County:</th>
                            <td>{personData.county}</td>
                        </tr>
                        <tr>
                            <th>Country:</th>
                            <td>{personData.countryName}</td>
                        </tr>
                        <tr>
                            <th>Postcode:</th>
                            <td>{personData.postcode}</td>
                        </tr>
                        <tr>
                            <th>AddressId:</th>
                            <td>{personData.addressId}</td>
                        </tr>
                        <tr>
                            <th>Is Deleted:</th>
                            <td>
                                {personData.phone
                                    ? personData.phone
                                    : "Not provided"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}
