import React from 'react'
import Title from '../Components/Title'

class Home extends React.Component {
  constructor(){
    super()
    this.state={
      title:'Hello-title',
      description:'Thank you!'
    }
  }
  render (){
    return(
        <>
        {/* <h1>{this.state.title}</h1>
        <h1>{this.state.description}</h1> */}
        <Title title={this.state.title} description={this.state.description}/>
        {/* <Title heading="Hello"/>
        <Title heading="Hii"/>
        <Title heading="Hello"/> */}
        </>

    )
  }
}


export default Home
