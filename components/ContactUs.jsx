import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "./Alerts";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

const ContactUs = () => {
  const form = useRef();
  const [alert, setAlert] = useState(null);
  const [btnDisable, setBtnDisable] = useState(false);

  const successAlert = {
    color: "success",
    icon: "ni ni-like-2",
    message: " Your message has been sent successfully!",
  };

  const errorAlert = {
    color: "danger",
    icon: "ni ni-bell-55",
    message: " Oops! Something went wrong. Please try again later.",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnDisable(true);
    const values = {
      to_name: "Dabeer Ahmad",
      from_name: form.current[0].value,
      email_id: form.current[1].value,
      message: form.current[2].value,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        values,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setAlert(successAlert);
          form.current[0].value = "";
          form.current[1].value = "";
          form.current[2].value = "";
          setBtnDisable(false);
        },
        () => {
          setAlert(errorAlert);
          setBtnDisable(false);
        }
      );
  };

  return (
    <>
      <section className="section section-lg section-shaped">
        <div className="shape shape-style-3 shape-primary">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        {alert && (
          <Alert
            color={alert.color}
            icon={alert.icon}
            message={alert.message}
          />
        )}
        <form ref={form} onSubmit={sendEmail}>
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to work with me?</h4>
                    <p className="mt-0">
                      Your project is very important to me.
                    </p>
                    <FormGroup className="mt-5">
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Your name"
                          type="text"
                          name="user_name"
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Email address"
                          name="user_email"
                          type="email"
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="user_message"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                        required
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="submit"
                        disabled={btnDisable}
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
