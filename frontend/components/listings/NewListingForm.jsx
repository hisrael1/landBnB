import React from 'react';

class NewListingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {host_id: props.user.id, title: "", description: "", address: "", city: "", state: "", zipcode: "", num_baths: "", num_beds: "", max_num_guests: "", price_per_night: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const currentValue = e.target.value;
        const name = e.target.name
        this.setState({[name]: currentValue});
    }

    handleSubmit(e) {
        e.preventDefault;
        const listing = this.state;
        if (this.props.createNewListing(listing)) {
            this.setState({host_id: this.props.user.id, title: "", description: "", address: "", city: "", state: "", zipcode: "", num_baths: "", num_beds: "", max_num_guests: "", price_per_night: ""});
        }
    }
    
    

    render () {
        return (
            <div className="new-listing-container">
                <div className="new-listing-form">
                    <div className="new-listing-add-listing"> Add Listing </div>
                    Title <input className='new-listing-input' onChange={this.handleChange} value={this.state.title} name="title"/>
                    <div className="new-listing-border" ></div>
                    Description <input className='new-listing-input' type="text" onChange={this.handleChange} value={this.state.description} name="description"/>
                    <div className="new-listing-border"></div>
                    Address <input className='new-listing-input' onChange={this.handleChange} value={this.state.address} name="address"/>
                    <div className="new-listing-border"></div>
                    City <input className='new-listing-input' onChange={this.handleChange} value={this.state.city} name="city"/>
                    <div className="new-listing-border"></div>
                    State <input className='new-listing-input' onChange={this.handleChange} value={this.state.state} name="state"/>
                    <div className="new-listing-border"></div>
                    Zip Code <input className='new-listing-input' type="number" onChange={this.handleChange} value={this.state.zipcode} name="zipcode"/>
                    <div className="new-listing-border"></div>
                    Number of Bathrooms <input className='new-listing-input' type="number" onChange={this.handleChange} value={this.state.num_baths} name="num_baths"/>
                    <div className="new-listing-border"></div>
                    Number of Bedrooms <input className='new-listing-input' type="number" onChange={this.handleChange} value={this.state.num_beds} name="num_beds"/>
                    <div className="new-listing-border"></div>
                    Max Guests <input className='new-listing-input' type="number" onChange={this.handleChange} value={this.state.max_num_guests} name="max_num_guests"/>
                    <div className="new-listing-border"></div>
                    Price <input className='new-listing-input' type="number" onChange={this.handleChange} value={this.state.price_per_night} name="price_per_night"/>
                    <input onClick={this.handleSubmit} className='new-listing-submit' type="submit"/>
                </div>
            </div>
        )
    }
}

export default NewListingForm;
