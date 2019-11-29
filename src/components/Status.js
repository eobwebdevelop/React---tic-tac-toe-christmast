import React, {Component} from 'react'
import Player from './ChoosePlayer'

class Status extends Component{

    handleSetPlayer(e) {
        
            this.props.setPlayer(e)
    }
    
    renderHTMLAfterWinner(){

        if(this.props.winner){
           return( 
           <h2> Winner is {this.props.winner === "X" ? "Santa!!" : "Krampus!!"} <img alt="ico" src={window.location.origin + '/corona.png'}/></h2>
           )         
        } else{
            return this.props.player ?
            <h2 className="red"> Nex player is {this.props.player === "X" ? "Santa" : "Krampus"} <img alt="ico" src={window.location.origin + '/etiqueta.png'} /></h2>: 
            <Player player={(e) => this.handleSetPlayer(e)} isSelected={this.props.player} />
        }

    }
    

    render(){
        return(
            <>
            {this.renderHTMLAfterWinner()}
            </>
        )
    }
}


export default Status