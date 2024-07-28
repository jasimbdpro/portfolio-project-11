import React from 'react';
import { Button } from 'react-bootstrap';

const FieldSection = () => {
    return (
        <div className=' d-flex flex-column align-items-center mt-5'>
            <h3>Our Field of Competence</h3>
            <div className=' d-flex justify-content-around mt-4'>
                <div className=' d-flex flex-column align-items-center text-center p-4 rounded-3 bg-opacity-75 ms-3 bg-dark-subtle'>
                    <img src="vite.svg" alt="" />
                    <h3>Graphic Design and Branding Design</h3>
                    <p>price negotiable</p>
                    <Button>Learn More</Button>
                </div>
                <div className=' d-flex flex-column align-items-center text-center p-4 rounded-3 bg-opacity-75 ms-3 bg-dark-subtle'>
                    <img src="vite.svg" alt="" />
                    <h3>Web Development using React.js</h3>
                    <p>Price negotiable</p>
                    <Button>Learn More</Button>
                </div>
                <div className=' d-flex flex-column align-items-center text-center p-4 rounded-3 bg-opacity-75 ms-3 bg-dark-subtle'>
                    <img src="vite.svg" alt="" />
                    <h3>Video Editing and animation</h3>
                    <p>Price Negotiable</p>
                    <Button>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default FieldSection;