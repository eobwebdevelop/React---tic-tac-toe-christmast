import React, {Component} from 'react'


class Player extends Component{
    
    handleForm(e){
        e.preventDefault();
        this.props.player(e.target.player.value);   
    }
    
    render (){
        return (
            <div>
                <form onSubmit={(e)=> this.handleForm(e)}>
                    <h6><sub>&tilde;</sub>Choose Your Player<sub>&tilde;</sub></h6>
                    <label>
                         <img alt="ico" className="icoPLayer" src={window.location.origin + '/noel128.png'}/>
                        <input type='radio' name='player' value='X'/>
                    </label>
                    <label>
                         <img alt="ico" className="icoPLayer" src={window.location.origin + '/krampus128.png'}/>
                        <input type='radio' name='player' value='O'/>
                    </label>
                    <button type="submit" className="btn start" value='start'> Start </button>
                </form>
            </div>

        )
    
    }

}

export default Player