import React from "react";

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  // TODO: answer here
  const [quote, setQuote] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // TODO: answer here
    getQuote()
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  }

  // TODO: answer here
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <a href="/">Random Quote</a>
      </nav>
      <body className="container p-3">
        {loading && <div>Loading...</div>}
          <figure>
            <div >
              <p data-testid="quote">{quote.content}</p>
            </div>
            <div>
              {quote.author}
            </div>
          </figure>
        <button onClick={() => getQuote()}> Get another quote </button>
      </body>
    </>
  );
}