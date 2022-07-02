import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./personDetails.css";

export default function PersonDetails() {
    const { id } = useParams();
    const [personData, setPersonData] = useState(null);

    useEffect(() => {
        fetch(`/services/test/person/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPersonData(data);
                console.log(data);
            });
    }, []);

    return (
        <div>
            {personData && (
                <div>
                    <ul>
                        <li>Person Guid: {personData.personGuid}</li>
                        <li>User Guid: {personData.userGuid}</li>
                        <li>First Name: {personData.firstName}</li>
                        <li>Last Name: {personData.lastName}</li>
                        <li>
                            Sex:{" "}
                            {personData.sex ? personData.sex : "Not provided"}
                        </li>
                        <li>DOB: {personData.dob}</li>
                        <li>Email: {personData.email}</li>
                        <li>
                            Phone:{" "}
                            {personData.phone
                                ? personData.phone
                                : "Not provided"}
                        </li>
                        <li>House Name: {personData.houseName}</li>
                        <li>Street: {personData.street}</li>
                        <li>Town: {personData.town}</li>
                        <li>County: {personData.county}</li>
                        <li>Country: {personData.countryName}</li>
                        <li>Postcode: {personData.postcode}</li>
                        <li>AddressId: {personData.addressId}</li>
                        <li>
                            Is deleted:{" "}
                            {personData.isDeleted
                                ? personData.isDeleted
                                : "Null"}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
