import React, {useEffect, useState} from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [selectedContact, setSelectedContact] = useState(null);

    useEffect(() => {
        //Fetch selected contact details
        async function fetchSelectedContact() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );
                const result = await response.json();
                setSelectedContact(result);
            } catch (error) {
                console.error(error);
            }
        }

        if (selectedContactId) {
            fetchSelectedContact();
        }
    }, [selectedContactId]);

    const goBackToList = () => {
        setSelectedContactId(null);
    };

    if (!selectedContact) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2>Contact Details</h2>
            <p>Name: {selectedContact.name}</p>
            <p>Email: {selectedContact.email}</p>
            <p>Phone: {selectedContact.phone}</p>
            <button onClick={goBackToList}>Go Back to List</button>
        </div>
    );
}