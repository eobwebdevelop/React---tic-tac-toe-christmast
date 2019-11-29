import './App.css';
import { Container, Row, Col, Modal, Button, Card} from 'react-bootstrap';
import React, {Component} from 'react';
import Status from './components/Status'


class App extends Component{
    constructor(props){
      super(props);
      this.state = {
          board: Array(9).fill(null),
          player: null,
          winner: null,
          show: true,
          isLoaded: false,
      }
    }

  

    checkWinner() {
      
      let winLines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]

      for (let index = 0; index< winLines.length; index++) {

        const [a,b,c] = winLines[index];

        if( this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){

          this.setState({

             winner: this.state.player

            });
            //alert('winner');

         
        }

        }


    }

    handlerEvent(index){
      let newBoard = this.state.board;
      if(this.state.board[index] === null && !this.state.winner){

        newBoard[index] = this.state.player
 
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O":"X"
        });

      }

      this.checkWinner();

    }

    setPlayer(player){

      this.setState({player});

    }

    renderBoxes(){
      return(
        this.state.board.map( 
        (box,index) => 
            <div
              className='square' key={index} 
              onClick={()=> this.handlerEvent(index) }
            >
              {box === null && box}
              {box === 'X' &&
                <img className="logImg" alt="imgSta" src={window.location.origin + '/noel128.png'}/>
              }
              {box === 'O' &&
                <img className="logImg" alt="imgSta" src={window.location.origin + '/krampus128.png'}/>
              }
            </div>
        )
      )
      
    }

    reset() {
      this.setState({
        board: Array(9).fill(null),
        player: null,
        winner: null
      })
    }

    handleClose () {
      this.setState({
        show: false,
        isLoaded: false
      })

    }

    handleShow () {
        this.setState({
          show: true,
          isLoaded: true
        });

    }
    
    render () {
        return (
      <>
      <Modal show={this.state.show} onHide={()=> this.handleClose()}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Row>
              <Col md={12}>
                  <h1 className="text-center font-weight-bold"> <sub>&tilde;</sub> Tic Tac Toe <sub>&tilde;</sub></h1>
                  <h3 className="font-weight-bold text-center">Christmas Edition!! </h3>
              </Col>
            </Row>
            <Row>    
                 <Col md={6}>
                      <Card>
                        <Card.Img variant="top" className="imgCard" src={window.location.origin + '/p-512.png'} />
                            <Card.Body>
                                <div className="text-center">
                                    <h3 className="font-weight-bold">Santa</h3>
                                    <h5 className="font-weight-bold">Player 1</h5>
                                </div>
                            </Card.Body>
                     </Card>
                </Col>
                <Col md={6}>               
                    <Card>
                        <Card.Img variant="top" className="imgCard" src={window.location.origin + '/k-512.png'}  />
                        <Card.Body>
                            <div className="text-center">
                                <h3 className="font-weight-bold">Krampus</h3>
                                <h5 className="font-weight-bold">Player 2</h5>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>             
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
              <Button variant="secondary" onClick={()=> this.handleClose()}>
                 Let's play!
              </Button>
        </Modal.Footer>
      </Modal>
      <ul className="lightrope">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
        <Container>
          <div className="vertically">
            <Row>
              <Col md={12}>
                <div className="text-center">
                  <h1> Santa vs Krampus</h1> 
                </div>
                <div className="text-center">
                  <Status 
                    player = {this.state.player} 
                    setPlayer = {(e) => {this.setPlayer(e)}}
                    winner={this.state.winner}
                    isSelected={this.state.isSelected}
                  />
                </div>
              </Col>
            </Row>
            <div className="wrapper d-flex justify-content-center align-items-center">
              {this.renderBoxes()}
            </div>
            <div className="d-flex justify-content-center button">
              <Button variant="secondary" className="d-flex justify-content-center playAgain" disabled={!this.state.winner}onClick={() => this.reset()}>Play Again!</Button>
            </div>
        </div>
        </Container>
     </>
        )      
      }
}

export default App;
