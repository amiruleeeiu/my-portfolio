import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const BlogArticle = (props) => {
    console.log(props.data);
    const {key,hadeline,description}=props.data;
    console.log(description.length)
 
    const shortDescription=description.slice(0,250);
        
    return (
        <Container >
            <Row>
                <Col style={{boxShadow:'1px 1px 10px gray',marginBottom:'10px',padding:'20px',borderRadius:'5px'}}>
                    <Link to={"/"+key}><h3>{hadeline}</h3></Link>
                    <h6>{shortDescription+" ..."}</h6>
                    <Link to={"/"+key}><Button style={{float:'right'}} variant="contained">Read More</Button></Link>
                </Col>
                
            </Row>
        </Container>
    );
};

export default BlogArticle;