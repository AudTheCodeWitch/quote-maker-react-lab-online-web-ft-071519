import React from 'react';

const QuoteCard = ({quote, handleUpvote, handleDownvote, handleRemoveQuote}) =>
  <div>
    {console.log(quote)}
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
           <p>{quote.content}</p>
           <footer>- author <cite title="Source Title">{quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            onClick={() => handleUpvote(quote.id)}
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            type="button"
            onClick={() => handleDownvote(quote.id)}
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            type="button"
            onClick={() => handleRemoveQuote(quote.id)}
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
         <div>Votes: {quote.votes}</div>
      </div>
    </div>
  </div>;

export default QuoteCard;
