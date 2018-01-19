import React, { Component } from 'react'
import { Segment, Label, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FetchGetAllCategories } from '../actions'

class Categories extends Component {
  componentDidMount() {
    this.props.dispatch(FetchGetAllCategories())
  }
  render() {
    const { categories } = this.props

    return (
      <Segment style={{ margin: '0px', padding: '20px' }}>
        <Header as='h4' content='Categorias' />
        <Label.Group color='blue'>
        {categories.map(category => (
          <Label as={Link} to={`/${category.path}`} key={category.name}>
            {category.name}
          </Label>
        ))}
        </Label.Group>
      </Segment>
    )
  }
}

const mapStateToProps = ({categories}) => ({
  categories
})

export default connect(mapStateToProps)(Categories)
