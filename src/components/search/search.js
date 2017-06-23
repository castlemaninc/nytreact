import React, { Component } from 'react';
import {Grid, Row, Col, Button, Form, FormGroup, FormControl, Panel} from 'react-bootstrap';


export default class Search extends Component {
	render(){
		return (
			<div>
				<Grid>
					<Row className="show-grid">
						<Col xs={0} md={1} lg={2}>
						</Col>
						<Col xs={12} md={10} lg={8}>
							<form>
								
								<FormGroup>
									<FormControl type="text" placeholder="Topic" />
								</FormGroup>
								<FormGroup>
									<FormControl type="text" placeholder="Start Year" />
								</FormGroup>
								<FormGroup>
									<FormControl type="text" placeholder="End Year" />
								</FormGroup>
																					
								    <Button type="submit" bsStyle="primary">
								      Submit
								    </Button>
								
							</form>
													
							
							

						</Col>
						<Col xs={0} md={1} lg={2}>
						</Col>
						
					</Row>					
				</Grid>
			</div>
		)
	}
}