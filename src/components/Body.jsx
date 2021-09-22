import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Body = ({ data }) => {
  return (
    <section className="feefo_body">
      <Row className="g-0">
        <Col md={12} className="feefo_border-bottom">
          <div className="feefo_sales">
            <div className="feefo_sales-header">
              <div>
                <FontAwesomeIcon icon={faDownload} /> <span> Sales</span>
              </div>
              <FontAwesomeIcon icon={faInfoCircle} />
            </div>
            <p className="feefo_sales-information">
              You had <span>{data.salesOverview.uploads} uploads</span> and{' '}
              <span>{data.salesOverview.linesAttempted}</span> lines added
            </p>
          </div>
        </Col>
        <Col md={6} className="feefo_boder-right">
          <div className="feefo_upload-success">
            <span>{data.salesOverview.successfulUploads}%</span>
            <p>upload success</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="feefo_upload-success">
            <span>{data.salesOverview.linesSaved}%</span>
            <p>upload success</p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Body;
