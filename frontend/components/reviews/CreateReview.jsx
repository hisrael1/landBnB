import React from 'react';
import Header from '../splash/Header';
import Footer from '../splash/Footer';

class CreateReview extends React.Component {
    constructor(props) {
        super(props);
        
        if (!this.props.currentUser.id) {
            this.props.history.push("/")
            alert("User must be logged in to create a review!")
            
        }

        this.state = {
            listing_id: parseInt(this.props.match.params.id), guest_id: this.props.currentUser.id, 
            rating: 5, cleanliness: 5, check_in: 5, accuracy: 5, location: 5,
            communication: 5, value: 5, body: ""
        }

        this.handleRating = this.handleRating.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.indexReviews();
    }

    handleRating(e) {
        e.preventDefault();
        const value = parseInt(e.currentTarget.value);
        const name = e.currentTarget.name;
        this.setState({[name]: value});
        console.log(this.state);
    }

    handleText(e) {
        e.preventDefault();
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        this.setState({[name]: value});
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.newReview(this.state);
        this.props.history.push("/")
    }



    render() {
        return (
            <div>
                <Header />
                <div id="create-review-prompt">
                    How was your stay at this place?
                </div>
                
                <div id="create-review-top-underline"></div>

                <form className="create-review-attribute-container" onSubmit={this.handleSubmit}>
                    <div className="create-review-attribute">
                        Overall Rating
                        <select className="review-ratings" name="rating" onChange={this.handleRating}>
                            <option value="5"><span> &#9733;</span> 5 </option>
                            <option value="4"><span> &#9733;</span> 4 </option>
                            <option value="3"><span> &#9733;</span> 3 </option>
                            <option value="2"><span> &#9733;</span> 2 </option>
                            <option value="1"><span> &#9733;</span> 1 </option>
                            
                        </select>
                    </div>
                    <div className="create-review-attribute">
                        Cleanliness
                        <select className="review-ratings" name="cleanliness" onChange={this.handleRating}>
                            <option value="5"><span> &#9733;</span> 5 </option>
                            <option value="4"><span> &#9733;</span> 4 </option>
                            <option value="3"><span> &#9733;</span> 3 </option>
                            <option value="2"><span> &#9733;</span> 2 </option>
                            <option value="1"><span> &#9733;</span> 1 </option>
                        </select>
                    </div>
                    <div className="create-review-attribute">
                        Check-In
                        <select className="review-ratings" name="check_in" onChange={this.handleRating}>
                            <option value="5"><span> &#9733;</span> 5 </option>
                            <option value="4"><span> &#9733;</span> 4 </option>
                            <option value="3"><span> &#9733;</span> 3 </option>
                            <option value="2"><span> &#9733;</span> 2 </option>
                            <option value="1"><span> &#9733;</span> 1 </option>
                        </select>
                    </div>                    
                    <div className="create-review-attribute">
                        Accuracy
                        <select className="review-ratings" name="accuracy" onChange={this.handleRating}>
                            <option value="5"><span> &#9733;</span> 5 </option>
                            <option value="4"><span> &#9733;</span> 4 </option>
                            <option value="3"><span> &#9733;</span> 3 </option>
                            <option value="2"><span> &#9733;</span> 2 </option>
                            <option value="1"><span> &#9733;</span> 1 </option>
                        </select>
                    </div>
                    <div className="create-review-attribute">
                        Location
                        <select className="review-ratings" name="location" onChange={this.handleRating}>
                            <option value="5"><span> &#9733;</span> 5 </option>
                            <option value="4"><span> &#9733;</span> 4 </option>
                            <option value="3"><span> &#9733;</span> 3 </option>
                            <option value="2"><span> &#9733;</span> 2 </option>
                            <option value="1"><span> &#9733;</span> 1 </option>
                        </select>
                    </div>
                    <div className="create-review-attribute">
                        Communication
                        <select className="review-ratings" name="communication" onChange={this.handleRating}>
                            <option value="5"><span> &#9733;</span> 5 </option>
                            <option value="4"><span> &#9733;</span> 4 </option>
                            <option value="3"><span> &#9733;</span> 3 </option>
                            <option value="2"><span> &#9733;</span> 2 </option>
                            <option value="1"><span> &#9733;</span> 1 </option>
                        </select>
                    </div>                    
                    <div className="create-review-attribute">
                        Value
                        <select className="review-ratings" name="value" onChange={this.handleRating}>
                            <option value="5"><span> &#9733;</span> 5 </option>
                            <option value="4"><span> &#9733;</span> 4 </option>
                            <option value="3"><span> &#9733;</span> 3 </option>
                            <option value="2"><span> &#9733;</span> 2 </option>
                            <option value="1"><span> &#9733;</span> 1 </option>
                        </select>
                    </div>

                    <div id="review-text-input-container">
                        <p>Write a public review</p>
                        <p id="review-lighter-text">Tell future travelers what they can expect at this place.</p>
                        <textarea id="review-text-input" name="body" value={this.state.body} onChange={this.handleText}></textarea>
                    </div>

                    <div id="submit-and-back-container">
                        <button id="review-back-button"> Back </button>
                        <input type="submit" id="create-review-submit"/>
                    </div>
                    
                </form>

                <Footer />               
            </div>
        )
    }
}

export default CreateReview;
