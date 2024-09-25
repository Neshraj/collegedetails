import React from 'react';
import '../styles/CollegeDetails.css';
import { useEffect } from 'react';

const CollegeDetails = ({ college }) => {
    return (
        <div id='maintdiv'>

            <div id="maintable">
                <h3>{college.name} College details</h3>
                <table>

                    <thead>
                        <tr>
                            <th>College Name</th>
                            <th>Course Name </th>
                            <th>Course Fee</th>
                            <th>Duration of Course</th>
                            <th>Accommodation AC/ Non-AC</th>
                            <th>Accommodation Fee</th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                        <td>{college.name}</td>

                        <td>
                            <ul className='allli'>
                                {college.courses.map((course, index) => (
                                <li className='liitem' key={index}>
                                {index+1+". "}{course.courseName}
                                </li>))}
                            </ul>
                        </td>

                        <td>
                            <ul className='allli'>
                                {college.courses.map((course, index) => (
                                <li className='liitem' key={index}>
                                {index+1+". "}{course.courseFee}
                                </li>))}
                            </ul>
                        </td>

                        <td>
                            <ul className='allli'>
                                {college.courses.map((course, index) => (
                                <li className='liitem' key={index}>
                                {index+1+". "}{course.duration}
                                </li>))}
                            </ul>
                        </td>

                        <td>{college.accommodation.type}</td>

                        <td>{college.accommodation.fee}</td>
                        </tr>
               
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default CollegeDetails;
