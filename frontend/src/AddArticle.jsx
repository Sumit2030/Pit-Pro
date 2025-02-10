function AddArticle(){
    return (
        <div className="addarticle d-flex align-items-center">
        < form className="col-md-4 ms-auto me-auto">
            <h1 className="text-center">Add Article</h1>
            <div className="mb-3">
                <input className="form-control" type="text" placeholder="Article Title"/>
            </div>
            <div className="mb-3">
                
                <textarea placeholder="Artical Description" className="form-control"></textarea>
            </div>
        

        <button className="btn btn-warning" text-while>Add</button>
        </form>
        </div>

    )
}

export default AddArticle