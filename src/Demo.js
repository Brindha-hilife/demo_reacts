import React, { useState } from 'react';
import {
  Container, Row, Col, Button, Form, InputGroup, Modal, OverlayTrigger,
  Tooltip, Table
} from 'react-bootstrap';
import {
 Avatar
} from '@mui/material';
import Multiselect from "multiselect-react-dropdown";
import "./demo.css";
import { FaPlus, FaInfoCircle } from 'react-icons/fa';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


function Demo() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  return (
    <div className='productadd_container_main'>
      <div className="Test">
     <input className="form-control"
            placeholder="File Title"
            value={"theTitle"}
            type="text"/>
      <Avatar />
</div>

      <h1 className='productadd_head'>Create product <sup>Products</sup> | <sub>Create product</sub></h1>
      <Container className='productadd_container_sub'>
        <Form>
          <Row className="mb-1">
            <Col className='col-md-3 col-sm-6 col-xs-12'>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className='productadd-labels'>Product Name *</Form.Label>
                <Form.Control type="text" className='productadd_input' />
              </Form.Group>
            </Col>
            <Col className='col-md-3 col-sm-6 col-xs-12'>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className='productadd-labels'>SKU *  </Form.Label>&ensp;
                {['right'].map((placement) => (
                  <OverlayTrigger

                    placement={placement}
                    overlay={
                      <Tooltip className="productadd_tooltp" id={`tooltip-${placement}`}>
                        Unique product id or Stock Keeping Unit <br />
                        Keep it blank to automatically generate sku <br />
                        "You can modify sku prefix in Business settings "
                      </Tooltip>
                    }
                  >
                    <span ><FaInfoCircle className='productadd_iconinfo' /></span>
                  </OverlayTrigger>
                ))}

                <Form.Control type="text" className='productadd_input' />
              </Form.Group>
            </Col>
            <Col className='col-md-3 col-sm-6 col-xs-12'>
              <Form.Label className='productadd-labels mb-2'>Barcode type</Form.Label>
              <Form.Select className='productadd_formselects productadd_input'>
                <option>Code 128 (C128)</option>
                <option value="">Code 39 (C39)</option>
                <option value="">EAN-13</option>
                <option value="">EAN-8</option>
                <option value="">UPC-A</option>
                <option value="">UPC-E</option>
              </Form.Select>
            </Col>
            <Col className='col-md-3 col-sm-6 col-xs-12'>
              <Form.Label className='productadd-labels mb-2'>Unit *</Form.Label>
              <InputGroup className="mb-3">
                <Form.Select className='productadd_formselects productadd_input'>
                  <option value="">Please Select</option>
                  <option value="">xxx</option>
                </Form.Select>
                <InputGroup.Text id="basic-addon1" className='productadd_input'><FaPlus className='productadd_iconplus' onClick={handleShow} /></InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col className='col-md-3 col-sm-6 col-xs-12'>
              <Form.Label className='productadd-labels mb-2'>Brand</Form.Label>
              <InputGroup className="mb-3">
                <Form.Select className='productadd_formselects productadd_input'>
                  <option value="">Please Select</option>
                  <option value="">xxx</option>
                </Form.Select>
                <InputGroup.Text id="basic-addon1" className='productadd_input'><FaPlus className='productadd_iconplus' onClick={handleShow} /></InputGroup.Text>
              </InputGroup>
            </Col>
            <Col className='col-md-3 col-sm-6 col-xs-12'>
              <Form.Label className='productadd-labels mb-2'>Category</Form.Label>
              <Form.Select className='productadd_formselects productadd_input'>
                <option>xxxx</option>
                <option value="">yyyy</option>
              </Form.Select>
            </Col>
            <Col className='col-md-3 col-sm-6 col-xs-12'>
              <Form.Label className='productadd-labels mb-2'>Sub Category</Form.Label>
              <Form.Select className='productadd_formselects productadd_input'>
                <option>xxxx</option>
                <option value="">yyyy</option>
              </Form.Select>
            </Col>
            <Col className='col-md-3 col-sm-6 col-xs-12'>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className='productadd-labels'>Business Location</Form.Label>
                <Multiselect
                  isObject={false}
                  onKeyPressFn={function noRefCheck() { }}
                  onRemove={function noRefCheck() { }}
                  onSearch={function noRefCheck() { }}
                  onSelect={function noRefCheck() { }}
                  options={[
                    'xxx',
                    'yyy',
                    'zzz',
                    'rrr',
                    'ddd'
                  ]}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className='col-md-3 col-sm-6 col-xs-12'>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="mb-2">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Manage Stock`}
                      className='productadd-labels'
                      checked
                    />
                  </div>
                ))}
              </Form.Group>
            </Col>
            <Col className='col-md-3 col-sm-6 col-xs-12'>
              <Form.Label className='productadd-labels mb-2'>Alert Quantity</Form.Label>
              <Form.Control type="text" className='productadd_input' />
            </Col>
            <Col className='col-md-3 col-sm-6 col-xs-12'>
              <Form.Label className='productadd-labels mb-2'>Product Image</Form.Label>
              <Form.Control type="file" className='productadd_formselects productadd_input' />
            </Col>
            <Col>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className='col-md-8 col-sm-12 col-xs-12' >
              <Form.Label className='productadd-labels mb-2'>Product Description</Form.Label>
              <Editor className='productadd_edit'
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                wrapperStyle={{ border: "1px solid #ced4da" }}

              />
            </Col>
            <Col className='col-md-4 col-sm-12 col-xs-12'>
              <Form.Label className='productadd-labels mb-2'>Product brochure</Form.Label>
              <Form.Control type="file" className='productadd_formselects productadd_input' />
              <Form.Text className="text-muted">
                Max : 5 MB<br />
                Allowed files : pdf, csv, zip, doc, jpeg, jpg, png
              </Form.Text>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col className='col-md-3 col-sm-6 col-xs-12'>
              <Form.Label className='productadd-labels mb-2'>Applicable Tax</Form.Label>
              <Form.Select className='productadd_formselects productadd_input'>
                <option>None</option>
                <option value="">yyyy</option>
              </Form.Select>
            </Col>
            <Col className='col-md-3 col-sm-6 col-xs-12'>
              <Form.Label className='productadd-labels mb-2'>Selling Price Tax Type *</Form.Label>
              <Form.Select className='productadd_formselects productadd_input'>
                <option>Exclusive</option>
                <option value="">Inclusive</option>
              </Form.Select>
            </Col>
            <Col className='col-md-3 col-sm-6 col-xs-12'>
              <Form.Label className='productadd-labels mb-2'>Product Type</Form.Label>&ensp;
              {['right'].map((placement) => (
                <OverlayTrigger
                  placement={placement}
                  overlay={
                    <Tooltip className="productadd_tooltp" id={`tooltip-${placement}`}>
                      <b>Single product:</b> Product unit no variables <br />
                      <b>Variable product:</b> Product unit variation such as color, size etc <br />
                      <b>Combo Product</b> Product with combination also called bundle
                    </Tooltip>
                  }
                >
                  <span ><FaInfoCircle className='productadd_iconinfo' /></span>
                </OverlayTrigger>
              ))}
              <Form.Select className='productadd_formselects productadd_input'>
                <option>Single</option>
                <option value="">Variable</option>
                <option value="">Combo</option>
              </Form.Select>
            </Col>
          </Row><br /><br />
          <Row className="mb-1">
            <Table responsive bordered>
              <thead className='productadd_tbhead text-center'>
                <tr>
                  <th colSpan={2}>Default Purchase Price</th>
                  <th colSpan={1}>x Margin (%)</th>
                  <th colSpan={1}>Default Selling Price</th>
                  <th colSpan={1}>Product image</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td >
                    <Form.Label className='productadd-labels'>Exc. tax *</Form.Label><br />
                    <Form.Control type="text" className='productadd_input' placeholder='Exc. tax' />
                  </td>
                  <td>
                    <Form.Label className='productadd-labels'>Inc. tax *</Form.Label><br />
                    <Form.Control type="text" className='productadd_input' placeholder='Inc. tax' />
                  </td>
                  <td className='text-center pt-4'>
                    <Form.Control type="text" className='productadd_input' value={0.00} />
                  </td>
                  <td>
                    <Form.Label className='productadd-labels'>Exclusive Tax</Form.Label><br />
                    <Form.Control type="text" className='productadd_input' placeholder='Exc. tax' />
                    <Form.Label className='productadd-labels'>Inclusive Tax</Form.Label><br />
                    <Form.Control type="text" className='productadd_input' placeholder='Inc. tax' />
                  </td>
                  <td>
                    <Form.Label className='productadd-labels'>Product brochure</Form.Label>
                    <Form.Control type="file" className='productadd_formselects productadd_input mb-2' />
                    <Form.Text className="text-muted">
                      Max : 5 MB<br />
                    </Form.Text>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <br />
          <Row>
            <Col className='col-md-4 col-sm-3 col-xs-1'>
            </Col>
            <Col className='col-md-7 col-sm-6 col-xs-12'>
              <Button className="productadd_butn" variant="primary" type="submit">
                SAVE AND ADD ANOTHER
              </Button>&ensp;
              <Button className="productadd_butn" variant="primary" type="submit">
                SAVE
              </Button>
            </Col>
            <Col className='col-md-1 col-sm-6 col-xs-12'>

            </Col>
          </Row>

        </Form>
      </Container>

      {/* ***** Unit Modal ***** */}
      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Unit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className='productadd-labels'>Name *</Form.Label>
                  <Form.Control type="text" className='productadd_input' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className='productadd-labels'>Short Name</Form.Label>
                  <Form.Control type="text" className='productadd_input' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className='productadd-labels '>Allow Decimal *</Form.Label>
                <Form.Select className='productadd_formselects productadd_input'>
                  <option>Select</option>
                  <option value="">Yes</option>
                  <option value="">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button className="productadd_butnsave" variant="light" onClick={handleClose}>
              Save
            </Button>
            <Button className="productadd_butnclose" variant="light" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

      {/* ***** Brand Modal ***** */}
      {/* <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Brand</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
             <Col>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className='productadd-labels'>Brand Name *</Form.Label>
                  <Form.Control type="text" className='productadd_input' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
             <Col>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className='productadd-labels'>Short Description</Form.Label>
                  <Form.Control type="text" className='productadd_input' />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button className="productadd_butnsave" variant="light" onClick={handleClose}>
              Save
            </Button>
            <Button className="productadd_butnclose"variant="light" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container> */}

    </div>
  );
}

export default Demo;