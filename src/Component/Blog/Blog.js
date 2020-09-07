import React from 'react';
import blogData from '../../fakeData/blogData'
import BlogArticle from '../BlogAricle/BlogArticle';
import { Container, Row, Col } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Blog = () => {
    
    return (
        <Container >
            <Row>
                <Col xs={15} md={9} style={{}}>
                    <h4 style={{marginBottom:'20px',color:'green'}}>আপনি এই ব্লগ থেকে প্রোগ্রামিং এর প্রয়োজনীয় অনেক কিছু শিখতে পারেন</h4>
                    {
                        blogData.map(data=><BlogArticle data={data}></BlogArticle>)
                    }
                </Col>
                <Col xs={5} md={3} >
                    <div style={{marginTop:'50px'}}>
                        {
                            blogData.map(data=><Link to={"/"+data.key}><h5 style={{marginLeft:'20px',marginBottom:'10px'}}>{data.hadeline}</h5></Link>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
       
        
    );
};

export default Blog;