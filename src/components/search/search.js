import React, { Component } from 'react';
import {Grid, Row, Col, Button, Form, FormGroup, FormControl, Panel} from 'react-bootstrap';


export default class Search extends Component {
	render(){
		return (
			<div>
				<Grid>
					<Row className="show-grid">
						<Col xs={6} md={6}>
							<Panel>
								<Form inline>
									<FormControl type="search" />									
								    <Button type="submit" bsStyle="primary">
								      Submit
								    </Button>
								</Form>
							</Panel>						
							
							

						</Col>
						
						<Col xs={6} md={6}>
												
							
							

						</Col>
					</Row>					
				</Grid>
			</div>
		)
	}
}