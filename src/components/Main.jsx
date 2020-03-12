import React from "react";
import api from '../utils'
import {Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap'

class Main extends React.Component {
    state = { 
        movies: []
     }
    render() { 
        return ( 
        <>
        <Container>
            <div className="row">
                {this.state.movies.map(movie => 
                <div key="index">
                <Card className="col-6 col-sm-12">
                    <CardImg top width="100%" src={movie.Poster} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{movie.Title.toUpperCase()}</CardTitle>
                    <CardSubtitle>{movie.imdbID}</CardSubtitle>
                    <CardText>{movie.Year}</CardText>
                    <Button>Watch Now</Button>
                    </CardBody>
                </Card>
                </div>
    )}
            </div>

        </Container>
        </> 
        );
    }

    componentDidMount = async () => {
        console.log("component loaded")
        const res = await fetch(api)
        const json = await res.json()
        const movies = await json.Search
         console.log(movies)
        this.setState({
            movies: movies
        })
    }


}
 
export default Main;
