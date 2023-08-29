import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ContactUs.css";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Formik } from "formik";
import { FaMobileAlt ,FaCartPlus} from "react-icons/fa";
import {InputGroup} from 'react-bootstrap';



import reCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const ContactUs = () => {
  return (
    <>
      <section className="container-fluid ">
        <div className="d-flex flex-column align-items-center justify-content-center section1 containerForm">
        <div className="row">
          <h2 className="p-2 font-bold">
            Have Some <span className="questionColor">Question?</span>
          </h2>
        </div>
        <div className="row justify-content-center ">
          <div className="containerPara text-center col-md-10">
          <p className="p-2 pb-3">
            Thank you for your interest in our services. Please fill out the
            form below and we will get back to you promptly regarding your
            request.
          </p>
          </div>
        </div>

        <div className="container ">
          <div className="row align-items-center justify-content-center">
          <div className="containerFormInside col-md-8">
          <div className=" p-3">
            <Tabs
              defaultActiveKey="Feedback"
              id="controlled-tab-example"
              className="mb-3 Tabs"
            >
              <Tab eventKey="Feedback" title="Feedback">
                {/* <Formik
        initialValues={{
          // Initialize form 1 fields here
        }}
        validationSchema={validationSchemaForForm1}
        
      > */}
                <Form>
                  <div className="row">
                    <div className="col-md-6">
                      {/* feedback form */}

                      <Form.Group  id="input_container">
                        <Form.Control
                          type="text"
                          placeholder="Full Name *"
                          className="feedbackInput mt-3 mx-1"
                          id="inputFullName"
                        />
                        {/* {Formik.errors.name && Formik.touched.name?<p>{Formik.errors.name}</p>:null} */}
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group >
                        <Form.Control
                          type="text"
                          placeholder="Email *"
                          className="feedbackInput mt-3 mx-1"
                          id="inputEmail"
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                        {/* {Formik.errors.email && Formik.touched.email?<p>{Formik.errors.email}</p>:null} */}
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                     <Form.Group > {/*className="mb-3" */}
                     {/*  my-3 */}
                      <Form.Control
                        type="text"
                        placeholder="Phone"
                        className="feedbackInput mt-3 mx-1"
                        name="phone"
                        id="inputCall"

                        // onChange={Formik.handleChange} onBlur={Formik.handleBlur}
                      />
                      {/* {Formik.errors.phone && Formik.touched.phone?<p>{Formik.errors.phone}</p>:null} */}
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className="mt-3">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        className="feedbackTextArea mx-1 mb-3"
                        placeholder="Description *"
                        id="inputDescription"
                        name="desc"
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                      />
                      {/* {Formik.errors.desc && Formik.touched.desc?<p>{Formik.errors.desc}</p>:null} */}
                    </Form.Group>
                  </div>
                
                  <div className="d-flex align-items-center justify-content-center mb-3 mt-3">
                    <Button
                      variant="primary"
                      type="submit"
                      className="px-5 py-2 feedbackBtn "
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
                {/* </Formik> */}
              </Tab>
              {/* subscription tab.... */}
              <Tab eventKey="Subscription" title="Subscription">
                <Form>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="mb-3 mx-1">
                      <InputGroup className="mb-3 align-items-center">
                      
            <InputGroup.Text className="userLogo mt-3">
              <FaMobileAlt />
            </InputGroup.Text>
         
                    
                     <Form.Select
                          aria-label="Default select example"
                          className="subscriptionSelect mt-3   "
                          
                        >
                          <option
                            disabled="disabled"
                            selected="true"
                            className="disabledOption"
                          >
                            --select platform-- *
                          </option>
                          <option value="1">Android</option>
                          <option value="2">Ios</option>
                        </Form.Select>
                      </InputGroup>
                      
                        
        
          
                         
                        
                        
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="mb-3 mx-1">
                      <InputGroup className="mb-3 align-items-center">
                      
                      <InputGroup.Text className="userLogo mt-3">
                        <FaCartPlus/>
                      </InputGroup.Text>
                   
                              
                      <Form.Select
                          aria-label="Default select example"
                          className="subscriptionSelect mt-3 "
                          
                        >
                          <option value="selectLabel" selected disabled>
                            --select plan-- *
                          </option>
                          <option value="selectLabel">Monthly</option>
                          <option value="1">Annual</option>
                          <option value="2">Business</option>
                        </Form.Select>
                                </InputGroup>
                        
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      {/* feedback form */}
                      <Form.Group >
                        <Form.Control
                          type="text"
                          placeholder="Full Name *"
                          className="feedbackInput mx-1"
                          id="inputFullName"
                          // name='nameSub'

                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                        {/* {Formik.errors.nameSub && Formik.touched.nameSub?<p>{Formik.errors.nameSub}</p>:null} */}
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group >
                        <Form.Control
                          type="text"
                          placeholder="Email *"
                          className="feedbackInput mx-1"
                          id="inputEmail"
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                          // name='emailSub'
                        />
                        {/* {Formik.errors.emailSub && Formik.touched.emailSub?<p>{Formik.errors.emailSub}</p>:null} */}
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <Form.Group >

                      <Form.Control
                        type="text"
                        placeholder="Phone"
                        className="feedbackInput mt-3 mx-1"
                        id="inputCall"
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        // name='phoneSub'
                      />
                      {/* {Formik.errors.phoneSub && Formik.touched.phoneSub?<p>{Formik.errors.phoneSub}</p>:null} */}
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className="mt-3">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        className="feedbackTextArea mb-3 mx-1"
                        placeholder="Description *"
                        id="inputDescription"
                        // name='descSub'
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                      />
                      {/* {Formik.errors.descSub && Formik.touched.descSub?<p>{Formik.errors.descSub}</p>:null} */}
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className="mb-3">
                      {/* <Form.Control
                        type="file"
                        id="myFile"
                        name="filename"
                        accept=".jpg, .png, .doc, .pdf, .csv, .xlsx"
                        className="feedbackInput"
                      /> */}
                      {/* <Form.Control
                        type="file"
                        className="custom-file-label my-3 feedbackInput my-3"
                        
                        id="myFile"
                        label={fileName}
                        onChange={(e) => setFileName(e.target.files[0].name)}
                        custom
                      /> */}
                      {/* <label
                        htmlFor="filePicker"
                        style={{ background: "grey", padding: "5px 10px" }}
                      >
                        My custom choose file label
                      </label> */}
                    </Form.Group>
                    {/* <reCAPTCHA /> */}
                  </div>
                  <div className="d-flex align-items-center justify-content-center  mb-3 mt-3">
                    <Button
                      variant="primary"
                      type="submit"
                      className=" px-5 py-2 feedbackBtn "
                      onSubmit={Formik.handleSubmit}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </Tab>
              {/* <Tab eventKey="Technical Issue" title="Technical Issue">
        Technical issue
      </Tab>
      <Tab eventKey="Write For Us" title="Write For Us" >
        Write For Us
      </Tab> */}
            </Tabs>
          </div>
        </div>
        </div>
      
        </div>
        </div>
        </section>
    </>
  );
};

export default ContactUs;
