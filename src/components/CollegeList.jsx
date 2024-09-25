import React, { useEffect, useState } from 'react';
import CollegeDetails from './CollegeDetails';
import '../styles/CollegeList.css';

const CollegeList = () => {
    const [colleges, setColleges] = useState([]);  // State for college data
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); // State for search input
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error

    // Fetch college data from the server when the component mounts
    useEffect(() => {
        const fetchCollegeData = async () => {
            try {
                const response = await fetch('http://localhost:4000/getcollegedetails');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setColleges(data.data); // Assuming the data is inside a 'data' key
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCollegeData();
    }, []); // Empty dependency array ensures this runs only on mount

    const handleCollegeSelect = (college) => {
        setSelectedCollege(college);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter colleges based on search term
    const filteredColleges = colleges.filter(college =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <p>Loading...</p>;  // Show a loading message while fetching data
    }

    if (error) {
        return <p>Error: {error}</p>; // Show error if something goes wrong
    }

    return (
        <>
            <div id="main">
                <div id="sidebar">
                    <div className="input-container">
                        <input
                            className="input"
                            name="text"
                            type="text"
                            placeholder="Search college"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>

                    <div>
                        <ul id="collegelist">
                            {filteredColleges.map((college) => (
                                <li className='allclgdata' key={college.id} onClick={() => handleCollegeSelect(college)}>
                                    {college.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div id="details">
                    {selectedCollege && <CollegeDetails college={selectedCollege} />}
                </div>
            </div>
        </>
    );
};

export default CollegeList;
