import React, { useState } from "react";
import "./filterForm.css";

export default function FilterForm(props) {
    const [childEntityGuid, setChildEntityGuid] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [houseName, setHouseName] = useState("");
    const [street, setStreet] = useState("");
    const [town, setTown] = useState("");
    const [county, setCounty] = useState("");
    const [countryName, setCountryName] = useState("");
    const [postcode, setPostcode] = useState("");

    function handleChildEntityGuidChange(newValue) {
        setChildEntityGuid(newValue);
    }
    function handleFirstNameChange(newValue) {
        setFirstName(newValue);
    }
    function handleLastNameChange(newValue) {
        setLastName(newValue);
    }
    function handleDobChange(newValue) {
        setDob(newValue);
    }
    function handleEmailChange(newValue) {
        setEmail(newValue);
    }
    function handleHouseNameChange(newValue) {
        setHouseName(newValue);
    }
    function handleStreetChange(newValue) {
        setStreet(newValue);
    }
    function handleTownChange(newValue) {
        setTown(newValue);
    }
    function handleCountyChange(newValue) {
        setCounty(newValue);
    }
    function handleCountryNameChange(newValue) {
        setCountryName(newValue);
    }
    function handlePostcodeChange(newValue) {
        setPostcode(newValue);
    }
    function handleSubmit(event) {
        event.preventDefault();
        var filterQuery = {};
        if (childEntityGuid !== "") {
            filterQuery.childEntityGuid = childEntityGuid;
        }
        if (firstName !== "") {
            filterQuery.firstName = firstName;
        }
        if (lastName !== "") {
            filterQuery.lastName = lastName;
        }
        if (dob !== "") {
            filterQuery.dob = dob;
        }
        if (email !== "") {
            filterQuery.email = email;
        }
        if (houseName !== "") {
            filterQuery.houseName = houseName;
        }
        if (street !== "") {
            filterQuery.street = street;
        }
        if (town !== "") {
            filterQuery.town = town;
        }
        if (county !== "") {
            filterQuery.county = county;
        }
        if (countryName !== "") {
            filterQuery.countryName = countryName;
        }
        if (postcode !== "") {
            filterQuery.postcode = postcode;
        }
        props.setFilterQuery(filterQuery);
    }

    return (
        <div>
            <h2>Filter</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Child Entity Guid:{" "}
                    <input
                        value={childEntityGuid}
                        type="text"
                        name="ChildEntityGuid"
                        onChange={(event) => {
                            handleChildEntityGuidChange(event.target.value);
                        }}
                    />
                </label>
                <br />
                <label>
                    First name:{" "}
                    <input
                        value={firstName}
                        type="text"
                        name="firstName"
                        onChange={(event) => {
                            handleFirstNameChange(event.target.value);
                        }}
                    />
                </label>
                <br />
                <label>
                    Last name:{" "}
                    <input
                        value={lastName}
                        type="text"
                        name="lastName"
                        onChange={(event) => {
                            handleLastNameChange(event.target.value);
                        }}
                    />
                </label>
                <br />
                <label>
                    DOB:{" "}
                    <input
                        value={dob}
                        type="text"
                        name="DOB"
                        onChange={(event) => {
                            handleDobChange(event.target.value);
                        }}
                    />
                </label>
                <br />
                <label>
                    Email:{" "}
                    <input
                        value={email}
                        type="text"
                        name="email"
                        onChange={(event) => {
                            handleEmailChange(event.target.value);
                        }}
                    />
                </label>
                <br />
                <label>
                    House name:{" "}
                    <input
                        value={houseName}
                        type="text"
                        name="houseName"
                        onChange={(event) => {
                            handleHouseNameChange(event.target.value);
                        }}
                    />
                </label>
                <br />
                <label>
                    Street:{" "}
                    <input
                        value={street}
                        type="text"
                        name="street"
                        onChange={(event) => {
                            handleStreetChange(event.target.value);
                        }}
                    />
                </label>
                <br />
                <label>
                    Town:{" "}
                    <input
                        value={town}
                        type="text"
                        name="town"
                        onChange={(event) => {
                            handleTownChange(event.target.value);
                        }}
                    />
                </label>
                <br />
                <label>
                    County:{" "}
                    <input
                        value={county}
                        type="text"
                        name="county"
                        onChange={(event) => {
                            handleCountyChange(event.target.value);
                        }}
                    />
                </label>
                <br />
                <label>
                    Country:{" "}
                    <input
                        value={countryName}
                        type="text"
                        name="country"
                        onChange={(event) => {
                            handleCountryNameChange(event.target.value);
                        }}
                    />
                </label>
                <br />
                <label>
                    Post Code:{" "}
                    <input
                        value={postcode}
                        type="text"
                        name="postcode"
                        onChange={(event) => {
                            handlePostcodeChange(event.target.value);
                        }}
                    />
                </label>
                <br />

                <input type="submit" value="Filter" />
            </form>
        </div>
    );
}
