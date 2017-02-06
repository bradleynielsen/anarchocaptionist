import React from 'react'
import { connect } from "react-redux"
import { Row, Col } from 'react-grid-system'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router'


@connect((store) => {
  return {
  };
})
export default class Welcome extends React.Component {


  constructor() {
    super()
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.submitName = this.submitName.bind(this)
    
  }


  handleChange(event) {
    this.props.dispatch(changeInputNum(parseInt(event.target.value)))
  }

  handleNameChange(event) {
    this.props.dispatch(changeInputName(event.target.value))
  }

  submitName() {
    this.props.dispatch(submitName())
  }

  render() {
    return (
      <div>
          <Row>
            <Col md={8} offset={{ md: 4 }}>
                <Card>

                  <CardActions>

                    <RaisedButton
                      label="Users"
                      primary={true}
                      onClick={this.submitName}
                    />

                    <Link to={'loginpage'}>
                      <RaisedButton
                        label="Create a new Story"
                        primary={false}
                      />

                    </Link>
                  </CardActions>


                </Card>
            </Col>
          </Row>
        </div>
      );
    }
  }
