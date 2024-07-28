import React from 'react';
import { Button } from 'react-bootstrap';

const TopHeader = () => {
    return (
        <div className=' d-flex bg-warning bg-opacity-25 mt-5 p-5 justify-content-around align-items-center'>
            <div>
                <h4 className=' text-primary opacity-75'>Best React Developer</h4>
                <h2 className=' text-dark'>Make your online bussiness <br /> better and better</h2>
                <div>
                    <Button>Make an appointment</Button>
                    <Button className=' border-dark text-bg-light m-2'>Our Services</Button>
                </div>
            </div>
            <img width='50%' src='./heroimage.jpg' alt="" />
        </div>
    );
};

export default TopHeader;