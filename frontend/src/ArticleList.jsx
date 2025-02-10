function ArticleList() {
    return (
      <div className="container">
        <h1 className="text-center">Article List:</h1>
  
        <div className="box-container d-flex justify-content-center flex-wrap gap-3 p-4">
          <div className="article-card card shadow">
            <div className="card-body text-center">
              <h3>Article-1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi atque omnis quibusdam sit optio laborum quae sapiente.
              </p>
            </div>
            <button className="btn btn-warning text-white w-100">View Details</button>
          </div>
  
          <div className="article-card card shadow">
            <div className="card-body text-center">
              <h3>Article-2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi atque omnis quibusdam sit optio laborum quae sapiente.
              </p>
            </div>
            <button className="btn btn-warning text-white w-100">View Details</button>
          </div>
  
          <div className="article-card card shadow">
            <div className="card-body text-center">
              <h3>Article-3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi atque omnis quibusdam sit optio laborum quae sapiente.
              </p>
            </div>
            <button className="btn btn-warning text-white w-100">View Details</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ArticleList;