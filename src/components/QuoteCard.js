import React from 'react';

class QuoteCard extends React.Component {
    

    render() {
        return (
            <figure className="QuoteCard">
                <img src={this.props.image} alt={this.props.character} />
                <figcaption>
                    <blockquote>{this.props.quote}</blockquote>
                    <p>
                        <cite>{this.props.character}</cite>
                        
                    </p>
                </figcaption>
            </figure>
        );
    }
}

export default QuoteCard;